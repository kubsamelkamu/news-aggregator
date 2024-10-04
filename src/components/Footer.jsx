export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">© {new Date().getFullYear()} News Aggregator. All rights reserved.</p>
          <p className="text-xl  mb-2">Follow Us</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/kubsamelkamu"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Github
            </a>
            <a href="https://instagram.com/kubsa58"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://linkedin.com/in/kubsa-melkamu-519bb5263" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Linkedln
            </a>
          </div>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Back to Top
          </button>
        </div>
      </footer>
    );
  }
  