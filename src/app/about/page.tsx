import { getPageContent } from '@/lib/content';
import AboutClient from './AboutClient';

export default async function AboutPage() {
    const content = await getPageContent('about_');
    return <AboutClient content={content} />;
}
