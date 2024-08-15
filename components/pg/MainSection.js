import './MainSection.css';
import Link from 'next/link';

const MainSection = () => (
  <section className="main-section flex flex-col lg:flex-row justify-center items-center min-h-screen px-8 py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg shadow-lg">
    <div className="text-content flex-1 max-w-3xl text-center">
      <h1 className="font-bold text-[4rem] 2xl:text-[4.5rem] text-center leading-none mb-8 left_portion">
        Ready to swipe right on knowledge? 
        <img 
          src="/assets/flash-card.png" 
          className="w-16 inline-block align-middle m-3 left_portion" 
          alt="Flash Card"
        />
      </h1>
      <p className="text-lg text-gray-800 mb-8 left_portion">
        Turn your notes into dynamic, unforgettable study tools. Dive into learning like never before!
      </p>
      <div className="buttons flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 justify-center right_portion">
        <Link href="#banner" className="btn bg-pink-100 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-pink-300 transition-transform duration-300 transform hover:scale-105">
          How does it work?
        </Link>
        <Link href="/sign-up" className="btn bg-[#D9D8EE] text-black py-3 px-6 rounded-lg shadow-lg hover:bg-purple-300 transition-transform duration-300 transform hover:scale-105">
          Get Started
        </Link>
      </div>
    </div>
  </section>
);

export default MainSection;
