import Image from "next/image";
import Link from "next/link";

import style from "./style.module.scss";

import { ProductStock } from "@/components/ProductStock";
import { ProductDescription } from "@/components/ProductDescription";
import Ga4 from "@/components/Ga4";

interface ProductProps {
  params: {
    productId: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch(`http://localhost:3333/${params.productId}`, {
    cache: "no-store",
  });
  const data = await response.json();

  const responseVtex = await fetch(
    `https://www.livreeleve.com.br/api/catalog_system/pub/products/search?fq=productId:${params.productId}`,
    { cache: "no-store" }
  );
  const productInVtex = await responseVtex.json();

  return (
    <div>
      {data.product.map((item: any, index: number) => {
        return (
          <div key={index} className={style.product}>
            <div className={style.productImage}>
              <Image
                src={productInVtex[0].items[0].images[0].imageUrl}
                alt={item.productName}
                title={item.productName}
                width={400}
                height={400}
              />
            </div>

            <div className={style.productInfo}>
              <ProductStock product={productInVtex} />

              {/* @ts-expect-error Async Server Component (remover depois) */}
              <Ga4 product={productInVtex} />

              <div className={style.container}>
                <h3>{item.productName}</h3>
                <div>
                  <b>ID:</b> {item.productId}
                </div>
              </div>
  
              <ProductDescription product={productInVtex} />
            </div>
          </div>
        );
      })}
      <Link href={"/productList"}>Voltar</Link>
    </div>
  );
}
