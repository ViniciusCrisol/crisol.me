import Link from 'next/link';

import parseDate from '../../utils/parseDate';
import pinnedPostProps from '../../types/pinnedPost';

import { Container, Content } from './styles';

interface PinnedPostProps {
  post: pinnedPostProps;
}

const PinnedPost: React.FC<PinnedPostProps> = ({ post }) => (
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

export default PinnedPost;
