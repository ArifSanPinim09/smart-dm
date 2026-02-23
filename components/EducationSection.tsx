import SectionContainer from './SectionContainer';
import Image from 'next/image';
import Link from 'next/link';

export default function EducationSection() {
  const types = [
    {
      id: 'tipe-1',
      image: 'tipe1.jpg',
      title: 'Diabetes Mellitus Tipe 1',
      text: 'Terjadi karena sistem kekebalan tubuh merusak sel penghasil insulin di pankreas. Biasanya muncul sejak anak-anak atau remaja dan memerlukan suntikan insulin seumur hidup.',
    },
    {
      id: 'tipe-2',
      image: 'tipe2.jpg',
      title: 'Diabetes Mellitus Tipe 2',
      text: 'Terjadi karena tubuh tidak sensitif terhadap insulin (resistensi insulin). Jenis ini sering berhubungan dengan pola makan tidak sehat, kurang aktivitas fisik, dan obesitas, serta kini semakin banyak ditemukan pada remaja.',
    },
    {
      id: 'gestasional',
      image: 'DM Gestasional Illustration.jpg',
      title: 'Diabetes Mellitus Gestasional',
      text: 'Diabetes yang muncul saat kehamilan dan berisiko berkembang menjadi DM tipe 2 di kemudian hari.',
    },
  ];

  return (
    <SectionContainer id="edukasi">
      <div className="space-y-20">
        {/* Apa itu DM */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Apa itu Diabetes Mellitus?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Diabetes Mellitus adalah kondisi ketika tubuh tidak mampu mengontrol kadar gula darah karena insulin tidak cukup atau tidak bekerja secara optimal. Insulin berfungsi membantu gula darah masuk ke sel sebagai sumber energi.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/apaitu.jpg"
                alt="Apa itu Diabetes Mellitus"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>

        {/* Jenis DM */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center">
            Jenis Diabetes Mellitus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <Link
                key={index}
                href={`/detail/${type.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative w-full aspect-[4/3] bg-white">
                  <Image
                    src={`/images/${type.image}`}
                    alt={type.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{type.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{type.text}</p>
                  <div className="flex items-center text-blue-600 text-sm font-semibold pt-2">
                    <span>Pelajari Lebih Lanjut</span>
                    <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
