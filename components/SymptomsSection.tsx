import SectionContainer from './SectionContainer';
import Image from 'next/image';

export default function SymptomsSection() {
  const symptoms = [
    { image: 'mudah-lelah.jpg', text: 'Mudah Lelah' },
    { image: 'berat-badan-turun.jpg', text: 'Berat badan turun tanpa sebab jelas' },
    { image: 'pengelihatan-kabur.jpg', text: 'Penglihatan kabur' },
    { image: 'luka-sulit-sembuh.jpg', text: 'Luka sulit sembuh' },
    { image: 'kesemutan.jpg', text: 'Kesemutan pada tangan atau kaki' },
  ];

  return (
    <SectionContainer id="tanda-gejala">
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Kenali Gejala Diabetes Sejak Awal
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/Kenali Gejala Diabetes Sejak Awal.jpg"
              alt="Kenali Gejala Diabetes"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* Gejala Khas 3P */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Gejala Khas (3P)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ul className="space-y-6">
              <li className="flex items-start gap-4 bg-white/70 p-4 rounded-xl">
                <span className="text-3xl">💧</span>
                <div>
                  <span className="font-bold text-slate-900 text-lg">Poliuria:</span>
                  <span className="text-slate-700 text-base"> sering buang air kecil</span>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white/70 p-4 rounded-xl">
                <span className="text-3xl">🥤</span>
                <div>
                  <span className="font-bold text-slate-900 text-lg">Polidipsia:</span>
                  <span className="text-slate-700 text-base"> sering merasa haus</span>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white/70 p-4 rounded-xl">
                <span className="text-3xl">🍽️</span>
                <div>
                  <span className="font-bold text-slate-900 text-lg">Polifagia:</span>
                  <span className="text-slate-700 text-base"> sering merasa lapar</span>
                </div>
              </li>
            </ul>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-white">
              <Image
                src="/images/3p.jpg"
                alt="Gejala 3P"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Gejala Lainnya */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Gejala Lainnya</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full aspect-square bg-white">
                  <Image
                    src={`/images/${symptom.image}`}
                    alt={symptom.text}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base text-slate-700 font-semibold text-center leading-relaxed">
                    {symptom.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
