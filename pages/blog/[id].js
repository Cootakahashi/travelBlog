import { client } from "../../libs/client";
import styles from "../../styles/Article.module.scss";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
export default function BlogId({ blog }) {
  console.log(blog);
  console.log(blog.eyecatch.url);
  const path_image = blog.eyecatch.url;
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <>
      <Image
        src={path_image}
        loader={microCMSLoader}
        className="w-full h-96"
        width={1320}
        height={500}
        alt="content"
        priority
      />
      <main className={styles.main}>
        <div className="grid grid-cols-8">
          <div className="col-span-6">
            <h1 className={styles.title}>{blog.title}</h1>
            {/* <p className={styles.publishedAt}>{blog.publishedAt}</p> */}
            <div
              className={styles.post}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
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
