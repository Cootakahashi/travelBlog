import Link from "next/link";
import { client } from "../../libs/client";

export default function CategoryId({ blog }) {
  // show when there is no content
  if (blog.length === 0) {
    return <div>Still Nothing Article</div>;
  }
  console.log(blog);
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

//ssg path
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// pass to template this data
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "travelblog77",
    queries: { filters: `category[equals]${id}` },
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};

// //filtersパラメータを使ってフィルタリングをします。今回のケースのように、
// //単数のコンテンツ参照で使用できるのは [equals]のみです。content_idを指定することで紐付いたコンテンツを取得することができます。
