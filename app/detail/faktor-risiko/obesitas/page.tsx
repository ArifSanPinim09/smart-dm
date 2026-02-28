/*  */import DetailTemplate from '@/components/DetailTemplate';

export default function ObesitasPage() {
  return (
    <DetailTemplate
      backHref="/materi/faktor-risiko"
      title="⚖️ Obesitas atau Berat Badan Berlebih"
      content={
        <div className="space-y-8">
          <div className="text-6xl text-center mb-4">⚖️</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Berat badan berlebih, terutama penumpukan lemak di area perut, dapat membuat tubuh menjadi kurang sensitif terhadap insulin. Semakin tinggi indeks massa tubuh (IMT), semakin besar risiko terjadinya resistensi insulin dan diabetes tipe 2.
          </p>

          {/* Rumus IMT */}
          <div className="bg-white border-2 border-orange-300 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Rumus IMT
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-mono text-slate-800">
                IMT = <span className="border-b-2 border-slate-800 px-2">Berat Badan (kg)</span>
              </div>
              <div className="text-2xl font-mono text-slate-800 mt-2">
                <span className="px-8">[Tinggi Badan (m)]²</span>
              </div>
            </div>
          </div>

          {/* Catatan */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
            <h4 className="font-bold text-slate-900 mb-3">📝 Catatan:</h4>
            <ul className="space-y-2">
              <li className="text-slate-700">• Berat badan dalam kilogram (kg)</li>
              <li className="text-slate-700">• Tinggi badan dalam meter (m)</li>
              <li className="text-slate-700">• Jika tinggi badan masih dalam cm, ubah dulu ke meter (contoh: 160 cm = 1,60 m)</li>
            </ul>
          </div>

          {/* Contoh Perhitungan */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>✏️</span> Contoh Cara Menghitung
            </h3>
            <div className="space-y-3">
              <p className="text-slate-700">Berat badan = 55 kg</p>
              <p className="text-slate-700">Tinggi badan = 160 cm = 1,60 m</p>
              <div className="bg-white rounded-lg p-4 my-3">
                <p className="text-slate-800 font-mono text-center">
                  IMT = 55 / (1,60)² = 55 / 2,56 = 21,48 kg/m²
                </p>
              </div>
              <p className="text-slate-900 font-bold">Jadi, IMT = 21,48 kg/m²</p>
            </div>
          </div>

          {/* Klasifikasi IMT Dewasa */}
          <div className="bg-white border-2 border-orange-300 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Klasifikasi IMT Dewasa
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border-2 border-orange-300 px-4 py-3 text-left font-bold text-slate-900">Kategori</th>
                    <th className="border-2 border-orange-300 px-4 py-3 text-left font-bold text-slate-900">Nilai IMT (kg/m²)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">Kurus</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">&lt; 18,5</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">Normal</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">18,5 – 22,9</td>
                  </tr>
                  <tr className="bg-yellow-50 hover:bg-yellow-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">Overweight (Berisiko)</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">23,0 – 24,9</td>
                  </tr>
                  <tr className="bg-orange-50 hover:bg-orange-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">Obesitas I</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">25,0 – 29,9</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">Obesitas II</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">≥ 30,0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Klasifikasi IMT Remaja */}
          <div className="bg-white border-2 border-blue-300 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Klasifikasi IMT Remaja (5–18 Tahun)
            </h3>
            <p className="text-sm text-slate-600 italic">
              Setelah menghitung IMT, hasilnya dibandingkan dengan standar IMT menurut umur (IMT/U).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border-2 border-blue-300 px-4 py-3 text-left font-bold text-slate-900">Kategori</th>
                    <th className="border-2 border-blue-300 px-4 py-3 text-left font-bold text-slate-900">Z-score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">Sangat Kurus</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">&lt; -3 SD</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">Kurus</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">-3 SD s/d &lt; -2 SD</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">Normal</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">-2 SD s/d +1 SD</td>
                  </tr>
                  <tr className="bg-yellow-50 hover:bg-yellow-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">Gemuk</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700">&gt; +1 SD s/d +2 SD</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100">
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">Obesitas</td>
                    <td className="border-2 border-gray-200 px-4 py-3 text-slate-700 font-semibold">&gt; +2 SD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Video Panduan */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📹</span> Video Panduan
            </h3>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3">
                <h4 className="text-lg font-bold text-white">⚖️ Cara Mengukur Berat Badan & Lingkar Perut</h4>
              </div>
              <div className="p-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/KrbHIhMSCBU"
                    title="Cara Mengukur Berat Badan & Lingkar Perut"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      tip="Menjaga berat badan ideal membantu tubuh menggunakan insulin dengan lebih efektif."
      bgColor="bg-orange-50"
      borderColor="border-orange-500"
      gradientFrom="from-orange-500"
      gradientTo="to-orange-600"
    />
  );
}
