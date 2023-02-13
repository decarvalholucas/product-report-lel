import "../styles/global.scss";

import { BoxContainer } from "../components/BoxContainer";
import { Header } from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head></head>
      <body>
        <Header />
        <BoxContainer>{children}</BoxContainer>
      </body>
    </html>
  );
}
