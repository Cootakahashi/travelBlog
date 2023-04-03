import Link from "next/link";
import { Category } from "@/components/Category";
import { client } from "../../libs/client";
import moment from "moment";
import Image from "next/image";

export default function Categorys({ blog, category }) {
  return (
    <div className="text-center ">
      <Image
        className="h-96 w-full"
        src="/wide/4.png"
        width={500}
        height={500}
        alt="head"
        priority
      />
      <ul className="md:grid grid-cols-2 gap-8 mt-20">
        {category.map((category) => {
          return (
            <div className="flex p-8 border gap-3 mx-5 	" key={category.id}>
              <li>
                <Link
                  className="font-medium text-xl"
                  href={`/category/${category.id}`}
                >
                  {category.name}
                </Link>

                <p className="text-slate-300 text-sm pt-3">
                  {blog.description}
                </p>
                <Link
                  className="text-blue-500 flex my-3"
                  href={`/category/${category.id}`}
                >
                  Articles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

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
