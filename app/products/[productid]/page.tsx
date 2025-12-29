import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {
  const { productid } = await params;
  return <div>details about the product {productid}</div>;
};

export default ProductDetails;
