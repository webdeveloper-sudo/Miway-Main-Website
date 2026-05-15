
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // Bundle Detail Page
  { key: 'bundle_why_choose_tag', content: 'Neural Evolution', type: 'TEXT' },
  { key: 'bundle_why_choose_title', content: 'Why Choose <span class=" text-accent"> {bundle_title}</span>', type: 'TEXT' },
  { key: 'bundle_why_choose_desc', content: 'Our curriculum is engineered for high-engagement classrooms, providing a holistic framework for cognitive and character development.', type: 'TEXT' },
  { key: 'bundle_ecosystem_tag', content: 'Inside the Box', type: 'TEXT' },
  { key: 'bundle_ecosystem_title', content: 'Complete Learning <span class=" text-accent"> Ecosystem.</span>', type: 'TEXT' },
  { key: 'bundle_ecosystem_desc', content: 'Everything a student needs to master the curriculum.', type: 'TEXT' },
  { key: 'bundle_need1_title', content: 'Neural Textbooks', type: 'TEXT' },
  { key: 'bundle_need1_desc', content: 'Neuroscience-backed layouts for maximum retention.', type: 'TEXT' },
  { key: 'bundle_need2_title', content: 'Digital Modules', type: 'TEXT' },
  { key: 'bundle_need2_desc', content: 'Interactive content accessible on all modern devices.', type: 'TEXT' },
  { key: 'bundle_need3_title', content: 'Practice Manuals', type: 'TEXT' },
  { key: 'bundle_need3_desc', content: 'Hands-on exercises to solidify core concepts.', type: 'TEXT' },
  { key: 'bundle_need4_title', content: 'Teacher Guides', type: 'TEXT' },
  { key: 'bundle_need4_desc', content: 'Comprehensive instructions for effective deployment.', type: 'TEXT' },
];

async function main() {
  console.log('Seeding yet yet yet yet even more content...');
  for (const item of content) {
    await prisma.siteContent.upsert({
      where: { key: item.key },
      update: {},
      create: item,
    });
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
