import Link from 'next/link';
import dateParser from '../../utils/dateParser';
import { Container, Content } from './styles';

export default function PostContainer({ post }) {
  return (
    <Link href={`/post/[id]`} as={`/post/${post.node._meta.uid}`}>
      <Container>
        <Content>
          <section>
            <h2>{post.node.title}</h2>
            <p>{post.node.description[0].text}</p>
          </section>

          <footer>
            <span>{dateParser(post.node.created_at)}</span>
            <span className='label'>{post.node.categories}</span>
          </footer>
        </Content>
      </Container>
    </Link>
  );
}
