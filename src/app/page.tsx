import { getPageContent } from '@/lib/content';
import HomeClient from './HomeClient';

export default async function Home() {
    const content = await getPageContent([
        'home_', 
        'phil_', 
        'dim', 
        'genius_', 
        'pillar', 
        'portfolio_', 
        'mastery_', 
        'founder_', 
        'reason', 
        'testimonial_'
    ]);

    return <HomeClient content={content} />;
}
