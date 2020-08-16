import Head from 'next/head';
import { useEffect } from 'react';

import Layout from '../components/Layout';

import GlobalStyles from '../styles/global';
import { initGA, logPageView } from '../lib/analytics';

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

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
