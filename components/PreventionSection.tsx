import SectionContainer from './SectionContainer';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PreventionSection() {
  const preventions = [
    { id: 'makanan-bergizi', image: 'makanan-bergizi.jpg', text: 'Makan makanan bergizi seimbang' },
    { id: 'kurangi-fast-food', image: 'mengurangi-makanan.jpg', text: 'Mengurangi makanan cepat saji dan minuman manis' },
    { id: 'aktif-bergerak', image: 'aktif-bergerak.jpg', text: 'Aktif bergerak minimal 30–60 menit per hari' },
    { id: 'berat-badan-ideal', image: 'berat-badan.png', text: 'Menjaga berat badan ideal' },
    { id: 'istirahat-cukup', image: 'istirahat-cukup.jpg', text: 'Istirahat cukup' },
    { id: 'cek-kesehatan', image: 'cek-kesehatan.jpg', text: 'Rutin cek kesehatan bila berisiko' },
  ];

  return (
    <SectionContainer id="pencegahan">
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Cara Mencegah Diabetes Sejak Remaja
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/cara-mencegah.jpg"
              alt="Cara Mencegah Diabetes"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed text-center max-w-2xl mx-auto">
          Diabetes, khususnya DM tipe 2, bisa dicegah dengan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {preventions.map((prevention, index) => (
            <Link
              key={index}
              href={`/detail/pencegahan/${prevention.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  src={`/images/${prevention.image}`}
                  alt={prevention.text}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base text-slate-700 font-semibold leading-relaxed group-hover:text-blue-600 transition-colors">
                    {prevention.text}
                  </p>
                </div>
                <div className="flex items-center justify-center text-blue-600 text-sm font-semibold pt-3">
                  <span>Pelajari Lebih Lanjut</span>
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
