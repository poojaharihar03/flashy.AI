'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';

const Appbar = ({ children }) => {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-gray-700 text-2xl font-bold"><span className='text-purple-600'>F</span>lashy.AI</Link>
          {isLoaded && isSignedIn && (
            <div className="flex items-center space-x-4">
              <NavLink href="/" active={pathname === '/'}>Home</NavLink>
              <NavLink href="/flashcard" active={pathname === '/flashcard'}>Create Flashcards</NavLink>
              <NavLink href="/flashcard-collections" active={pathname === '/flashcard-collections'}>Collections</NavLink>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

const NavLink = ({ href, children, active }) => {
  return (
    <Link 
      href={href} 
      className={`text-gray-600 hover:text-purple-200 transition-colors ${
        active ? 'font-bold border-b-2 border-white' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default Appbar;