import '../styles/globals.scss'
import '../styles/styles.scss';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  <div>
  <Component {...pageProps} />
    <Head>
      <link rel="shortcut icon" href="/icon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-32x32.png" />
    </Head>
      
  </div>
  );
  
}

export default MyApp