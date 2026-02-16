import MateriNavigation from '@/components/MateriNavigation';
import BloodSugarTabs from '@/components/BloodSugarTabs';
import Footer from '@/components/Footer';

export default function NilaiGulaDarahPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <BloodSugarTabs />
      </main>
      <Footer />
    </div>
  );
}
