import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Hardcoded live web app URL to guarantee it works without waiting for environment reloads
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw97AcIPz4cOBPLer9AjYI5_oWfMHR03e3iBFyJII4j6tyCGVgMiviTE81YzxhqVpx1/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, school, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // ── 1. Save to Neon PostgreSQL Database ─────────────────────────────────
    const enquiry = await prisma.enquiry.create({
      data: {
        name:    name    || '',
        school:  school  || '',
        email:   email   || '',
        phone:   phone   || '',
        message: message || '',
        status:  'NEW',
      },
    });

    // ── 2. Mirror to Google Sheet (Secure Server-to-Server Fetch) ───────────
    console.log(`[API /enquiry] Direct Server sync to Google Sheet via: ${GOOGLE_SCRIPT_URL}`);
    
    // We run it as a non-blocking background promise to keep form submission lightning-fast for users
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, school, email, phone, message }),
    })
      .then(async (res) => {
        const text = await res.text();
        console.log(`[API /enquiry] Google Apps Script Sync Success! Status: ${res.status}, Response:`, text);
      })
      .catch((gasErr) => {
        console.error('[API /enquiry] Google Apps Script Sync Error:', gasErr);
      });

    return NextResponse.json({ success: true, id: enquiry.id }, { status: 201 });
  } catch (error: any) {
    console.error('[API /enquiry] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save enquiry' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error: any) {
    console.error('[API /enquiry] GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch enquiries' },
      { status: 500 }
    );
  }
}
