import { ReactNode } from "react";

import style from "./style.module.scss"

interface Props {
  children: ReactNode;
}

export const BoxContainer: React.FC<Props> = ({ children }) => {
  return <div className={style.viewContainer}>{children}</div>;
};
