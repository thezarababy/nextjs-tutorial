import React from "react";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) => {
  const { productid, reviewid } = await params;
  return (
    <h1>
      review {reviewid} for product {productid}{" "}
    </h1>
  );
};

export default ProductReview;
