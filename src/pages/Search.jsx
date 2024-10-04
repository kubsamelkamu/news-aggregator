/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

export default function SearchPage() {

  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }

    setLoading(true);
    setError(null);

    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(searchUrl);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Search News Articles-{query}</title>
        <meta name="description" content={`Search results for "${query}" in news articles.`} />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Search for News Articles</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a keyword to search"
            className="border p-2 w-full md:w-1/2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 mt-2 md:ml-2"
          >
            Search
          </button>
        </form>
        {loading && <p className="text-blue-600 mt-4">Loading...</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}

        {articles.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
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
          </div>
        )}

        {!loading && articles.length === 0 && query && (
          <p className="text-gray-600 mt-4">No articles found for {query}.</p>
        )}
      </div>
    </>
  );
}
