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
            Kurangnya informasi mengenai pentingnya pola makan sehat, aktivitas fisik, dan pemeriksaan kesehatan dapat membuat seseorang tidak menyadari risiko yang dimiliki. Tanpa pengetahuan yang cukup, kebiasaan tidak sehat bisa terus dilakukan tanpa disadari dampaknya.
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
