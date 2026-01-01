import Link from "next/link";

const home = () => {
  return (
    <>
      <h1>Welcome home !</h1>
      <Link href="/about">About</Link>
      <Link href="/products">Product</Link>
    </>
  );
};

export default home;
