import qualquer from "./victor.module.scss"

export const ProductDescription = (params: any) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: params.product.product[0].description }} className={qualquer.asdasdassad} />
  );
};
