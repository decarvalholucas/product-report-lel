import ProductPage from "@/components/ProductPage";
import { Search } from "@/components/svg/Search";

import style from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <h2 className={style.title}>Produtos</h2>
      <div className={style.search}>
        <input type="text" placeholder="buscar produto..."></input>
        <span className={style.searchIcon}>
          <Search width={32} height={32} />
        </span>
      </div>
      
      {/* @ts-expect-error Async Server Component (remover depois) */}
      <ProductPage />
    </div>
  );
}
