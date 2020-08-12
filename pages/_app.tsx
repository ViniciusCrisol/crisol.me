import GlobalStyles from '../styles/global';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyles />
    </Layout>
  );
}

export default MyApp;
