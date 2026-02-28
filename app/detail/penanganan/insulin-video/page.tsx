'use client';

import SimpleNavbar from '@/components/SimpleNavbar';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InsulinVideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <SimpleNavbar />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          href="/#penanganan"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Penanganan
        </Link>

        {/* Header */}
        <div className="max-w-5xl mx-auto space-y-6 mb-10">
          <div className="text-center space-y-4">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-2">
              <span className="text-5xl">💉</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Video Panduan Penggunaan Insulin
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Sebelum pemberian insulin, kita wajib cuci tangan dulu untuk menjaga kebersihan dan mencegah infeksi.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Video 1: Mencuci Tangan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧼</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Mencuci Tangan yang Baik dan Benar
                </h2>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Zd4o-VJdcfE"
                  title="Mencuci Tangan yang Baik dan Benar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Penting:</strong> Cuci tangan dengan sabun dan air mengalir selama minimal 20 detik sebelum menyuntikkan insulin untuk mencegah infeksi.
                </p>
              </div>
            </div>
          </div>

          {/* Video 2: Cara Penggunaan Insulin */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💉</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Cara Penggunaan Insulin
                </h2>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4hGrSAQAGso"
                  title="Cara Penggunaan Insulin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Tips:</strong> Ikuti langkah-langkah dengan benar dan konsultasikan dengan tenaga kesehatan jika ada pertanyaan tentang penggunaan insulin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">⚠️</span>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-lg">Perhatian Penting</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Selalu konsultasikan dengan dokter atau tenaga kesehatan sebelum menggunakan insulin</li>
                  <li>• Simpan insulin sesuai petunjuk penyimpanan yang benar</li>
                  <li>• Periksa tanggal kedaluwarsa sebelum digunakan</li>
                  <li>• Jangan berbagi jarum suntik dengan orang lain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
