import Link from 'next/link';
import PostContainer from '../../PostContainer';
import { Container, PostsWrapper, ButtonContainer } from './styles';

export default function Home({ posts }) {
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
}
