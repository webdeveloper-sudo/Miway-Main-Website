
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // Bundle Listing - Pre-Primary
  { key: 'bundles_item_1_title', content: 'Pre-Primary School Portfolio', type: 'TEXT' },
  { key: 'bundles_item_1_grade', content: 'Pre-Mont to Mont-II', type: 'TEXT' },
  { key: 'bundles_item_1_focus', content: 'Sensory Mastery', type: 'TEXT' },
  { key: 'bundles_item_1_desc', content: 'Early childhood ecosystem focusing on sensory development, motor skill refinement, and joyful discovery.', type: 'TEXT' },
  
  // Bundle Listing - Primary
  { key: 'bundles_item_2_title', content: 'Primary School Portfolio', type: 'TEXT' },
  { key: 'bundles_item_2_grade', content: 'Grades 1-5', type: 'TEXT' },
  { key: 'bundles_item_2_focus', content: 'Foundation for Success', type: 'TEXT' },
  { key: 'bundles_item_2_desc', content: 'Integrated multi-volume workbooks and visual memory mapping tools designed for neuro-cognitive development.', type: 'TEXT' },
  
  // Bundle Listing - Middle
  { key: 'bundles_item_3_title', content: 'Middle School Portfolio', type: 'TEXT' },
  { key: 'bundles_item_3_grade', content: 'Grades 6-8', type: 'TEXT' },
  { key: 'bundles_item_3_focus', content: 'Deep Conceptual Mastery', type: 'TEXT' },
  { key: 'bundles_item_3_desc', content: 'Advanced science and logic modules with case-study methods for critical analysis and systemic thinking.', type: 'TEXT' },
];

async function main() {
  console.log('Seeding bundle listing content...');
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
