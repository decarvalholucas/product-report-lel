import { FastifyInstance } from "fastify";

import api from "../../api/vtexApiSearch";

import { z } from "zod";

export async function vtexSearchRoutes(fastify: FastifyInstance) {
  fastify.get("/vtex/search", async (req) => {
    const pageQuery = z.object({
      page: z.string(),
      maxItems: z.string(),
    });

    const { page, maxItems } = pageQuery.parse(req.query);

    function getPage() {
      const maxItem = maxItems || 5;
      const from = Number(page) * Number(maxItem) - Number(maxItem);
      const to = Number(page) * Number(maxItem) - 1;

      return { from, to };
    }

    const request = await api.get(
      `?fq=productClusterIds:383&_from=${getPage().from}&_to=${getPage().to}`
    );
    return {
      products: request.data,
      totalPage: Math.ceil(request.headers.resources.split("/")[1] / Number(maxItems)),
    };
  });
}
