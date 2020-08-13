import PostContainer from '../../PostContainer';
import { Container } from './styles';

export default function Posts({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <PostContainer post={post} key={post.node._meta.uid} />
      ))}
    </Container>
  );
}
