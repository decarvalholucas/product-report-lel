//import style from "./style.module.scss"

import { ReactNode } from "react";

interface Props {
  product: [
    {
      productName: string;
      items: [
        {
          sellers: [
            {
              commertialOffer: {
                AvailableQuantity: number;
              };
            }
          ];
        }
      ];
    }
  ];
}

export const ProductStock: React.FC<Props> = ({ product }) => {
  let stkTotal = 0;

  product.map((p) => {
    p.items.map((item) => {
      stkTotal += item.sellers[0].commertialOffer.AvailableQuantity;
    });
  });

  return <div> Estoque: <b>{stkTotal}</b> </div>;
};
