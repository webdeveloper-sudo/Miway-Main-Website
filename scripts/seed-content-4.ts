
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // CurriculamPortfolio Component
  { key: 'portfolio_tag', content: 'Institutional Solutions', type: 'TEXT' },
  { key: 'portfolio_title', content: 'The Curriculam <span class=" text-accent"> Portfolio.</span>', type: 'TEXT' },
  { key: 'portfolio_cta', content: 'View Full Catalog', type: 'TEXT' },
  { key: 'portfolio_pre_primary_title', content: 'Pre-Primary', type: 'TEXT' },
  { key: 'portfolio_pre_primary_grade', content: 'pre-mont to mont-II', type: 'TEXT' },
  { key: 'portfolio_pre_primary_sub', content: 'Sensory Mastery', type: 'TEXT' },
  { key: 'portfolio_pre_primary_desc', content: 'Early childhood ecosystem focusing on sensory development and motor skill refinement.', type: 'TEXT' },
  { key: 'portfolio_primary_title', content: 'Primary', type: 'TEXT' },
  { key: 'portfolio_primary_grade', content: 'Grades 1 - 5', type: 'TEXT' },
  { key: 'portfolio_primary_sub', content: 'Cognitive Foundation', type: 'TEXT' },
  { key: 'portfolio_primary_desc', content: 'Multi-volume workbooks and memory mapping tools for neuro-cognitive development.', type: 'TEXT' },
  { key: 'portfolio_middle_title', content: 'Middle School', type: 'TEXT' },
  { key: 'portfolio_middle_grade', content: 'Grades 6 - 8', type: 'TEXT' },
  { key: 'portfolio_middle_sub', content: 'Conceptual Mastery', type: 'TEXT' },
  { key: 'portfolio_middle_desc', content: 'Advanced science and logic modules with case-study methods for systemic thinking.', type: 'TEXT' },

  // Testimonials Component
  { key: 'testimonial_tag', content: 'Parental Voices', type: 'TEXT' },
  { key: 'testimonial_title', content: 'Voices of <span class="text-accent"> Transformation.</span>', type: 'TEXT' },
  { key: 'testimonial_desc', content: 'Real stories from parents who have witnessed the cognitive evolution of their children.', type: 'TEXT' },
  { key: 'testimonial1_name', content: 'Arjun', type: 'TEXT' },
  { key: 'testimonial1_role', content: 'Parent of Grade 3 Student', type: 'TEXT' },
  { key: 'testimonial1_text', content: "MIWAY Books have completely transformed how my son approaches learning. He no longer just memorizes; he truly understands the 'why' behind every concept. The cognitive growth I've seen is remarkable.", type: 'TEXT' },
  { key: 'testimonial2_name', content: 'Kavitha', type: 'TEXT' },
  { key: 'testimonial2_role', content: 'Parent of Pre-Primary Student', type: 'TEXT' },
  { key: 'testimonial2_text', content: "The sensory-based approach in the Pre-Primary modules is genius. My daughter is so engaged with the tactile elements and visual storytelling. It's the first time she's genuinely excited about books.", type: 'TEXT' },
  { key: 'testimonial3_name', content: 'Murugan', type: 'TEXT' },
  { key: 'testimonial3_role', content: 'Parent of Grade 7 Student', type: 'TEXT' },
  { key: 'testimonial3_text', content: "As a parent, I was always looking for something that goes beyond the standard curriculum. MIWAY's focus on neural pathways and critical thinking is exactly what the modern education system needs.", type: 'TEXT' },
  { key: 'testimonial4_name', content: 'Latha', type: 'TEXT' },
  { key: 'testimonial4_role', content: 'Parent of Grade 5 Student', type: 'TEXT' },
  { key: 'testimonial4_text', content: "The Mastery Spiral methodology is a game-changer. I've noticed my child retaining information much longer because concepts are revisited with increasing complexity. It builds real confidence.", type: 'TEXT' },
  { key: 'testimonial5_name', content: 'Kumar', type: 'TEXT' },
  { key: 'testimonial5_role', content: 'Parent of Grade 2 Student', type: 'TEXT' },
  { key: 'testimonial5_text', content: "The quality of the materials and the depth of the research behind MIWAY are evident in every page. It's not just a book series; it's a complete brain-development ecosystem.", type: 'TEXT' },
  { key: 'testimonial6_name', content: 'Priya', type: 'TEXT' },
  { key: 'testimonial6_role', content: 'Parent of Grade 4 Student', type: 'TEXT' },
  { key: 'testimonial6_text', content: "I am amazed at how MIWAY simplifies complex topics through visual mapping. My child's spatial intelligence has improved significantly, and her problem-solving skills are now far beyond her age.", type: 'TEXT' },
];

async function main() {
  console.log('Seeding yet even more content...');
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
