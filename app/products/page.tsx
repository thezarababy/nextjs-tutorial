import Link from "next/link";

const page = () => {
  const productID = 100;
  return (
    <>
      <h1>Product list</h1>
      <ul>
        <Link href="/products/1">
          <li>Product 1</li>
        </Link>
        <Link href="/products/2">
          <li>Product 2</li>
        </Link>
        <Link href="/products/3">
          <li>Product 3</li>
        </Link>
        <Link href={`/products/${productID}`}>
          <li>Product {productID}</li>
        </Link>
      </ul>
    </>
  );
};

export default page;
