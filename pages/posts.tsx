import Head from 'next/head';

import { fetchAPI } from '../lib/api-prismic';
import PostsPage from '../components/pages/Posts';

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts | crisol.me</title>
        <meta
          name='description'
          content={`crisol.me${posts.map(
            (post) => ` | ${post.node.title} | ${post.node.categories}`
          )}`}
        />
      </Head>
      <PostsPage posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await fetchAPI(
    `query { allPosts { edges { node { _meta { uid } title description categories created_at } } } }`,
    {}
  );

  return {
    props: {
      posts: posts.allPosts.edges,
    },
  };
}
