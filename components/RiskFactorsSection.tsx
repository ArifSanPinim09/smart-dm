import SectionContainer from './SectionContainer';
import Image from 'next/image';

export default function RiskFactorsSection() {
  const risks = [
    { image: 'Riwayat keluarga dengan diabetes.jpg', text: 'Riwayat keluarga dengan diabetes' },
    { image: 'Pola makan tinggi gula, lemak, dan makanan cepat saji.jpg', text: 'Pola makan tinggi gula, lemak, dan makanan cepat saji' },
    { image: 'Kurang aktivitas fisik.jpg', text: 'Kurang aktivitas fisik' },
    { image: 'Obesitas atau berat badan berlebih.jpg', text: 'Obesitas atau berat badan berlebih' },
    { image: 'Kurangnya pengetahuan tentang pola hidup sehat.jpg', text: 'Kurangnya pengetahuan tentang pola hidup sehat' },
  ];

  return (
    <SectionContainer id="faktor-risiko">
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Siapa yang Berisiko Terkena Diabetes?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/Siapa yang Berisiko Terkena Diabetes.jpg"
              alt="Siapa yang Berisiko Terkena Diabetes"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  src={`/images/${risk.image}`}
                  alt={risk.text}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-base text-slate-700 font-semibold text-center leading-relaxed">
                  {risk.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
