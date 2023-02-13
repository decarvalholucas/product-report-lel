import qualquer from "./victor.module.scss"

interface ProductDescriptiosProps {
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
      description: string;
    }
  ];
}

export const ProductDescription = (params: ProductDescriptiosProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: params.product[0].description }} className={qualquer.asdasdassad} />
  );
};
