import DetailTemplate from '@/components/DetailTemplate';

export default function KesemutanPage() {
  return (
    <DetailTemplate
      backHref="/materi/gejala"
      title="5️⃣ Kesemutan pada Tangan atau Kaki"
      content={
        <p className="text-lg text-slate-700 leading-relaxed">
          Kadar gula yang tinggi dalam waktu lama dapat merusak saraf, sehingga muncul rasa kesemutan, kebas, atau seperti tertusuk jarum di tangan atau kaki.
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
