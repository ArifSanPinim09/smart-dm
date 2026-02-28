import SectionContainer from './SectionContainer';
import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const oralMeds = [
    { image: 'metformin.jpg', text: 'Metformin: membantu tubuh lebih peka terhadap insulin' },
    { image: 'sulfonilurea.jpg', text: 'Sulfonilurea: merangsang pankreas menghasilkan insulin' },
    { image: 'dpp-4.jpg', text: 'Inhibitor DPP-4: membantu mengatur gula darah setelah makan' },
    { image: 'sglt-2.jpg', text: 'Inhibitor SGLT-2: membantu membuang kelebihan gula lewat urin' },
  ];

  return (
    <SectionContainer id="penanganan">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Penanganan Diabetes Mellitus
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pada beberapa kondisi, diabetes perlu ditangani dengan obat-obatan untuk membantu mengontrol kadar gula darah. Penanganan dilakukan sesuai jenis diabetes dan kondisi tubuh, serta tetap harus disertai pola hidup sehat.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/penanganan-diabetes.jpg"
                alt="Penanganan Diabetes"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>

        {/* Insulin */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">💉 Insulin</h3>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
            Insulin membantu gula darah masuk ke dalam sel agar bisa digunakan sebagai energi. Digunakan terutama pada DM Tipe 1, dan pada DM Tipe 2 jika gula darah belum terkontrol.
          </p>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/detail/penanganan/insulin-video"
              className="block relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <Image
                src="/images/insulin.jpg"
                alt="Insulin - Klik untuk melihat video panduan"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
              />
              {/* Overlay yang selalu terlihat di semua ukuran layar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-base md:text-lg font-semibold">
                    <span className="text-3xl md:text-2xl">📹</span>
                    <span className="text-center leading-tight">Lihat Video Panduan Penggunaan Insulin</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h4 className="font-bold text-slate-900 mb-6 text-xl">
              Jenis insulin berdasarkan lama kerja:
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-2xl">⚡</span>
                <span className="text-slate-700 text-base">
                  <strong>Kerja cepat:</strong> mengontrol gula darah saat/setelah makan
                </span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-2xl">⏱️</span>
                <span className="text-slate-700 text-base">
                  <strong>Kerja pendek:</strong> mengontrol gula darah setelah makan
                </span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-2xl">🔁</span>
                <span className="text-slate-700 text-base">
                  <strong>Kerja menengah:</strong> menjaga gula darah sepanjang hari
                </span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-2xl">🌙</span>
                <span className="text-slate-700 text-base">
                  <strong>Kerja panjang:</strong> menjaga gula darah seharian dan malam
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Obat Oral */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            💊 Obat Antidiabetes Oral (ADO)
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
            Obat minum yang umumnya digunakan pada DM Tipe 2, seperti:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {oralMeds.map((med, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full aspect-[4/3] bg-white">
                  <Image
                    src={`/images/${med.image}`}
                    alt={med.text}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base text-slate-700 leading-relaxed">{med.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-base text-slate-700 text-center">
              ⚠️ Obat dipilih sesuai usia, kondisi tubuh, dan anjuran tenaga kesehatan.
            </p>
          </div>
        </div>

        {/* Terapi Kombinasi */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            🔗 Terapi Kombinasi
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            Jika satu jenis obat belum cukup, dokter dapat memberikan kombinasi obat untuk membantu gula darah lebih terkontrol.
          </p>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
            <p className="text-base text-slate-700 text-center">
              ⚠️ Obat diabetes tidak boleh digunakan sembarangan dan harus sesuai anjuran tenaga kesehatan.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
