"use client";
import Link from "next/link";
import style from "./style.module.scss";

import Pagination from "../Pagination";

import { useEffect, useState } from "react";
import vtexApiSearch from "@/api/vtexApiSearch";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<VtexProduct[]>([]);
  const [pages, setPages] = useState<any>(0);

  useEffect(() => {
    async function getProduct() {
      const request: any = await vtexApiSearch.get<VtexProduct[]>(
        `vtex/search?page=${currentPage}&maxItems=20`
      );

      setProducts(request.data.products);
      setPages(request.data.totalPage);
    }

    getProduct();
  }, [currentPage]);

  return (
    <div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesToShow={5}
        totalPages={pages}
      />
      {products &&
        products.map((item: any) => {
          return (
            <Link href={`/product/${item.productId}`} key={item.productId}>
              <div className={style.productName}>{item.productName}</div>
            </Link>
          );
        })}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesToShow={5}
        totalPages={pages}
      />
    </div>
  );
}
