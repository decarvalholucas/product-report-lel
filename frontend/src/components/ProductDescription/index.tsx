import qualquer from "./victor.module.scss"

export const ProductDescription = (params: VtexProduct) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: params.product[0].description }} className={qualquer.asdasdassad} />
  );
};
