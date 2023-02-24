import ProductHome from "@/components/ProductHome";
import { Search } from "@/components/Search";

import style from "./page.module.scss";

export default function ProductList() {
  return (
    <div>
      <h2 className={style.title}>Produtos</h2>

      <Search />
      {/* @ts-expect-error Async Server Component (remover depois) */}
      <ProductHome />
    </div>
  );
}
