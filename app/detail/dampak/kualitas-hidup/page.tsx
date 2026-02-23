import DetailTemplate from '@/components/DetailTemplate';

export default function KualitasHidupPage() {
  return (
    <DetailTemplate
      backHref="/materi/dampak"
      title="Dampak pada Kualitas Hidup di Masa Depan"
      content={
        <div className="space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            Kesehatan yang tidak dijaga sejak remaja bisa berdampak pada kehidupan di masa depan.
          </p>
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <p className="font-semibold text-slate-900 mb-2">Jika pola hidup tidak sehat terus berlanjut:</p>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700">✗ Aktivitas sehari-hari menjadi terbatas</li>
              <li className="text-slate-700">✗ Produktivitas menurun saat usia kuliah atau bekerja</li>
              <li className="text-slate-700">✗ Ketergantungan pada pengobatan jangka panjang</li>
              <li className="text-slate-700">✗ Beban biaya kesehatan yang lebih besar</li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
            <p className="font-semibold text-slate-900 mb-2">Sebaliknya, jika sejak remaja sudah menerapkan pola hidup sehat:</p>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700">✨ Tubuh lebih bugar dan kuat</li>
              <li className="text-slate-700">✨ Aktivitas belajar dan bekerja lebih optimal</li>
              <li className="text-slate-700">✨ Lebih percaya diri menjalani masa depan</li>
              <li className="text-slate-700">✨ Peluang hidup sehat hingga dewasa lebih besar</li>
            </ul>
          </div>
        </div>
      }
      tip="Apa yang kamu lakukan hari ini akan memengaruhi kualitas hidupmu di masa depan. Mulai dari sekarang ya!"
      bgColor="bg-pink-50"
      borderColor="border-pink-500"
      gradientFrom="from-pink-500"
      gradientTo="to-pink-600"
    />
  );
}
