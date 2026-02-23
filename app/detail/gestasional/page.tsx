import SimpleNavbar from '@/components/SimpleNavbar';
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GestasionalDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/materi/diabetes-mellitus" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
        </div>

        <SectionContainer>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Diabetes Mellitus Gestasional
              </h1>
            </div>

            {/* Pengertian */}
            <div className="bg-pink-50 rounded-xl p-6 space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">📖 Pengertian</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Diabetes Mellitus Gestasional adalah kondisi meningkatnya kadar gula darah yang pertama kali muncul saat kehamilan. Hal ini terjadi karena perubahan hormon selama kehamilan yang memengaruhi kerja insulin dalam tubuh.
              </p>
            </div>

            {/* Proses Terjadinya */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">🔄 Proses Terjadinya DM Gestasional</h2>
              
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-red-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">1️⃣ Perubahan hormon selama kehamilan</h3>
                  <p className="text-slate-700">Saat hamil, tubuh memproduksi hormon yang membantu pertumbuhan janin.</p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">2️⃣ Tubuh menjadi kurang sensitif terhadap insulin</h3>
                  <p className="text-slate-700">Hormon tersebut dapat menyebabkan resistensi insulin, sehingga insulin tidak bekerja secara optimal.</p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">3️⃣ Pankreas harus bekerja lebih keras</h3>
                  <p className="text-slate-700">Untuk menjaga gula darah tetap normal, pankreas meningkatkan produksi insulin.</p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">4️⃣ Produksi insulin tidak mencukupi</h3>
                  <p className="text-slate-700">Jika insulin tambahan tidak cukup, kadar gula darah meningkat.</p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">5️⃣ Terjadi peningkatan gula darah selama kehamilan</h3>
                  <p className="text-slate-700">Kondisi inilah yang disebut diabetes gestasional.</p>
                </div>
              </div>
            </div>

            {/* Pesan Motivasi */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-6 text-white">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">👉</span>
                <strong>Diabetes gestasional perlu dikontrol dengan baik untuk menjaga kesehatan ibu dan bayi.</strong> Meskipun sering membaik setelah persalinan, ibu yang pernah mengalami diabetes gestasional memiliki risiko lebih tinggi terkena DM tipe 2 di masa depan. Karena itu, penting untuk tetap menjaga pola hidup sehat setelah melahirkan.
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
