import SectionContainer from './SectionContainer';
import Image from 'next/image';
import Link from 'next/link';

export default function ImpactSection() {
  const impacts = [
    { id: 'kesehatan-fisik', image: 'kesehatan-fisik.jpg', text: 'Kesehatan fisik (mata, ginjal, jantung)' },
    { id: 'kesehatan-psikologis', image: 'kesehatan-psikologis.jpg', text: 'Kesehatan psikologis (stres, cemas)' },
    { id: 'aktivitas-sekolah', image: 'aktifitas-sekolah.jpg', text: 'Aktivitas sekolah dan sosial' },
    { id: 'kualitas-hidup', image: 'kualitas-hidup-masa-depan.jpeg', text: 'Kualitas hidup di masa depan' },
  ];

  return (
    <SectionContainer id="dampak">
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Mengapa Diabetes Perlu Dicegah?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/mengapa.jpg"
              alt="Mengapa Diabetes Perlu Dicegah"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed text-center max-w-2xl mx-auto">
          Diabetes dapat berdampak pada:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <Link
              key={index}
              href={`/detail/dampak/${impact.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  src={`/images/${impact.image}`}
                  alt={impact.text}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 space-y-2">
                <p className="text-base text-slate-700 font-semibold text-center leading-relaxed group-hover:text-blue-600 transition-colors">
                  {impact.text}
                </p>
                <div className="flex items-center justify-center text-blue-600 text-sm font-semibold pt-2">
                  <span>Pelajari Lebih Lanjut</span>
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed text-center font-medium">
            Pencegahan sejak remaja sangat penting agar terhindar dari komplikasi di usia produktif.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
