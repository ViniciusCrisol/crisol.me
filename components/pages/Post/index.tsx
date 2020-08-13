import { RichText } from 'prismic-reactjs';
import { Container } from './styles';

export default function ({ post }) {
  return <Container>{RichText.render(post.content)}</Container>;
}
