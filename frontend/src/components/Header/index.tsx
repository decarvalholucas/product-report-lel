import { Logo } from "../svg/Logo";

import style from "./style.module.scss"

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
    </header>
  );
};
