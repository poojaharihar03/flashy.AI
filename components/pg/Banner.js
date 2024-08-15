import FeatureCard from './FeatureCard'; 
import './Banner.css'; // Import CSS if needed

const Banner = () => (
  <section id="banner" className="h-screen flex flex-col justify-center py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-5xl font-medium mb-3 text-center bottom_portion">
          Transform Your Notes into Flashcards with <span className="font-extrabold">Flashy.AI</span>
        </h2>
        <p className="w-2/3 text-gray-600 text-2xl font-light tracking-wider text-center mb-4 bottom_portion">
          Users can create flashcard decks using their own text or by uploading PDFs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-6">
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
    </div>
  </section>
);

export default Banner;

