import { notFound } from "next/navigation";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) => {
  const { productid, reviewid } = await params;
  if (parseInt(reviewid) > 1000) {
    return notFound();
  }
  return (
    <h1>
      review {reviewid} for product {productid}{" "}
    </h1>
  );
};

export default ProductReview;
