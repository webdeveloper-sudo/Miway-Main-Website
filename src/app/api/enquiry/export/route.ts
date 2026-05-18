import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function escapeCsv(value: string | null | undefined): string {
  if (value == null) return '';
  const str = String(value);
  // Wrap in quotes if it contains commas, quotes, or newlines
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const headers = ['ID', 'Name', 'School / Institution', 'Email', 'Phone', 'Message', 'Status', 'Date'];

    const rows = enquiries.map((e) => [
      escapeCsv(e.id),
      escapeCsv(e.name),
      escapeCsv(e.school),
      escapeCsv(e.email),
      escapeCsv(e.phone),
      escapeCsv(e.message),
      escapeCsv(e.status),
      escapeCsv(new Date(e.createdAt).toLocaleString()),
    ].join(','));

    const csv = [headers.join(','), ...rows].join('\r\n');

    const filename = `miway-enquiries-${new Date().toISOString().split('T')[0]}.csv`;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('[API /enquiry/export] Error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}
