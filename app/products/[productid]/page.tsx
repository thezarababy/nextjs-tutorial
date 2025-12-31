import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).productid;
  const title = await new Promise((resolve) =>
    setTimeout(() => resolve(`Product ${id} Details`), 100)
  );

  return {
    title: `product ${id}`,
  };
}
const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {
  const { productid } = await params;
  return <div>details about the product {productid}</div>;
};

export default ProductDetails;
