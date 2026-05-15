import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding image assets...');

  const imageAssets = [
    // Home Hero Images
    { key: 'home_hero_image_1', content: '/images/hero/hero-1.png', type: 'IMAGE' },
    { key: 'home_hero_image_2', content: '/images/hero/hero-2.png', type: 'IMAGE' },
    { key: 'home_hero_image_3', content: '/images/hero/hero-3.png', type: 'IMAGE' },
    { key: 'home_hero_image_4', content: '/images/hero/hero-4.png', type: 'IMAGE' },
    { key: 'home_hero_image_5', content: '/images/hero/hero-5.png', type: 'IMAGE' },

    // Core Sections
    { key: 'phil_main_image', content: '/visionary-success.jpg', type: 'IMAGE' },
    { key: 'genius_main_image', content: '/visionary-success.jpg', type: 'IMAGE' },
    { key: 'founder_image', content: '/Dr.-J.arawindhan.webp', type: 'IMAGE' },

    // Page Banners
    { key: 'about_hero_background', content: '/images/45115730_bnn2.jpg', type: 'IMAGE' },
    { key: 'about_mandate_bg', content: '/missionvisionbg.png', type: 'IMAGE' },
    { key: 'philosophy_hero_background', content: '/images/45115730_bnn2.jpg', type: 'IMAGE' },
    { key: 'bundles_hero_background', content: '/images/45115730_bnn2.jpg', type: 'IMAGE' },
    { key: 'bundle_hero_background', content: '/images/45115730_bnn2.jpg', type: 'IMAGE' },
    { key: 'schools_hero_background', content: '/images/45115730_bnn2.jpg', type: 'IMAGE' },

    // Brochure Gallery
    ...Array.from({ length: 12 }, (_, i) => ({
      key: `about_brochure_image_${i + 1}`,
      content: `/brochure/page-${(i + 1).toString().padStart(2, "0")}.jpg`,
      type: 'IMAGE'
    })),

    // Testimonial Avatars (Optional placeholders)
    ...Array.from({ length: 6 }, (_, i) => ({
      key: `testimonial${i + 1}_image`,
      content: '', // Empty by default to use letter fallback
      type: 'IMAGE'
    }))
  ];

  for (const asset of imageAssets) {
    await prisma.siteContent.upsert({
      where: { key: asset.key },
      update: { 
        type: asset.type,
        // Don't overwrite content if it already exists (preserve admin changes)
      },
      create: asset,
    });
  }

  console.log('Image assets seeded successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
