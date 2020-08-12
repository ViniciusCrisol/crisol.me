import React from 'react';
import { GetStaticPropsContext } from 'next';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { fetchAPI } from '../../lib/api-prismic';

interface PostProps {
  post: {
    title: string;
    thumbnail: {
      url: string;
    };
    content: RichTextBlock[];
  };
}

function Post({ post }: PostProps) {
  console.log(post);

  return (
    <div>
      <h1>{post.title}</h1>

      {RichText.asText(post.content)}
    </div>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const post = await fetchAPI(
    `
    query($slug: String!, $lang: String!) {
      post(uid: $slug, lang: $lang) {
        title
        thumbnail
        content
      }
    }
  `,
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
    `
    query {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    {}
  );

  return {
    paths: edges.map(({ node }) => `/post/${node._meta.uid}`) || [],
    fallback: false,
  };
}

export default Post;
