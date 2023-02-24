declare interface VtexProduct {
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
