import SimpleNavbar from '@/components/SimpleNavbar';
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Tipe1DetailPage() {
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
                Diabetes Mellitus Tipe 1
              </h1>
            </div>

            {/* Pengertian */}
            <div className="bg-blue-50 rounded-xl p-6 space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">📖 Pengertian</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Diabetes Mellitus Tipe 1 adalah kondisi ketika tubuh tidak dapat memproduksi insulin karena sistem kekebalan tubuh menyerang sel penghasil insulin di pankreas. Akibatnya, gula dalam darah tidak bisa masuk ke sel untuk diubah menjadi energi.
              </p>
            </div>

            {/* Proses Terjadinya */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">🔄 Proses Terjadinya DM Tipe 1</h2>
              
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-red-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">1️⃣ Sistem kekebalan menyerang sel pankreas</h3>
                  <p className="text-slate-700">Tubuh keliru mengenali sel penghasil insulin sebagai ancaman lalu merusaknya.</p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">2️⃣ Produksi insulin berhenti atau sangat sedikit</h3>
                  <p className="text-slate-700">Karena sel pankreas rusak, insulin tidak diproduksi dalam jumlah yang cukup.</p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">3️⃣ Gula tidak dapat masuk ke dalam sel</h3>
                  <p className="text-slate-700">Tanpa insulin, gula tidak bisa masuk ke sel untuk dijadikan energi.</p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">4️⃣ Gula menumpuk dalam darah</h3>
                  <p className="text-slate-700">Akibatnya kadar gula darah menjadi tinggi.</p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">5️⃣ Tubuh kekurangan energi</h3>
                  <p className="text-slate-700">Meskipun gula dalam darah tinggi, sel tubuh tetap kekurangan bahan bakar.</p>
                </div>
              </div>
            </div>

            {/* Pesan Motivasi */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">👉</span>
                <strong>Jika kamu atau temanmu memiliki DM tipe 1, jangan merasa berbeda atau minder.</strong> Dengan penggunaan insulin yang teratur, pola makan sehat, dan pemantauan gula darah, kamu tetap bisa aktif, berprestasi, dan menjalani kehidupan normal.
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
