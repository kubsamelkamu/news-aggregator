import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/news.png" /> 
      </Head>
      <div className="flex flex-col min-h-screen"> 
      <Header/>
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </>

  );
}

export default MyApp;
