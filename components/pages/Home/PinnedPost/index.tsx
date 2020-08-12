import pinnedPostProps from '../../../../types/pinnedPost';

import parseDate from '../../../../utils/parseDate';
import { Container, Content } from './styles';
import Link from 'next/link';

interface PinnedPostProps {
  post: pinnedPostProps;
}

const PinnedPost: React.FC<PinnedPostProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.node._meta.uid}`}>
      <Container>
        <Content>
          <section>
            <h2>{post.node.title}</h2>
            <p>{post.node.description[0].text}</p>
          </section>

          <footer>
            <div>
              <span>{parseDate(post.node.created_at)}</span>
              <span>Vinícius Crisol</span>
            </div>

            <div>ReactJs, Node</div>
          </footer>
        </Content>
      </Container>
    </Link>
  );
};

export default PinnedPost;
