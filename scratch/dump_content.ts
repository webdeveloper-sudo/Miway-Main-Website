import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const allContent = await prisma.siteContent.findMany({
        where: {
            content: {
                contains: 'unsplash'
            }
        }
    });
    console.log(JSON.stringify(allContent, null, 2));
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
