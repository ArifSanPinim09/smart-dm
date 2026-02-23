import DetailTemplate from '@/components/DetailTemplate';

export default function PenglihatanKaburPage() {
  return (
    <DetailTemplate
      backHref="/materi/gejala"
      title="3️⃣ Penglihatan Kabur"
      content={
        <p className="text-lg text-slate-700 leading-relaxed">
          Kadar gula darah yang tinggi dapat memengaruhi cairan di dalam mata sehingga penglihatan menjadi tidak jelas atau buram. Biasanya akan membaik jika gula darah terkontrol.
        </p>
      }
      tip="Penting: Jika kamu mengalami gejala ini secara terus-menerus, segera konsultasikan dengan tenaga kesehatan untuk pemeriksaan lebih lanjut."
      bgColor="bg-purple-50"
      borderColor="border-purple-500"
      gradientFrom="from-purple-500"
      gradientTo="to-purple-600"
    />
  );
}
