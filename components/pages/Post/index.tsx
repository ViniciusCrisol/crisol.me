import React from 'react';
import { RichText } from 'prismic-reactjs';

import PostProps from '../../../types/post';

import { Container } from './styles';

const Post: React.FC<PostProps> = ({ post }) => {
  return <Container>{RichText.render(post.content)}</Container>;
};

export default Post;
