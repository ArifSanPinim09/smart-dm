import MateriNavigation from '@/components/MateriNavigation';
import TreatmentSection from '@/components/TreatmentSection';
import Footer from '@/components/Footer';

export default function PenangananPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <TreatmentSection />
      </main>
      <Footer />
    </div>
  );
}
