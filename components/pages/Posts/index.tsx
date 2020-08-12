import pinnedPostProps from '../../../types/pinnedPost';

import PinnedPost from '../../PinnedPost';
import { Container } from './styles';

interface HomeProps {
  posts: pinnedPostProps[];
}

const Posts: React.FC<HomeProps> = ({ posts }) => (
  <Container>
    {posts.map((post) => (
      <PinnedPost post={post} key={post.node._meta.uid} />
    ))}
  </Container>
);

export default Posts;
