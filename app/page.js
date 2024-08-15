import Navbar from '../components/pg/Navbar';
import MainSection from '../components/pg/MainSection';
import Footer from '../components/pg/Footer';
import Banner from '../components/pg/Banner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="relative z-10">
        <Navbar />
        <MainSection />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
