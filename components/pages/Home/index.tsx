import Link from 'next/link';

import PostContainer from '../../PostContainer';
import PostContainerProps from '../../../types/postContainer';

import { Container, PostsWrapper, ButtonContainer } from './styles';

interface Props {
  posts: PostContainerProps[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      <h2>Últimos posts</h2>
      <PostsWrapper>
        {posts.map((post) => (
          <PostContainer post={post} key={post.node._meta.uid} />
        ))}
      </PostsWrapper>

      <Link href='/posts'>
        <ButtonContainer>
          <a>posts</a>
        </ButtonContainer>
      </Link>
    </Container>
  );
};

export default Home;
