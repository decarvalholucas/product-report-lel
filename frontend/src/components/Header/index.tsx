import style from "./style.module.scss";

import { Logo } from "../svg/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <Logo />
      </div>
      <div className={style.menuContainer}>
        <div className={style.menuTitle}>Interno</div>
        <div className={style.menu}>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/productList"}>
              <li>Produtos</li>
            </Link>
          </ul>
        </div>
        <div className={style.preferencesTitle}>Externo</div>
        <div className={style.preferences}>
          <ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.livreeleve.com.br"
            >
              <li>{"Site →"}</li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://lojalivreeleve.myvtex.com/admin"
            >
              <li>{"Paine Vtex →"}</li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://analytics.google.com/analytics/web/#/"
            >
              <li>{"GA4 →"}</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
