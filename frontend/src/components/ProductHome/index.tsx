import vtexApiSearch from "@/api/vtexApiSearch";
import adsasd from "../../api/vtexApiSearch"
import Link from "next/link";

import style from "./style.module.scss";

export default async function ProductHome() {
  const request = await vtexApiSearch.get(
    "?fq=productClusterIds:383&_from=0&_to=06"
  );

  const products = await request.data;

  return products.map((item: any) => {
    return (
      <Link href={`/product/${item.productId}`} key={item.productId}>
        <div className={style.productName}>{item.productName}</div>
      </Link>
    );
  });
}
