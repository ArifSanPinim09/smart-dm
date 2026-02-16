import MateriNavigation from '@/components/MateriNavigation';
import RiskFactorsSection from '@/components/RiskFactorsSection';
import Footer from '@/components/Footer';

export default function FaktorRisikoPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <RiskFactorsSection />
      </main>
      <Footer />
    </div>
  );
}
