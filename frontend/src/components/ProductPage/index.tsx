import Link from "next/link";

import style from "./style.module.scss";

export default async function ProductPage() {
  const response = await fetch("http://localhost:3333", {
    cache: "no-store"
  });
  const product = await response.json();

  return product?.product?.map((item: any) => {
    return (
      <Link href={`/product/${item.productId}`} key={item.productId}>
        <div className={style.productName}>{item.productName}</div>
      </Link>
    );
  });
}
