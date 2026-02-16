import MateriNavigation from '@/components/MateriNavigation';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

export default function DampakPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
}
