import { getPageContent } from '@/lib/content';
import { bundles } from '@/lib/bundles';
import BundlesClient from './BundlesClient';

export default async function BundlesPage() {
    const content = await getPageContent('bundles_');

    const bundlesWithContent = bundles.map(b => ({
        ...b,
        title: content[`${b.contentKey}_title`] || b.titleDefault,
        image: content[`${b.contentKey}_image`],
        grades: content[`${b.contentKey}_grade`] || b.gradeDefault,
        focus: content[`${b.contentKey}_focus`] || b.focusDefault,
        description: content[`${b.contentKey}_desc`] || b.descDefault,
    }));

    return <BundlesClient content={content} bundles={bundlesWithContent} />;
}
