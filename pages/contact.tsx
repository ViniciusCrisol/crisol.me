import Head from 'next/head';
import ContactPage from '../components/pages/Contact';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato | crisol.me</title>
        <meta name='description' content='Entre em contato | Vinícius Crisol' />
      </Head>
      <ContactPage />
    </>
  );
}
