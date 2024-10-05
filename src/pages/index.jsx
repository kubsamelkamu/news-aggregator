/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Head from 'next/head';

export async function getStaticProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
  let articles = [];
  
  try {
    const response = await axios.get(url);
    if (response?.data?.articles) {
      articles = response.data.articles;
    } else {
      console.error('No articles found in the response');
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }

  return {
    props: {
      articles,
    },
    revalidate: 3600, 
  };
}

export default function HomePage({ articles }) {
  return (
    <>
      <Head>
        <title>Home - News Aggregator</title>
        <meta name="description" content="Stay updated with the latest news across various categories including technology, sports, health, and more." />
        <meta name="keywords" content="news, aggregator, technology, sports, health, business, science, entertainment" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container mx-auto p-4">
        {(!articles || articles.length === 0) ? (
          <h1 className="text-3xl font-bold mb-4">No Articles Found</h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Top Headlines</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-lg">
                  <h2 className="text-xl font-semibold">{article.title}</h2>
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-40 object-cover rounded mt-2"
                    />
                  )}
                  <p className="mt-2">{article.description}</p>
                  <a
                    href={article.url}
                    className="text-blue-500 mt-4 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
