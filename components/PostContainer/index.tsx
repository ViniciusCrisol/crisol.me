import Link from 'next/link';

import parseDate from '../../utils/parseDate';
import PostContainerProps from '../../types/postContainer';

import { Container, Content } from './styles';

interface Props {
  post: PostContainerProps;
}

const PostContainer: React.FC<Props> = ({ post }) => (
  <Link href={`/post/${post.node._meta.uid}`}>
    <Container>
      <Content>
        <section>
          <h2>{post.node.title}</h2>
          <p>{post.node.description[0].text}</p>
        </section>

        <footer>
          <span>{parseDate(post.node.created_at)}</span>
          <span className='label'>{post.node.categories}</span>
        </footer>
      </Content>
    </Container>
  </Link>
);

export default PostContainer;
