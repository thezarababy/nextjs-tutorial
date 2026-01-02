import Link from "next/link";
import React from "react";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articlesid: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) => {
  const { articlesid } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News article {articlesid}</h1>
      <p>Reading in {lang}</p>

      <Link href={`/articles/${articlesid}?lang=en`}>English</Link>
      <Link href={`/articles/${articlesid}?lang=fr`}>French</Link>
      <Link href={`/articles/${articlesid}?lang=es`}>Spanish</Link>
    </div>
  );
};

export default NewsArticle;
