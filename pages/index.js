import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { client } from "../libs/client";
import { Pagination } from "../components/Pagenation";
import { Category } from "@/components/Category";
import { Team } from "../components/Team";
import Faq from "@/components/Faq";
import SwiperApp from "@/components/SwiperApp";

export default function Home({ blog, category, totalCount, teamMembers }) {
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
        {/* <Image
          src="/compress/4.png"
          alt="back"
          width={1920}
          height={0}
          priority
          className="md:hidden hidden "
        /> */}
        <div className="hidden md:block">
          <NavBar />
        </div>

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
        <Team teamMembers={teamMembers} />
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
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Programmer",

      imageSrc: "/team/vova.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Writer",
      imageSrc: "/team/jon_outside.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Editor",

      imageSrc: "/team/coo1.jpg",
    },
  ];

  //get category content
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
      teamMembers: teamMembers,
    },
  };
};
