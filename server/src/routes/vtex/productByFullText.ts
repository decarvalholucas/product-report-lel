import { FastifyInstance } from "fastify";

import api from "../../api/vtexApiSearch";

import { z } from "zod";

export async function vtexProductByFullTextRoutes(fastify: FastifyInstance) {
  fastify.get("/vtex/search/productFullText", async (req) => {
    const pageQuery = z.object({
      fullText: z.string(),
    });

    const { fullText } = pageQuery.parse(req.query);

    console.log('ta acessando a rota')

    const request = await api.get(`?ft=:${fullText}&fq=productClusterIds:383`);

    return {
      product: request.data,
    };
  });
}
