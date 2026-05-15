
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // Eight Pillars Component
  { key: 'pillar1_title', content: 'Spiral Learning', type: 'TEXT' },
  { key: 'pillar1_desc', content: 'Revisiting concepts with progressive complexity.', type: 'TEXT' },
  { key: 'pillar2_title', content: '7 Habits Integration', type: 'TEXT' },
  { key: 'pillar2_desc', content: 'Fostering proactivity and synergy.', type: 'TEXT' },
  { key: 'pillar3_title', content: 'Neural Integration', type: 'TEXT' },
  { key: 'pillar3_desc', content: 'Engaging both analytical and creative minds.', type: 'TEXT' },
  { key: 'pillar4_title', content: 'Multiple Intelligences', type: 'TEXT' },
  { key: 'pillar4_desc', content: 'Engaging diverse cognitive capacities.', type: 'TEXT' },
  { key: 'pillar5_title', content: 'Bloom’s Taxonomy', type: 'TEXT' },
  { key: 'pillar5_desc', content: 'Structured cognitive journey to mastery.', type: 'TEXT' },
  { key: 'pillar6_title', content: 'Six Thinking Hats', type: 'TEXT' },
  { key: 'pillar6_desc', content: 'Solving complex problems through perspectives.', type: 'TEXT' },
  { key: 'pillar7_title', content: 'Whole Brain Mastery', type: 'TEXT' },
  { key: 'pillar7_desc', content: 'Philosophical activation of brain regions.', type: 'TEXT' },
  { key: 'pillar8_title', content: '21st Century Skills', type: 'TEXT' },
  { key: 'pillar8_desc', content: 'Digital literacy and global collaboration.', type: 'TEXT' },

  // Ten Dimensions Component
  { key: 'dim_tag', content: 'The Intelligence Wheel', type: 'TEXT' },
  { key: 'dim_title', content: 'Ten Dimensions of <span class=" text-accent"> Human Genius.</span>', type: 'TEXT' },
  { key: 'dim_cta', content: 'Discover the Full Spectrum', type: 'TEXT' },
  { key: 'dim1_name', content: 'Word Smart', type: 'TEXT' },
  { key: 'dim1_sub', content: 'Linguistic Intelligence', type: 'TEXT' },
  { key: 'dim2_name', content: 'Logic Smart', type: 'TEXT' },
  { key: 'dim2_sub', content: 'Logical-Mathematical', type: 'TEXT' },
  { key: 'dim3_name', content: 'Money Smart', type: 'TEXT' },
  { key: 'dim3_sub', content: 'Financial Intelligence', type: 'TEXT' },
  { key: 'dim4_name', content: 'Life Smart', type: 'TEXT' },
  { key: 'dim4_sub', content: 'Spiritual Intelligence', type: 'TEXT' },
  { key: 'dim5_name', content: 'Body Smart', type: 'TEXT' },
  { key: 'dim5_sub', content: 'Kinesthetic', type: 'TEXT' },
  { key: 'dim6_name', content: 'Nature Smart', type: 'TEXT' },
  { key: 'dim6_sub', content: 'Naturalistic', type: 'TEXT' },
  { key: 'dim7_name', content: 'Picture Smart', type: 'TEXT' },
  { key: 'dim7_sub', content: 'Spatial Intelligence', type: 'TEXT' },
  { key: 'dim8_name', content: 'Music Smart', type: 'TEXT' },
  { key: 'dim8_sub', content: 'Musical Intelligence', type: 'TEXT' },
  { key: 'dim9_name', content: 'People Smart', type: 'TEXT' },
  { key: 'dim9_sub', content: 'Interpersonal', type: 'TEXT' },
  { key: 'dim10_name', content: 'Self Smart', type: 'TEXT' },
  { key: 'dim10_sub', content: 'Intrapersonal', type: 'TEXT' },
];

async function main() {
  console.log('Seeding more content...');
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
