import DetailTemplate from '@/components/DetailTemplate';

export default function KurangPengetahuanPage() {
  return (
    <DetailTemplate
      backHref="/materi/faktor-risiko"
      title="📚 Kurangnya Pengetahuan tentang Pola Hidup Sehat"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">📚</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Kurangnya pengetahuan tentang Diabetes Mellitus dapat membuat seseorang tidak menyadari faktor risiko dan dampaknya.
            Solusinya, tingkatkan pemahaman dengan mencari informasi dari sumber terpercaya, mengikuti edukasi kesehatan, membaca materi tentang DM, serta aktif bertanya kepada tenaga kesehatan. Dengan pengetahuan yang cukup, kita dapat mengambil langkah pencegahan yang tepat sejak dini.
          </p>
        </div>
      }
      tip="Edukasi kesehatan sejak remaja sangat penting untuk mencegah diabetes di masa depan."
      bgColor="bg-orange-50"
      borderColor="border-orange-500"
      gradientFrom="from-orange-500"
      gradientTo="to-orange-600"
    />
  );
}
