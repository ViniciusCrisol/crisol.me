import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { RichTextBlock } from 'prismic-reactjs';
import { fetchAPI } from '../../lib/api-prismic';
import PostPage from '../../components/pages/Post';

interface PostProps {
  post: {
    title: string;
    content: RichTextBlock[];
    description: {
      text: string;
    }[];
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | crisol.me</title>
        <meta name='description' content={post.description[0].text} />
      </Head>
      <PostPage post={post} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const post = await fetchAPI(
    `query($slug: String!, $lang: String!) { post(uid: $slug, lang: $lang) { title description content } }`,
    {
      slug: ctx.params.id,
      lang: 'pt-br',
    }
  );

  return {
    props: {
      post: post.post,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const {
    allPosts: { edges },
  } = await fetchAPI(
    `{
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }`,
    {}
  );

  return {
    paths: edges.map(({ node }) => `/post/${node._meta.uid}`) || [],
    fallback: false,
  };
}
