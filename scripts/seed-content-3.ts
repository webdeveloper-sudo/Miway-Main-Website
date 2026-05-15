
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // GeniusSpiral Component
  { key: 'genius_tag', content: 'Our Core Conviction', type: 'TEXT' },
  { key: 'genius_title', content: 'Every Child Is a <span class=" text-accent"> Genius.</span>', type: 'TEXT' },
  { key: 'genius_desc', content: 'Our pedagogical architecture is built on the scientific conviction that cognitive excellence is not inherited, but engineered through structured curiosity and sensory immersion.', type: 'TEXT' },
  { key: 'genius_point1_title', content: 'Personalized Trajectories', type: 'TEXT' },
  { key: 'genius_point1_desc', content: 'Adaptive learning paths for unique neural patterns.', type: 'TEXT' },
  { key: 'genius_point2_title', content: 'Neuro-Spatial Mastery', type: 'TEXT' },
  { key: 'genius_point2_desc', content: 'Leveraging spatial intelligence for complex conceptualization.', type: 'TEXT' },
  { key: 'genius_point3_title', content: 'Continuous Iteration', type: 'TEXT' },
  { key: 'genius_point3_desc', content: 'The spiral approach ensures no core concept is ever lost.', type: 'TEXT' },
  { key: 'genius_cta', content: 'Explore Framework', type: 'TEXT' },
  { key: 'genius_activation_commitment', content: 'Potential Activation Commitment', type: 'TEXT' },

  // ParentChoose Component
  { key: 'reason1_title', content: 'Neuroscience-Backed', type: 'TEXT' },
  { key: 'reason1_desc', content: 'Revisiting concepts with progressive complexity.', type: 'TEXT' },
  { key: 'reason2_title', content: 'Crafted with Love', type: 'TEXT' },
  { key: 'reason2_desc', content: 'Built by educators who believe every child deserves to experience the joy of truly understanding something.', type: 'TEXT' },
  { key: 'reason3_title', content: 'Globally Relevant', type: 'TEXT' },
  { key: 'reason3_desc', content: 'Designed for the international education market — timeless enough for today, visionary enough for tomorrow.', type: 'TEXT' },
];

async function main() {
  console.log('Seeding even more content...');
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
