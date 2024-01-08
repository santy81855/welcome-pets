
// run the seed command with npx prisma db seed
// this is possible because i added the prisma entry in the package.json file

const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany({}); // use with caution.

    const amountOfUsers = 5;

    const users = [];

    for (let i = 0; i < amountOfUsers; i++) {
        const user = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            role: "USER",
            emailVerified: !(i % 7 === 0),
            createdDate: faker.date.past(),
            updatedDate: faker.date.recent(),
        };

        users.push(user);
    }

    const addUsers = async () => await prisma.user.createMany({ data: users });

    addUsers();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });