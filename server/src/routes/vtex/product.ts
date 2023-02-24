import { FastifyInstance } from "fastify";

import api from "../../api/vtexApiSearch";

import { z } from "zod";

export async function vtexProductRoutes(fastify: FastifyInstance) {
  fastify.get("/vtex/search/product", async (req) => {
    const pageQuery = z.object({
      id: z.string(),
    });

    const { id } = pageQuery.parse(req.query);

    const request = await api.get(`?fq=productId:${id}`);

    return {
      product: request.data,
    };
  });
}
