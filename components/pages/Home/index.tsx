import PinnedPost from './PinnedPost';
import pinnedPostProps from '../../../types/pinnedPost';

import { Container, PinnedPostsContainer } from './styles';

interface HomeProps {
  posts: pinnedPostProps[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <Container>
      <h2>Últimos posts</h2>
      <PinnedPostsContainer>
        {posts.map((post) => (
          <PinnedPost post={post} key={post.node._meta.uid} />
        ))}
      </PinnedPostsContainer>
    </Container>
  );
};

export default Home;
