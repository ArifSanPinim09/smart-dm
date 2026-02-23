import DetailTemplate from '@/components/DetailTemplate';

export default function BeratBadanIdealPage() {
  return (
    <DetailTemplate
      backHref="/materi/pencegahan"
      title="4️⃣ Menjaga Berat Badan Ideal"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">⚖️</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Pantau berat badan secara berkala.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Hindari kebiasaan makan berlebihan saat stres atau bosan.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Seimbangkan asupan makanan dan aktivitas fisik.</span>
            </li>
          </ul>
        </div>
      }
      tip="Berat badan ideal membantu insulin bekerja lebih efektif."
      bgColor="bg-green-50"
      borderColor="border-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
    />
  );
}
