import Header from './Header';
import { Container } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
