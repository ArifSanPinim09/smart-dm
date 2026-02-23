import SimpleNavbar from '@/components/SimpleNavbar';
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Tipe2DetailPage() {
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
                Diabetes Mellitus Tipe 2
              </h1>
            </div>

            {/* Pengertian */}
            <div className="bg-green-50 rounded-xl p-6 space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">📖 Pengertian</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Diabetes Mellitus Tipe 2 adalah kondisi ketika tubuh masih memproduksi insulin, tetapi tidak dapat menggunakannya secara efektif. Kondisi ini disebut resistensi insulin. Akibatnya, gula tidak dapat masuk ke dalam sel dengan baik dan kadar gula darah menjadi tinggi.
              </p>
            </div>

            {/* Proses Terjadinya */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">🔄 Proses Terjadinya DM Tipe 2</h2>
              
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-red-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">1️⃣ Pola hidup kurang sehat memicu resistensi insulin</h3>
                  <p className="text-slate-700">Konsumsi makanan tinggi gula dan kurang aktivitas fisik membuat sel tubuh menjadi kurang peka terhadap insulin.</p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">2️⃣ Sel tubuh tidak merespons insulin dengan baik</h3>
                  <p className="text-slate-700">Meskipun insulin ada, gula sulit masuk ke dalam sel untuk dijadikan energi.</p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">3️⃣ Pankreas bekerja lebih keras</h3>
                  <p className="text-slate-700">Untuk mengatasi hal tersebut, pankreas memproduksi lebih banyak insulin.</p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">4️⃣ Produksi insulin lama-kelamaan menurun</h3>
                  <p className="text-slate-700">Jika berlangsung terus-menerus, pankreas bisa kelelahan dan produksi insulin menurun.</p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">5️⃣ Gula darah tetap tinggi</h3>
                  <p className="text-slate-700">Akibatnya, kadar gula dalam darah meningkat dan terjadilah DM tipe 2.</p>
                </div>
              </div>
            </div>

            {/* Pesan Motivasi */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">👉</span>
                <strong>Mulailah dengan langkah sederhana</strong> seperti mengurangi minuman manis, memperbanyak aktivitas fisik, menjaga berat badan ideal, dan tidur cukup. Kebiasaan kecil yang dilakukan setiap hari dapat membantu menjaga kadar gula darah tetap normal dan mencegah masalah kesehatan di masa depan. <strong>Pilihan gaya hidup hari ini menentukan kesehatanmu nanti.</strong>
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
