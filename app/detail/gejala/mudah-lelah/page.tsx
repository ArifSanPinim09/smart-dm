import DetailTemplate from '@/components/DetailTemplate';

export default function MudahLelahPage() {
  return (
    <DetailTemplate
      backHref="/materi/gejala"
      title="1️⃣ Mudah Lelah"
      content={
        <p className="text-lg text-slate-700 leading-relaxed">
          Tubuh terasa cepat capek meskipun tidak melakukan aktivitas berat. Hal ini terjadi karena gula dalam darah tidak bisa masuk ke sel untuk dijadikan energi, sehingga tubuh kekurangan tenaga.
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

