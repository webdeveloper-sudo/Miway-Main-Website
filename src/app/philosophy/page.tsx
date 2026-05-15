import { getPageContent } from '@/lib/content';
import PhilosophyClient from './PhilosophyClient';

export default async function PhilosophyPage() {
    const content = await getPageContent(['philosophy_', 'pillar', 'dim']);
    return <PhilosophyClient content={content} />;
}
