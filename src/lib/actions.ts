'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', {
            redirect: false,
            ...Object.fromEntries(formData),
        });
        revalidatePath('/admin');
        redirect('/admin');
    } catch (error: any) {
        if (error.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }

        console.error('Detailed Auth Error:', {
            name: error.name,
            message: error.message,
            cause: error.cause,
            type: error.type
        });

        if (error instanceof AuthError) {
            const cause = error.cause as any;
            const detail = cause?.err?.message || cause?.message || error.message || error.type;
            return `Auth failure: ${detail} (Type: ${error.type})`;
        }
        return `Unexpected error: ${error.message || 'Check logs'}`;
    }
}

import { existsSync } from 'fs';
import { resolve } from 'path';

export async function runDiagnostic() {
    const dbPath = resolve(process.cwd(), 'prisma/dev.db');
    const exists = existsSync(dbPath);

    let dbContentCount = 0;
    let dbError = null;

    try {
        dbContentCount = await prisma.user.count();
    } catch (e: any) {
        dbError = e.message;
    }

    return {
        cwd: process.cwd(),
        dbPath,
        dbExists: exists,
        userCount: dbContentCount,
        dbError,
        envSecret: !!process.env.AUTH_SECRET,
        envUrl: process.env.AUTH_URL || 'not set',
    };
}

export async function deleteBundle(id: string) {
    try {
        await prisma.bundle.delete({ where: { id } });
        revalidatePath('/admin/bundles');
    } catch (error) {
        console.error('Failed to delete bundle:', error);
        throw new Error('Failed to delete bundle.');
    }
}

export async function createBundle(formData: FormData) {
    const title = formData.get('title') as string;
    const grade = formData.get('grade') as string;
    const subjects = formData.get('subjects') as string; // Comma separated
    const features = formData.get('features') as string; // Line separated or something

    // Quick parse for demo
    const subjectList = JSON.stringify(subjects.split(',').map(s => s.trim()));
    const featureList = JSON.stringify(features.split('\n').map(f => f.trim()).filter(Boolean));

    await prisma.bundle.create({
        data: {
            title,
            grade,
            subjects: subjectList,
            features: featureList
        }
    });

    revalidatePath('/admin/bundles');
    redirect('/admin/bundles?success=true');
}

export async function updateBundle(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const grade = formData.get('grade') as string;
    const subjects = formData.get('subjects') as string; // Comma separated
    const features = formData.get('features') as string; // Line separated or something

    // Quick parse for demo
    const subjectList = JSON.stringify(subjects.split(',').map(s => s.trim()));
    const featureList = JSON.stringify(features.split('\n').map(f => f.trim()).filter(Boolean));

    await prisma.bundle.update({
        where: { id },
        data: {
            title,
            grade,
            subjects: subjectList,
            features: featureList
        }
    });

    revalidatePath('/admin/bundles');
    redirect('/admin/bundles?success=true');
}

export async function createBook(formData: FormData) {
    const title = formData.get('title') as string;
    const subject = formData.get('subject') as string;
    const type = formData.get('type') as string;
    const bundleId = formData.get('bundleId') as string;

    await prisma.book.create({
        data: {
            title,
            subject,
            type,
            bundleId
        }
    });

    revalidatePath('/admin/books');
    redirect('/admin/books?success=true');
}

export async function updateBook(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const subject = formData.get('subject') as string;
    const type = formData.get('type') as string;
    const bundleId = formData.get('bundleId') as string;

    await prisma.book.update({
        where: { id },
        data: {
            title,
            subject,
            type,
            bundleId
        }
    });

    revalidatePath('/admin/books');
    redirect('/admin/books?success=true');
}

export async function deleteBook(id: string) {
    try {
        await prisma.book.delete({ where: { id } });
        revalidatePath('/admin/books');
    } catch (error) {
        console.error('Failed to delete book:', error);
        throw new Error('Failed to delete book.');
    }
}

export async function submitEnquiry(formData: FormData) {
    const name = formData.get('name') as string;
    const school = formData.get('school') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    await prisma.enquiry.create({
        data: {
            name,
            school,
            email,
            phone,
            message,
        },
    });

    revalidatePath('/admin/enquiries');
}

export async function deleteEnquiry(id: string) {
    try {
        await prisma.enquiry.delete({ where: { id } });
        revalidatePath('/admin/enquiries');
    } catch (error) {
        console.error('Failed to delete enquiry:', error);
        throw new Error('Failed to delete enquiry.');
    }
}

export async function updateEnquiryStatus(id: string, status: string) {
    try {
        await prisma.enquiry.update({
            where: { id },
            data: { status }
        });
        revalidatePath('/admin/enquiries');
    } catch (error) {
        console.error('Failed to update enquiry status:', error);
        throw new Error('Failed to update enquiry status.');
    }
}

import { auth } from '@/auth';
import bcrypt from 'bcryptjs';

export async function updatePassword(formData: FormData) {
    const session = await auth();
    if (!session?.user?.email) {
        return { error: 'Not authenticated' };
    }

    const newPassword = formData.get('newPassword') as string;
    if (!newPassword || newPassword.length < 6) {
        return { error: 'Password must be at least 6 characters' };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    try {
        await prisma.user.update({
            where: { email: session.user.email },
            data: { password: hashedPassword }
        });
        return { success: true };
    } catch (error) {
        console.error('Failed to update password:', error);
        return { error: 'Failed to update password' };
    }
}

import cloudinary from '@/lib/cloudinary';


export async function uploadImage(formData: FormData) {
    try {
        const file = formData.get('file') as File;
        if (!file) {
            return { success: false, error: 'No file provided' };
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Cloudinary
        const uploadResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: 'miway_uploads',
                    resource_type: 'auto',
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        const result = uploadResponse as any;

        return {
            success: true,
            url: result.secure_url
        };
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        return { success: false, error: 'Failed to upload image' };
    }
}


// CMS Content Management Actions
export async function updateSiteContent(key: string, content: string, type: string = 'TEXT') {
    try {
        await (prisma.siteContent as any).upsert({
            where: { key },
            update: {
                content,
                // Only update type if it's provided (backward compatibility until schema is pushed)
                ...(type !== 'TEXT' ? { type } : {})
            },
            create: {
                key,
                content,
                type
            }
        });

        // Revalidate all pages that might use this content
        const prefix = key.split('_')[0];
        revalidatePath(`/${prefix === 'home' ? '' : prefix}`);
        revalidatePath('/admin/content');

        return { success: true };
    } catch (error) {
        console.error('Error updating content:', error);
        return { success: false, error: 'Failed to update content' };
    }
}

export async function getAllSiteContent() {
    return await prisma.siteContent.findMany({
        orderBy: { key: 'asc' }
    });
}
