import SimpleNavbar from '@/components/SimpleNavbar';
import PreventionSection from '@/components/PreventionSection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PencegahanPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/menu" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Menu
          </Link>
        </div>
        <PreventionSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
