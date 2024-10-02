import Link from 'next/link';

const categories = ['technology', 'sports', 'health', 'business', 'science', 'entertainment'];

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        {categories.map((category) => (
          <Link href={`/category/${category}`} key={category} legacyBehavior>
            <a className="hover:underline capitalize">{category}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
