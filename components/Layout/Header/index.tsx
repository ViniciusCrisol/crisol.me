import Link from 'next/link';
import { FiBookmark } from 'react-icons/fi';

import { Container } from './styles';

function Header() {
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

export default Header;
