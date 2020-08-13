import Head from 'next/head';
import { fetchAPI } from '../lib/api-prismic';
import HomePage from '../components/pages/Home';

interface Post {
  node: {
    _meta: { uid: string };
    title: string;
    created_at: string;
    categories: string;
    description: { text: string };
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home | crisol.me</title>
        <meta
          name='description'
          content={`crisol.me${posts.map(
            (post: Post) => ` | ${post.node.title} | ${post.node.categories}`
          )}`}
        />
      </Head>
      <HomePage posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await fetchAPI(
    `query { allPosts (last: 4) { edges{ node{ _meta{ uid } title description categories created_at } } } }`,
    {}
  );

  return {
    props: {
      posts: posts.allPosts.edges,
    },
  };
}
