import Head from 'next/head';
import ContactPage from '../components/pages/Contact';

const Contact: React.FC = () => (
  <>
    <Head>
      <title>Contato | crisol.me</title>
      <meta name='description' content='Entre em contato | Vinícius Crisol' />
    </Head>
    <ContactPage />
  </>
);

export default Contact;
