import Image from 'next/image';

export default function Hero() {
  return (
    <section id="beranda" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Kenali Diabetes Mellitus Sejak Dini
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Diabetes Mellitus (DM) adalah penyakit yang ditandai dengan kadar gula darah tinggi akibat gangguan kerja insulin. Penyakit ini tidak hanya menyerang orang dewasa, tetapi juga semakin banyak ditemukan pada remaja. Melalui website SMART DM, kamu bisa belajar mengenali diabetes, faktor risikonya, serta cara pencegahannya agar tetap sehat dan aktif.
            </p>
            <a
              href="/materi/diabetes-mellitus"
              className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Mulai Belajar
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/hero.jpg"
                alt="Hero Diabetes Education"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
