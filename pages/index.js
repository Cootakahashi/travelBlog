import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { client } from "../libs/client";
import { Pagenation } from "../components/Pagenation";
export default function Home({ blog, category, totallCount }) {
  return (
    <>
      <NavBar />
      <div>
        <Image
          className="img"
          src="main-background.svg"
          alt="tentative top image"
          width={1300}
          height={61}
          priority
        />
      </div>

      <h1 className="h-20 w-full p-10 text-center font-bold">Article</h1>
      <div className="bg-blac text-center">
        <ul>
          {blog.map((blog) => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <h2 className="h-20 w-full p-10 text-center font-bold">Category</h2>

      <div className="text-center">
        <ul>
          {category.map((category) => (
            <li key={category.id}>
              <Link href={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

//SSG
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "travelblog77",
    queries: { offset: 0, limit: 5 },
  });

  //get category content
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
    },
  };
};
