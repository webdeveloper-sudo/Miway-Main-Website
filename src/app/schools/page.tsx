import { getPageContent } from '@/lib/content';
import SchoolsClient from './SchoolsClient';

export default async function SchoolsPage() {
    const content = await getPageContent('schools_');
    return <SchoolsClient content={content} />;
}
