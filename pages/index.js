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
// import Slider from "@/components/Slider";
// import Slide from "@/components/Slide";
import Faq from "@/components/Faq";
import SwiperApp from "@/components/SwiperApp";

export default function Home({ blog, category, totalCount }) {
  return (
    <>
      <div className="mb-40">
        <Image
          src="/top/3.png"
          alt="back"
          width={1920}
          height={0}
          priority
          className=""
        />
        <NavBar />
        <div className="relative p-[197px] bg-white">
          <Image
            className="top-0"
            src="/logo/logo-transparent.svg"
            alt="logo"
            fill
            priority
          ></Image>
        </div>

        <SwiperApp blog={blog} />

        {/* <Slider blog={blog} /> */}
        {/* <h1 className="h-20 w-full p-10 text-center font-bold">Article</h1>
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
      </div> */}
        <Category />
        <Team />
        <Faq />
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
