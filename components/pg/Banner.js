"use client";

import FeatureCard from './FeatureCard';
import './Banner.css';
import Link from 'next/link';

const Banner = () => (
  <section id="banner" className="min-h-screen flex flex-col justify-center py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 text-center bottom_portion">
          Transform Your Notes into Flashcards with <span className="font-extrabold">Flashy.AI</span>
        </h2>
        <p className="w-full md:w-2/3 text-gray-600 text-lg md:text-xl lg:text-2xl font-light tracking-wide text-center mb-4 bottom_portion">
          Users can create flashcard decks using their own text or by uploading PDFs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <FeatureCard 
          title="Enter Text" 
          icon="📝" 
          description="Type or paste your study material and let our AI generate comprehensive flashcards instantly."
        />
        <FeatureCard 
          title="Upload PDF" 
          icon="📄" 
          description="Upload your PDF documents and watch as our AI extracts key information to create tailored flashcards."
        />
        <FeatureCard 
          title="Upload Images" 
          icon="🖼️" 
          description="Turn your lecture slides, diagrams, or handwritten notes into interactive flashcards with our image recognition AI."
        />
      </div>

      {/* New Sign Up Button */}
      <div className="text-center bottom_portion pt-6">
        <p className="text-lg md:text-xl text-gray-700 mb-4">Ready to revolutionize your study routine?</p>
        <Link 
          href="/sign-up" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  </section>
);

export default Banner;