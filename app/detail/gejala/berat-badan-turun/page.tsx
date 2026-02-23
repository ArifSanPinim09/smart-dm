import DetailTemplate from '@/components/DetailTemplate';

export default function BeratBadanTurunPage() {
  return (
    <DetailTemplate
      backHref="/materi/gejala"
      title="2️⃣ Berat Badan Turun Tanpa Sebab Jelas"
      content={
        <p className="text-lg text-slate-700 leading-relaxed">
          Penurunan berat badan terjadi meskipun pola makan tidak berubah atau bahkan tetap banyak makan. Ini karena tubuh mulai memecah lemak dan otot sebagai sumber energi pengganti.
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
