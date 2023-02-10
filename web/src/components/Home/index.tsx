import { useEffect, useState } from "react";

import Link from "next/link";

import axios from "axios";

import { BoxProductHome } from "../BoxProductsHome";

export const ComponentHome = () => {
  const [product, setProduct] = useState<any>([]);

  async function getProduct() {
    const response = await axios.get("/", {
      baseURL: "http://localhost:3333",
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "applicatiion/json",
      },
    });

    setProduct(response.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <BoxProductHome>
      {product?.product?.map((item: any, index: number) => {
        return (
          <div className="productName" key={index}>
            <Link href={`/${item.productId}`}>{item.productName}</Link>
          </div>
        );
      })}
    </BoxProductHome>
  );
};
