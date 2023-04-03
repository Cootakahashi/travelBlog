import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
export default function allblog({ blog }) {
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      {" "}
      <Image
        className="h-96 w-full"
        src="/blog-head.png"
        width={500}
        height={500}
        alt="head"
        priority
      ></Image>
      <ul>
        <div className=" mt-10">
          {blog.map((blog) => {
            const datetime = new Date(blog.createdAt);
            return (
              <div className="flex p-8 border gap-3 mx-5 	" key={blog.id}>
                <div className="flex text-slate-300">
                  <p>{datetime.getDate()}</p>
                  <p>{monthNames[datetime.getMonth()]}</p>
                  <p>{datetime.getFullYear()}</p>
                </div>
                <li className="">
                  <Link
                    className="font-medium text-xl"
                    href={`/blog/${blog.id}`}
                  >
                    {blog.title}
                  </Link>
                  <p className="text-slate-300 text-sm pt-3">
                    {blog.description}
                  </p>
                  <Link
                    className="text-blue-500 flex my-3"
                    href={`/blog/${blog.id}`}
                  >
                    Learn more
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
        </div>
      </ul>
    </>
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
