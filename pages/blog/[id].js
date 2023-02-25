import { client } from "../../libs/client";
import styles from "../../styles/Article.module.scss";

export default function BlogId({ blog }) {
  return (
    <>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>{blog.title}</h1> */}
        {/* <p className={styles.publishedAt}>{blog.publishedAt}</p> */}
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
        ></div>
      </main>
    </>
  );
}

// for ssg path
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "travelblog77" });
  console.log(data.contents);

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
