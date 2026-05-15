
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // Six Beliefs Component
  { key: 'about_belief1_title', content: 'Think First, Then Know', type: 'TEXT' },
  { key: 'about_belief1_desc', content: 'We build thinkers before we build knowledge-holders. Cognition precedes content in everything we design.', type: 'TEXT' },
  { key: 'about_belief2_title', content: 'See the Whole Child', type: 'TEXT' },
  { key: 'about_belief2_desc', content: 'Academic achievement is one dimension of a human being. We nurture all ten — including soul and money wisdom.', type: 'TEXT' },
  { key: 'about_belief3_title', content: 'Learning Is Lifelong', type: 'TEXT' },
  { key: 'about_belief3_desc', content: 'We build habits and frameworks that serve a child at age 8, age 28, and age 58. Education for life, not exams.', type: 'TEXT' },
  { key: 'about_belief4_title', content: 'Creativity Is Intelligence', type: 'TEXT' },
  { key: 'about_belief4_desc', content: 'The highest level of Bloom\'s Taxonomy is creation. We treat imagination as a measurable, teachable cognitive skill.', type: 'TEXT' },
  { key: 'about_belief5_title', content: 'Character Before Content', type: 'TEXT' },
  { key: 'about_belief5_desc', content: 'Empathy, integrity, and purpose are not extracurricular. They are the first subjects we teach, and the last we forget.', type: 'TEXT' },
  { key: 'about_belief6_title', content: 'Built for Tomorrow', type: 'TEXT' },
  { key: 'about_belief6_desc', content: 'We design for the world that doesn\'t exist yet — equipping children with adaptability, resilience, and digital confidence.', type: 'TEXT' },
];

async function main() {
  console.log('Seeding the final missing pieces...');
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
