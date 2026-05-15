import { getPageContent } from '@/lib/content';
import AboutClient from './AboutClient';

export default async function AboutPage() {
    const content = await getPageContent(['about_', 'phil_', 'genius_', 'founder_']);
    return <AboutClient content={content} />;
}
