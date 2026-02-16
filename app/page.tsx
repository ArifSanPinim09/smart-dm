import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LearningMenu from '@/components/LearningMenu';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LearningMenu />
      </main>
      <Footer />
    </div>
  );
}
