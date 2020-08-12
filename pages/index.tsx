import Head from 'next/head';

import { fetchAPI } from '../lib/api-prismic';
import HomePage from '../components/pages/Home';
import pinnedPostProps from '../types/pinnedPost';

interface HomeProps {
  posts: pinnedPostProps[];
}

export async function getServerSideProps() {
  const posts = await fetchAPI(
    `query { allPosts (last: 5) { edges { node{ _meta { uid } title description thumbnail created_at } } } }`,
    {}
  );

  return {
    props: {
      posts: posts.allPosts.edges,
    },
  };
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home - crisol.me</title>
      </Head>
      <HomePage posts={posts} />
    </>
  );
};

export default Home;
