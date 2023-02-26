import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { client } from "../libs/client";
import { Pagination } from "../components/Pagenation";
import { Category } from "@/components/Category";
import { Team } from "../components/Team";
import { Sidebar } from "@/components/Sidebar";

export default function Home({ blog, category, totalCount }) {
  return (
    <>
      <Image
        src="main-background.svg"
        alt="back"
        style={{ height: "100%", width: "100%" }}
        width={0}
        height={0}
        priority
        className="bg-cover bg-center bg-fixed"
      />
      <NavBar />
      <div className="relative p-32 bg-white">
        <Image
          className="top-0"
          src="/logo/logo-transparent.svg"
          alt="logo"
          fill
          priority
        ></Image>
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
        <Pagination totalCount={totalCount} />
      </div>
      <h2 className="h-20 w-full p-10 text-center font-bold">Category</h2>
      <Category />
      <Team />
      <Sidebar />
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
