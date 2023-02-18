//import style from "./style.module.scss"

import { ReactNode } from "react";

export const ProductStock = ({ product }: VtexProduct) => {
  let stkTotal = 0;

  product.map((p) => {
    p.items.map((item) => {
      stkTotal += item.sellers[0].commertialOffer.AvailableQuantity;
    });
  });

  return <div> Estoque: <b>{stkTotal}</b> </div>;
};
