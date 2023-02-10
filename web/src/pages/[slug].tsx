import { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

export default function Product() {
  const [product, setProduct] = useState<any>([]);

  const { query } = useRouter();

  const getVtexProduct = async () => {
    const req = await axios.get(
      `https://www.livreeleve.com.br/api/catalog_system/pub/products/search?fq=productId:${query.slug}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Accept: "applicatiion/json",
        },
      }
    );

    setProduct(req.data);
  };

  useEffect(() => {
    getVtexProduct();
  }, []);

  return <h1>{JSON.stringify(query.slug)}</h1>;
}
