import DetailTemplate from '@/components/DetailTemplate';

export default function LukaSulitSembuhPage() {
  return (
    <DetailTemplate
      backHref="/materi/gejala"
      title="4️⃣ Luka Sulit Sembuh"
      content={
        <p className="text-lg text-slate-700 leading-relaxed">
          Gula darah tinggi dapat memperlambat proses penyembuhan luka dan meningkatkan risiko infeksi. Luka kecil pun bisa membutuhkan waktu lebih lama untuk sembuh.
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
