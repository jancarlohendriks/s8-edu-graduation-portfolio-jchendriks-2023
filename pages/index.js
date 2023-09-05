import matter from "gray-matter";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import styles from "../styles/Blog.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

const Index = (props) => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
    >
      <section>
        <article className={styles.blog}>
          {props.frontmatter.hero_image && (
            <figure className={styles.blog__hero}>
              <img
                width="1920"
                height="300"
                src={props.frontmatter.hero_image}
                alt={`blog_hero_${props.frontmatter.title}`}
              />
            </figure>
          )}
          <div className={styles.blog__info}>
            {props.frontmatter.title && <h1>{props.frontmatter.title}</h1>}
            {/* <h3>{reformatDate(props.frontmatter.date)}</h3> */}
          </div>
          <div className={styles.blog__body}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {props.markdownBody}
            </ReactMarkdown>
            <br></br>
            <br></br>
          </div>
          {/* <h2 className={styles.blog__footer}>
            Written By: {props.frontmatter.author}
          </h2> */}
        </article>
        {/* <BlogList allBlogs={props.allBlogs} /> */}
      </section>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  // getting the website config
  const siteConfig = await import(`../data/config.json`);

  const content = await import(`../data/index.md`);
  const data = matter(content.default);

  const webpackContext = require.context("../posts", true, /\.md$/);
  // the list of file names contained
  // inside the "posts" directory
  const keys = webpackContext.keys();
  const values = keys.map(webpackContext);

  // getting the post data from the files contained
  // in the "posts" folder
  const posts = keys.map((key, index) => {
    // dynamically creating the post slug
    // from file name
    const slug = key
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".");

    // getting the .md file value associated
    // with the current file name
    const value = values[index];

    // parsing the YAML metadata and markdown body
    // contained in the .md file
    const document = matter(value.default);

    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
  });

  return {
    props: {
      siteTitle: siteConfig.title,
      frontmatter: data.data,
      markdownBody: data.content,

      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  };
}
