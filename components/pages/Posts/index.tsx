import PostContainerProps from '../../../types/postContainer';

import PostContainer from '../../PostContainer';
import { Container } from './styles';

interface Props {
  posts: PostContainerProps[];
}

const Posts: React.FC<Props> = ({ posts }) => (
  <Container>
    {posts.map((post) => (
      <PostContainer post={post} key={post.node._meta.uid} />
    ))}
  </Container>
);

export default Posts;
