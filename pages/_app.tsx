import Head from 'next/head';

import GlobalStyles from '../styles/global';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
