import SimpleNavbar from '@/components/SimpleNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Instagram, Youtube, Mail } from 'lucide-react';

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SimpleNavbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/menu" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Menu
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Header */}
            <div className="text-center space-y-4 border-b pb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
                SMART DM
              </h1>
              <p className="text-xl text-slate-700 font-semibold">
                Citra Damas Septia
              </p>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Dirancang untuk memenuhi syarat Tugas Akhir program D4 Keperawatan Poltekkes Kemenkes Tasikmalaya
              </p>
            </div>

            {/* Tentang Website */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Tentang Website
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Website SMART DM merupakan media edukasi kesehatan berbasis digital yang menyajikan informasi tentang Diabetes Mellitus (DM), meliputi pengertian, faktor risiko, gejala, pencegahan, dan pengelolaan mandiri. Website ini dirancang sederhana, menarik, dan mudah dipahami serta dapat diakses kapan saja dan di mana saja melalui perangkat yang terhubung internet, sehingga membantu meningkatkan pengetahuan dan kesadaran dalam pencegahan serta pengendalian DM.
              </p>
            </div>

            {/* Tim Pembimbing */}
            <div className="space-y-4 bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Tim Pembimbing
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Citra Damas Septia</p>
                    <p className="text-sm text-slate-600">Desainer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Dr. Dini Mariani, S.Kep., Ns., M.Kep</p>
                    <p className="text-sm text-slate-600">Pembimbing 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Novi Enis Rosuliana, M.Kep., Ns.Sp.Kep.An.</p>
                    <p className="text-sm text-slate-600">Pembimbing II</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontak */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Hubungi Kami
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/citradms?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href="https://youtube.com/@citradamasseptia2674?si=jsBP3PVbBwE-CAdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="font-semibold">YouTube</span>
                </a>
                <a
                  href="mailto:citradamasseptia22@gmail.com"
                  className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
