import MateriNavigation from '@/components/MateriNavigation';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';

export default function DiabetesMellitusPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
