import "../styles/global.scss";

import { BoxContainer } from "../components/BoxContainer";
import BoxHeader from "../components/BoxHeader ";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head></head>
      <body>
        <div className="content">
          <Header />
          <BoxContainer>
            <BoxHeader />
            <div className="boxContainerChildren">{children}</div>
          </BoxContainer>
        </div>
      </body>
    </html>
  );
}
