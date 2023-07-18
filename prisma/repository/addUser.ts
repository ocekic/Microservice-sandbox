import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
      data: {
        email:'test',
        password:'test',
        firstName:'test',
        lastName:'test',
        dob: new Date('2023-07-18T14:30:00.000Z'),

      },
    })
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
