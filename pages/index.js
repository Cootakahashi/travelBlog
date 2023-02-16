import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { client } from "../libs/client";
//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "travelblog77" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog }) {
  return (
    <>
      <NavBar />
      <div className="bg-blac">
        {blog.map((blo) => {
          return <div key={blo.id}>{blo.title}</div>;
        })}
      </div>
    </>
  );
}
