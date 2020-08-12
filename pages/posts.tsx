import Link from 'next/link';
import Head from 'next/head';

import { fetchAPI } from '../lib/api-prismic';
import { Container, TitleContainer } from '../styles/Home';

interface Post {
  node: {
    _meta: {
      uid: string;
    };
    title: string;
    thumbnail: {
      url: string;
    };
    content: string;
  };
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Container>
      <Head>
        <title>Rocketseat | Blog Next.JS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <TitleContainer></TitleContainer>

      <ul>
        {posts?.map(({ node }) => (
          <li key={`post-${node._meta.uid}`}>
            <Link href={`posts/${node._meta.uid}`}>
              <a>{node.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAPI(
    `
    query {
      allPosts {
        edges {
          node{
            _meta {
              uid
            }
            title
            thumbnail
            content
            description
          }
        }
      }
    }
  `,
    {}
  );

  return {
    props: {
      posts: posts.allPosts.edges,
    },
  };
}
