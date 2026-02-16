import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EducationSection from '@/components/EducationSection';
import BloodSugarTabs from '@/components/BloodSugarTabs';
import RiskFactorsSection from '@/components/RiskFactorsSection';
import SymptomsSection from '@/components/SymptomsSection';
import TreatmentSection from '@/components/TreatmentSection';
import ImpactSection from '@/components/ImpactSection';
import PreventionSection from '@/components/PreventionSection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <EducationSection />
        <BloodSugarTabs />
        <RiskFactorsSection />
        <SymptomsSection />
        <TreatmentSection />
        <ImpactSection />
        <PreventionSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
