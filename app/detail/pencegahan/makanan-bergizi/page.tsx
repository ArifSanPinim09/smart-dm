import DetailTemplate from '@/components/DetailTemplate';

export default function MakananBergiziPage() {
  return (
    <DetailTemplate
      backHref="/materi/pencegahan"
      title="1️⃣ Makan Makanan Bergizi Seimbang"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🥗</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Konsumsi karbohidrat secukupnya, pilih yang berserat seperti nasi merah atau roti gandum.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Perbanyak sayur dan buah setiap hari.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Tambahkan protein sehat seperti telur, ikan, tahu, dan tempe.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Hindari pola makan berlebihan atau tidak teratur.</span>
            </li>
          </ul>
        </div>
      }
      tip="Pola makan seimbang membantu menjaga kadar gula darah tetap stabil."
      bgColor="bg-green-50"
      borderColor="border-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
    />
  );
}
