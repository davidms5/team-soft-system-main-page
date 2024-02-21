import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
       
        <link rel="icon" href="/images/portfolio.png" />

      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 