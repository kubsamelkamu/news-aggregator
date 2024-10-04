import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link href="/">News Aggregator</Link>
        </h1>
        <button
          className="block md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link href="/Search" className="text-white">
            Search
          </Link> 
          <Link href="/category/technology" className="text-white">
            Technology
          </Link>
          <Link href="/category/sports" className="text-white">
            Sports
          </Link>
          <Link href="/category/health" className="text-white">
            Health
          </Link>
          <Link href="/category/business" className="text-white">
            Business
          </Link>
          <Link href="/category/science" className="text-white">
            Science
          </Link>
          <Link href="/category/entertainment" className="text-white">
            Entertainment
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 p-4">
          <Link href="/search" className="block text-white mb-2">
            Search
          </Link> 
          <Link href="/category/technology" className="block text-white mb-2">
            Technology
          </Link>
          <Link href="/category/sports" className="block text-white mb-2">
            Sports
          </Link>
          <Link href="/category/health" className="block text-white mb-2">
            Health
          </Link>
          <Link href="/category/business" className="block text-white mb-2">
            Business
          </Link>
          <Link href="/category/science" className="block text-white mb-2">
            Science
          </Link>
          <Link href="/category/entertainment" className="block text-white mb-2">
            Entertainment
          </Link>
        </nav>
      )}
    </header>
  );
}
