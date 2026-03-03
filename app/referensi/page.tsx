import SimpleNavbar from '@/components/SimpleNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

const references = [
  {
    authors: "Adrian, A., Amiruddin, R., & Zulkifli, A.",
    year: "2025",
    title: "Teens knowledge and attitude on type 2 diabetes at senior high school in 2024.",
    journal: "Seejph, 26."
  },
  {
    authors: "Agustina, P., Darliana, D., & Amalia, R.",
    year: "2025",
    title: "Pengetahuan pasien tentang diabetes melitus tipe 2 di Poliklinik Endokrin RSUD dr. Zainoel Abidin Banda Aceh.",
    journal: "Jurnal Lintas Keperawatan, 6(1), 416–422."
  },
  {
    authors: "Dewi, S. C., & Kurniasari, R.",
    year: "2022",
    title: "Pengaruh edukasi menggunakan media leaflet dan website terhadap pengetahuan mahasiswa mengenai faktor risiko diabetes mellitus.",
    journal: "Jurnal Untuk Masyarakat Sehat (JUKMAS), 6(2), 106–112."
  },
  {
    authors: "Dony, Y. A., Wulandari, R., & Yuantari, M. C.",
    year: "2025",
    title: "Systematic review faktor risiko, penyebab dan dampak diabetes pada remaja.",
    journal: "Jurnal Locus Penelitian dan Pengabdian, 4(8), 7458–7466."
  },
  {
    authors: "ElSayed, N. A., Aleppo, G., Aroda, V. R., Bannuru, R. R., Brown, F. M., Bruemmer, D., … & Gabbay, R. A.",
    year: "2022",
    title: "Introduction and methodology: Standards of care in diabetes—2023.",
    journal: "Diabetes Care, 46(Suppl. 1), S1."
  },
  {
    authors: "Kementerian Kesehatan Republik Indonesia.",
    year: "2024",
    title: "Profil Kesehatan Indonesia 2023.",
    journal: "Kementerian Kesehatan Republik Indonesia."
  },
  {
    authors: "Lestari, L., & Zulkarnain, Z.",
    year: "2021",
    title: "Diabetes melitus: Review etiologi, patofisiologi, gejala, penyebab, cara pemeriksaan, cara pengobatan dan cara pencegahan.",
    journal: "Dalam Prosiding Seminar Nasional Biologi (Vol. 7, No. 1, pp. 237–241)."
  },
  {
    authors: "Nurvita, S.",
    year: "2023",
    title: "Diabetes mellitus tipe 1 pada anak di Indonesia.",
    journal: "PREPOTIF: Jurnal Kesehatan Masyarakat, 7(1), 635–639."
  },
  {
    authors: "Putri, N. S., Firmanti, T. A., & Nazmi, A. N.",
    year: "2022",
    title: "Pengaruh WEB-SEREIS terhadap pengetahuan dan perilaku pencegahan diabetes mellitus tipe 2 pada remaja.",
    journal: "Jurnal Keperawatan Muhammadiyah, 7(4)."
  },
  {
    authors: "Sami, A., Javed, A., Ozsahin, D. U., Ozsahin, I., Muhammad, K., & Waheed, Y.",
    year: "2025",
    title: "Genetics of diabetes and its complications: A comprehensive review.",
    journal: "Diabetology & Metabolic Syndrome, 17(1), 185."
  },
  {
    authors: "Sari, M. P.",
    year: "2024",
    title: "Edukasi diabetes melitus dan pemeriksaan glukosa darah sewaktu pada remaja.",
    journal: "PEKAT: Jurnal Pengabdian kepada Masyarakat, 3(2), 58–65."
  },
  {
    authors: "Silalahi, L.",
    year: "2019",
    title: "Hubungan pengetahuan dan tindakan pencegahan diabetes mellitus tipe 2.",
    journal: "Jurnal PROMKES, 7(2), 223–232.",
    doi: "https://doi.org/10.20473/jpk.v7.i2.2019.223-232"
  },
  {
    authors: "Suryati, E. S.",
    year: "2025",
    title: "Pengaruh edukasi multimedia terhadap peningkatan pengetahuan, sikap, dan perilaku remaja dalam pencegahan penyakit diabetes melitus.",
    journal: "Jurnal Kedokteran STM, 8(2), 215–223."
  },
  {
    authors: "Susanti, N., Sari, D., Dina, D., Hasibuan, I. L., Melisa, M., & Dharma, R. A.",
    year: "2023",
    title: "Analisis gambaran faktor risiko perilaku penyakit tidak menular pada remaja.",
    journal: "Jurnal Kesehatan Tambusai, 4(4), 4530–4535."
  }
];

export default function ReferensiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SimpleNavbar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/menu" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Menu
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b">
              <div className="bg-blue-600 p-3 rounded-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Referensi
                </h1>
                <p className="text-slate-600 mt-1">
                  Daftar pustaka dan sumber informasi
                </p>
              </div>
            </div>

            {/* References List */}
            <div className="space-y-6">
              {references.map((ref, index) => (
                <div 
                  key={index}
                  className="p-5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <div className="flex gap-4">
                    <span className="text-blue-600 font-bold text-lg flex-shrink-0">
                      [{index + 1}]
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold">{ref.authors}</span> ({ref.year}). {ref.title} <span className="italic">{ref.journal}</span>
                      {ref.doi && (
                        <>
                          {' '}
                          <a 
                            href={ref.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            {ref.doi}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t">
              <p className="text-sm text-slate-500 text-center">
                Total {references.length} referensi digunakan dalam penyusunan website SMART DM
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
