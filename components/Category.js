import Image from "next/image";
import Link from "next/link";
export function Category({ category }) {
  return (
    <div className="md:grid grid-rows- grid-cols-3  px-10 overflow-hidden mt-40">
      <div className="mr-5">
        {" "}
        <Link
          className="hover:opacity-80 transition duration-500 ease-in-out"
          href={`/category/bestexperience`}
          passHref
        >
          {" "}
          <div className="text-slate-300 text-3xl z-50 p-1">Our Experience</div>
          <Image
            className="h-full"
            src="/compress/2.png"
            height={250}
            width={500}
            priority
          />
        </Link>
      </div>

      <div className="grid">
        {" "}
        <Link
          className="hover:opacity-80 transition duration-500 ease-in-out"
          href={`/category/thailand`}
          passHref
        >
          {" "}
          <div className="text-slate-300 text-3xl z-50 p-1">Thailand</div>
          <Image
            className=""
            src="/wide/2.png"
            height={250}
            width={400}
            priority
          />{" "}
        </Link>
        <Link
          className="hover:opacity-80 transition duration-500 ease-in-out"
          href={`/category/traveltips`}
          passHref
        >
          {" "}
          <div className="text-slate-300 text-3xl z-50 p-1">Travel Tips</div>
          <Image
            className=""
            src="/wide/3.png"
            height={250}
            width={400}
            priority
          />
        </Link>
      </div>

      <div className="ml-auto grid row-span-2 py-40">
        <div>
          <h1 className="text-4xl">Category </h1>
          <p className="text-slate-300 text-xl my-4">Our discovery</p>
        </div>
        <Link
          // className="hover:opacity-80 transition duration-500 ease-in-out"
          href={`/category/categorys`}
          passHref
        >
          <button className="self-end border rounded-xl px-8 py-4">
            See All
          </button>
        </Link>
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
