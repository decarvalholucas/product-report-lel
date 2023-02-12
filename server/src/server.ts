import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const prisma = new PrismaClient({
  log: ["query"],
});

async function start() {
  const fastify = Fastify({
    logger: true, // Mostra logs da aplicação no terminal
  });

  await fastify.register(cors, {
    origin: true
  });

  fastify.get("/", async () => {
    const product = await prisma.product.findMany();

    return { product };
  });

  fastify.get("/:productId", async (request) => {
    const product = await prisma.product.findMany({
      where: {
        productId: request.productId
      }
    })
  });

  await fastify.listen({ port: 3333 });
}

start();
