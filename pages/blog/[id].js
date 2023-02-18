import { client } from "../../libs/client";
import { Pagenation } from "../../components/Pagenation";

export default function BlogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </main>
  );
}

// for ssg path
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "travelblog77" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// to give for template to data
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "travelblog77", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
