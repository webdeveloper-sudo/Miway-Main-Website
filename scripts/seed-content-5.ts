
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // FounderMessage Component
  { key: 'founder_tag', content: 'Academic Leadership', type: 'TEXT' },
  { key: 'founder_title', content: 'Architecting <br /> <span class=" text-accent"> Neural Pathways.</span>', type: 'TEXT' },
  { key: 'founder_quote_1', content: '"I built MIWAY Teaching Aids Pvt. Ltd., because I believed deeply that every child is born a genius and that the world\'s greatest tragedy is a brilliant mind that was never shown how to shine.', type: 'TEXT' },
  { key: 'founder_quote_2', content: 'I have seen classrooms where curiosity was quietly crushed. I have watched gifted children be labelled "average" simply because the system measured only one kind of intelligence. I refused to accept that.', type: 'TEXT' },
  { key: 'founder_quote_3', content: 'MIWAY Teaching Aids Pvt. Ltd., is my answer - a complete learning ecosystem built on love, science, and the unwavering belief that when children are taught how to think, not just what to think, they become unstoppable.', type: 'TEXT' },
  { key: 'founder_quote_4', content: 'It is a movement. A promise. A new beginning for every learner who opens these pages. "', type: 'TEXT' },
  { key: 'founder_name', content: 'Dr. J. Arawindhan', type: 'TEXT' },
  { key: 'founder_role', content: 'Chief Mentor & Visionary', type: 'TEXT' },
  { key: 'founder_cta', content: 'Discover Our Legacy', type: 'TEXT' },
];

async function main() {
  console.log('Seeding yet yet even more content...');
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
