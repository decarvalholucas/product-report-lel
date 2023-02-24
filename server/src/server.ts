import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import { vtexSearchRoutes } from "./routes/vtex/search";
import { vtexProductByIdRoutes } from "./routes/vtex/productById";
import { vtexProductByFullTextRoutes } from "./routes/vtex/productByFullText";

const prisma = new PrismaClient({
  log: ["query"],
});

async function start() {
  const fastify = Fastify({
    logger: true, // Mostra logs da aplicação no terminal
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.get("/", async () => {
    const product = await prisma.product.findMany();

    return { product };
  });

  /*fastify.get("/:productId", async ({ params }, reply) => {
    console.log(params);

    const product = await prisma.product.findMany({
      where: {
        productId: params.productId,
      },
    });

    return { product };
  });*/

  fastify.register(vtexSearchRoutes);
  fastify.register(vtexProductByIdRoutes);
  fastify.register(vtexProductByFullTextRoutes);

  await fastify.listen({ port: 3333, host: "192.168.0.111" });
}

start();
