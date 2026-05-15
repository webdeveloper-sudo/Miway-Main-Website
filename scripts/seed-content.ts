
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const content = [
  // Home Page - Hero
  { key: 'home_hero_tag', content: 'The Future of Human Learning', type: 'TEXT' },
  { key: 'home_hero_title', content: 'Not Just Learning. <br /> <span class="font-serif font-medium text-accent">Becoming. Transforming.</span>', type: 'TEXT' },
  { key: 'home_hero_desc', content: "MIWAY Teaching Aids Pvt. Ltd., is a neuroscience-powered learning ecosystem designed to unlock every child's infinite potential — building thinkers, creators, innovators, and leaders for tomorrow's world.", type: 'TEXT' },
  { key: 'home_hero_cta', content: 'Explore Methodology', type: 'TEXT' },
  
  // Home Page - Stats
  { key: 'home_stats_schools_value', content: '50+', type: 'TEXT' },
  { key: 'home_stats_schools_label', content: 'Partner Schools', type: 'TEXT' },
  { key: 'home_stats_schools_sub', content: 'Elite Capabilities', type: 'TEXT' },
  { key: 'home_stats_minds_value', content: '10K+', type: 'TEXT' },
  { key: 'home_stats_minds_label', content: 'Active Minds', type: 'TEXT' },
  { key: 'home_stats_minds_sub', content: 'Engaged Daily', type: 'TEXT' },
  { key: 'home_stats_modules_value', content: '100+', type: 'TEXT' },
  { key: 'home_stats_modules_label', content: 'Neural Modules', type: 'TEXT' },
  { key: 'home_stats_modules_sub', content: 'Curriculum Depth', type: 'TEXT' },
  { key: 'home_stats_rd_value', content: '25+', type: 'TEXT' },
  { key: 'home_stats_rd_label', content: 'Years R&D', type: 'TEXT' },
  { key: 'home_stats_rd_sub', content: 'Cognitive Science', type: 'TEXT' },
  
  // Home Page - Pillars Section
  { key: 'home_pillars_tag', content: 'Pedagogical Framework', type: 'TEXT' },
  { key: 'home_pillars_title', content: 'Eight Pillars of Extraordinary <span class=" text-accent"> Learning.</span>', type: 'TEXT' },
  { key: 'home_pillars_desc', content: 'A multidimensional architecture designed to activate the full spectrum of human cognitive capacity.', type: 'TEXT' },
  
  // Home Page - Mastery Spiral
  { key: 'home_mastery_tag', content: 'Spiral Learning', type: 'TEXT' },
  { key: 'home_mastery_title', content: 'Knowledge Grows in <span class=" text-accent"> Circles.</span>', type: 'TEXT' },
  { key: 'home_mastery_desc_1', content: "True mastery is never linear. MIWAY's Spiral Learning architecture revisits core concepts at progressively deeper levels — each encounter building on the last, creating knowledge that compounds with time.", type: 'TEXT' },
  { key: 'home_mastery_desc_2', content: "Progressive lessons build on foundations. Cumulative assessments reinforce previous knowledge. Recursive projects revisit core ideas with fresh eyes. Learning doesn't just accumulate — it multiplies.", type: 'TEXT' },
  { key: 'home_mastery_cta', content: 'Deep Dive into Framework', type: 'TEXT' },
  
  // Home Page - Mastery Points
  { key: 'home_mastery_point1_title', content: 'Foundation', type: 'TEXT' },
  { key: 'home_mastery_point1_desc', content: 'Concepts are revisited with exponential complexity, anchoring knowledge into long-term neural mastery.', type: 'TEXT' },
  { key: 'home_mastery_point2_title', content: 'Deepening', type: 'TEXT' },
  { key: 'home_mastery_point2_desc', content: 'Leveraging spatial intelligence for complex.', type: 'TEXT' },
  { key: 'home_mastery_point3_title', content: 'Integration', type: 'TEXT' },
  { key: 'home_mastery_point3_desc', content: 'The spiral approach ensures no core concept is ever lost.', type: 'TEXT' },
  { key: 'home_mastery_point4_title', content: 'Mastery', type: 'TEXT' },
  { key: 'home_mastery_point4_desc', content: 'The spiral approach ensures no core concept is ever lost.', type: 'TEXT' },
  
  // Home Page - Parent Trust
  { key: 'home_parent_trust_tag', content: 'Parent Trust', type: 'TEXT' },
  { key: 'home_parent_trust_title', content: 'When Parents Choose MIWAY <br /> <span class=" text-accent">They Choose Certainty</span>', type: 'TEXT' },
  { key: 'home_parent_trust_cta', content: 'View Full Catalog', type: 'TEXT' },
  
  // Philosophy Page
  { key: 'philosophy_hero_title', content: 'The MIWAY <br /> <span class="text-accent">Framework.</span>', type: 'TEXT' },
  { key: 'philosophy_hero_desc', content: 'A synthesis of global best practices and neural science. We architect the pathway for human potential.', type: 'TEXT' },
  { key: 'philosophy_pillars_tag', content: 'Pedagogical Framework', type: 'TEXT' },
  { key: 'philosophy_pillars_title', content: 'Eight Pillars of Extraordinary <span class=" text-accent"> Learning.</span>', type: 'TEXT' },
  { key: 'philosophy_pillars_desc', content: 'A multidimensional architecture designed to activate the full spectrum of human cognitive capacity.', type: 'TEXT' },

  // About Page
  { key: 'about_hero_title', content: 'Institutional <br /> <span class="text-accent">Legacy.</span>', type: 'TEXT' },
  { key: 'about_hero_desc', content: 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning ecosystems.', type: 'TEXT' },
  { key: 'about_beliefs_tag', content: 'What We Stand For', type: 'TEXT' },
  { key: 'about_beliefs_title', content: 'Six Beliefs That <span class="text-accent"> Define Everything We Do.</span>', type: 'TEXT' },
  { key: 'about_beliefs_desc', content: 'These are not brand values on a wall. They are the engineering principles behind every book we create.', type: 'TEXT' },
  { key: 'about_mandate_tag', content: 'Directives', type: 'TEXT' },
  { key: 'about_mandate_title', content: 'Institutional <span class="text-accent">Mandate.</span>', type: 'TEXT' },
  { key: 'about_mission_text', content: 'To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth.', type: 'TEXT' },
  { key: 'about_vision_text', content: 'To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity and sharpen critical thinking.', type: 'TEXT' },
  { key: 'about_brochure_tag', content: 'Academic Blueprint', type: 'TEXT' },
  { key: 'about_brochure_title', content: 'Digital <span class="text-accent">Manifesto.</span>', type: 'TEXT' },
  { key: 'about_brochure_desc', content: 'Explore the complete pedagogical architecture through the official MIWAY digital resources.', type: 'TEXT' },
  
  // Shared - Our Philosophy Component
  { key: 'phil_tag', content: 'Our Philosophy', type: 'TEXT' },
  { key: 'phil_title', content: 'Learning Reimagined for a <span class=" text-accent">New World.</span>', type: 'TEXT' },
  { key: 'phil_desc_1', content: 'MIWAY Teaching Aids Pvt. Ltd., was born from a singular conviction: that every child carries within them an extraordinary potential waiting to be ignited — not with rote memorization, but with purposeful, joyful, whole-brain learning.', type: 'TEXT' },
  { key: 'phil_desc_2', content: "We don't teach subjects. We cultivate thinkers. We don't fill minds. We illuminate them. Our methodology weaves together the world's most powerful educational frameworks into one seamless, transformative experience.", type: 'TEXT' },
  { key: 'phil_point1_desc', content: 'Neuroscience-backed learning architecture.', type: 'TEXT' },
  { key: 'phil_point2_title', content: 'Neuro-Spatial Mastery', type: 'TEXT' },
  { key: 'phil_point2_desc', content: 'Holistic intelligence development across 10 dimensions.', type: 'TEXT' },
  { key: 'phil_point3_desc', content: 'Real-world application beyond the classroom.', type: 'TEXT' },
  { key: 'phil_cta', content: 'Explore Framework', type: 'TEXT' },
  { key: 'phil_quote', content: '“Education is not the filling of a pail, <br /> but the lighting of a fire.”', type: 'TEXT' },
  { key: 'phil_mission_tag', content: 'Mission', type: 'TEXT' },
  { key: 'phil_mission_desc', content: 'Transforming children into confident, creative, and future-ready human beings.', type: 'TEXT' },
];

async function main() {
  console.log('Seeding content...');
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
