import MateriNavigation from '@/components/MateriNavigation';
import SymptomsSection from '@/components/SymptomsSection';
import Footer from '@/components/Footer';

export default function GejalaPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <SymptomsSection />
      </main>
      <Footer />
    </div>
  );
}
