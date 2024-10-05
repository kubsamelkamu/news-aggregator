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
        <h1 className="text-white text-2xl font-bold hover:underline">
          <Link href="/">News</Link>
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
          <Link href="/Search" className="text-white hover:underline">
            Search
          </Link> 
          <Link href="/category/technology" className="text-white hover:underline">
            Technology
          </Link>
          <Link href="/category/sports" className="text-white hover:underline">
            Sports
          </Link>
          <Link href="/category/health" className="text-white hover:underline">
            Health
          </Link>
          <Link href="/category/business" className="text-white hover:underline">
            Business
          </Link>
          <Link href="/category/science" className="text-white hover:underline">
            Science
          </Link>
          <Link href="/category/entertainment" className="text-white hover:underline">
            Entertainment
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 p-4">
          <Link href="/search" className="block text-white mb-2 hover:underline">
            Search
          </Link> 
          <Link href="/category/technology" className="block text-white mb-2 hover:underline">
            Technology
          </Link>
          <Link href="/category/sports" className="block text-white mb-2 hover:underline">
            Sports
          </Link>
          <Link href="/category/health" className="block text-white mb-2 hover:underline">
            Health
          </Link>
          <Link href="/category/business" className="block text-white mb-2 hover:underline">
            Business
          </Link>
          <Link href="/category/science" className="block text-white mb-2 hover:underline">
            Science
          </Link>
          <Link href="/category/entertainment" className="block text-white mb-2 hover:underline">
            Entertainment
          </Link>
        </nav>
      )}
    </header>
  );
}
