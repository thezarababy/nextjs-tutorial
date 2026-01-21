import Link from "next/link";
import Search from "../components/search";

const home = () => {
  return (
    <>
      <h1>Welcome home !</h1>
      <Search />
      <Link href="/about">About</Link>
      <Link href="/products">Product</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
};

export default home;
