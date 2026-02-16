import SimpleNavbar from '@/components/SimpleNavbar';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DiabetesMellitusPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/#learning-menu" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Menu
          </Link>
        </div>
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
