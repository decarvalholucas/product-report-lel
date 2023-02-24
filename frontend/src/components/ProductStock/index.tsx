//import style from "./style.module.scss"

export const ProductStock = ({ product }: any) => {
  let stkTotal = 0;

  product.product.map((p:any) => {
    p.items.map((item:any) => {
      stkTotal += item.sellers[0].commertialOffer.AvailableQuantity;
    });
  });

  return (
    <div>
      {" "}
      Estoque: <b>{stkTotal}</b>{" "}
    </div>
  );
};
