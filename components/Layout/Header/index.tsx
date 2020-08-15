import { FiBookmark } from 'react-icons/fi';

import Link from '../Link';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <main>
        <Link href='/'>
          <h1>
            <FiBookmark />
            crisol
          </h1>
        </Link>

        <section>
          <Link href='/posts'>
            <a>posts</a>
          </Link>

          <Link href='/contact'>
            <a>contato</a>
          </Link>
        </section>
      </main>
    </Container>
  );
}
