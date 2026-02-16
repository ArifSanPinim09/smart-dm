import MateriNavigation from '@/components/MateriNavigation';
import PreventionSection from '@/components/PreventionSection';
import Footer from '@/components/Footer';

export default function PencegahanPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <PreventionSection />
      </main>
      <Footer />
    </div>
  );
}
