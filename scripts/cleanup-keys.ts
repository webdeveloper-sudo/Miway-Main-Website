
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const unusedPrefixes = [
    'home_hero_slide_',
    'home_hero_image_',
    'about_pedagogy_image',
    'home_about_image',
    'publish_',
    'schools_value_',
    'schools_support_',
    'bundles_comp_',
    'philosophy_item_',
    'philosophy_cta_',
    'bundles_components_label',
    'publish_quality_',
    'publish_process_',
    'publish_hero_image',
    'contact_info_label',
    'contact_hours_',
    'contact_form_title',
    'contact_global_'
  ];

  console.log('Starting database cleanup...');

  for (const prefix of unusedPrefixes) {
    const deleted = await prisma.siteContent.deleteMany({
      where: {
        key: {
          startsWith: prefix
        }
      }
    });
    console.log(`Deleted ${deleted.count} keys starting with "${prefix}"`);
  }

  console.log('Cleanup finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
