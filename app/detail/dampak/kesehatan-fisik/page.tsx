import SimpleNavbar from '@/components/SimpleNavbar';
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function KesehatanFisikPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/materi/dampak" 
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
                Kesehatan Fisik (Mata, Ginjal, Jantung)
              </h1>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-500">
              <p className="text-lg text-slate-700 leading-relaxed">
                Diabetes Mellitus yang tidak terkontrol dapat menyebabkan kadar gula darah tinggi dalam waktu lama. Kondisi ini dapat merusak pembuluh darah kecil maupun besar di tubuh.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-300 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">👁️</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Mata</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Kadar gula darah yang tinggi dapat merusak pembuluh darah kecil di mata. Akibatnya, penglihatan bisa menjadi kabur, sulit fokus, atau lebih cepat lelah saat membaca. Jika tidak dikendalikan dalam jangka panjang, risiko gangguan penglihatan bisa meningkat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-300 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🫘</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Ginjal</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Ginjal berfungsi menyaring darah. Jika pembuluh darah di ginjal rusak akibat gula darah tinggi, fungsi penyaringan menurun. Dalam jangka panjang bisa menyebabkan gangguan ginjal hingga gagal ginjal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-300 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">❤️</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Jantung</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Diabetes meningkatkan risiko penyakit jantung dan stroke karena pembuluh darah menjadi lebih mudah mengalami penyumbatan. Risiko tekanan darah tinggi dan kolesterol juga lebih besar pada penderita DM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-6 text-white">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">👉</span>
                <strong>Intinya: gula darah tinggi merusak pembuluh darah dan organ vital.</strong>
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
