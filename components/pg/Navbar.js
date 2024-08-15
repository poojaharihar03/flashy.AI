import Link from 'next/link';
import './MainSection.css';
const Navbar = () => (
  <header className="bg-white shadow-md py-4">
    <nav className="container mx-auto flex justify-between items-center px-6 md:px-12">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        <span className="text-purple-600">F</span>lashy.AI
      </Link>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-6 justify-center items-center text-gray-600">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Product</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="space-x-4">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Login</button>
        <Link href="/sign-in" className="btn bg-[#D9D8EE] text-black py-3 px-6 rounded-lg shadow-lg hover:bg-purple-300 transition-transform duration-300 transform hover:scale-105">
          Get Started
        </Link>
      </div>
    </nav>
  </header>
);

export default Navbar;