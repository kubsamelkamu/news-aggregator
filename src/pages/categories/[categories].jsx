/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const categories = ['technology', 'sports', 'health', 'business', 'science', 'entertainment'];
  
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, 
  };
}

// Fetch data for each category
export async function getStaticProps({ params }) {
  const { category } = params;
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

  let articles = [];
  try {
    const response = await axios.get(url);
    articles = response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
  }

  return {
    props: {
      articles,
      category,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

// Component to render category page
export default function CategoryPage({ articles, category }) {
  const router = useRouter();

  // Fallback handling
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{category} News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded mt-2" />}
            <p className="mt-2">{article.description}</p>
            <a href={article.url} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}




