import Image from "next/image";
import Link from "next/link";
import React from "react";
export function Category({ category, children, color = "blue" }) {
  const className = `inline-block px-10 py-5 text-white font-medium font-serif rounded-lg shadow-md bg-${color}-500 hover:bg-${color}-600 hover:px-24 hover:py-12 transition-all `;

  const images = [
    {
      src: "/wide/2.png",
      alt: "Image 1",
      category: "Nature",
    },
    {
      src: "/compress/2.png",
      alt: "Image 2",
      category: "Animals",
    },
    {
      src: "/compress/3.png",
      alt: "Image 3",
      category: "Cityscape",
    },
  ];
  return (
    <div className="container mx-auto my-40">
      <h2 className="text-center my-4 text-3xl py-10">Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={0}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <button className={className}>{image.category}</button>{" "}
            </div>
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-black text-white opacity-75">
              {image.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "travelblog77" });
  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
