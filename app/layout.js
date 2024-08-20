import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FlashAI',
  description: 'AI-Powered Flashcard Generator',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <ClerkProvider>
          <body className={`${inter.className} min-h-screen flex flex-col`}>
            {children}
          </body>
        </ClerkProvider>
      </html>
  );
}