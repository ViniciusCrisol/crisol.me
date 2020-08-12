import Head from 'next/head';

import { fetchAPI } from '../lib/api-prismic';
import HomePage from '../components/pages/Home';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home | crisol.me</title>
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
