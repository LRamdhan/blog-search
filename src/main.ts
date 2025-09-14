import expressApp from "./config/expressApp.ts";
import prisma from "./config/prismaClient.ts";

const PORT: number = 8080;

await prisma.$connect();

expressApp.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

