
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // MasterySpiral Component
  { key: 'mastery_level1_title', content: 'Foundation', type: 'TEXT' },
  { key: 'mastery_level1_desc', content: 'Core concepts and sensory understanding.', type: 'TEXT' },
  { key: 'mastery_level2_title', content: 'Deepening', type: 'TEXT' },
  { key: 'mastery_level2_desc', content: 'Expanding neural pathways through repetition.', type: 'TEXT' },
  { key: 'mastery_level3_title', content: 'Integration', type: 'TEXT' },
  { key: 'mastery_level3_desc', content: 'Connecting interdisciplinary knowledge systems.', type: 'TEXT' },
  { key: 'mastery_level4_title', content: 'Mastery', type: 'TEXT' },
  { key: 'mastery_level4_desc', content: 'Achieving confident independent learning.', type: 'TEXT' },
];

async function main() {
  console.log('Seeding yet yet yet even more content...');
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
