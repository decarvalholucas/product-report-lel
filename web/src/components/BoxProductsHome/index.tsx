import { ReactNode } from "react";
import { Container } from "./styles";

import { Search } from "../svg/Search";

interface Props {
  children: ReactNode;
}

export const BoxProductHome: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <h2 className="title">Produtos</h2>
      <div className="search">
        <input type="text" placeholder="buscar produto..."></input>
        <span className="searchIcon">
          <Search width={32} height={32} />
        </span>
      </div>
      {children}
    </Container>
  );
};
