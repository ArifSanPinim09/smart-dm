import DetailTemplate from '@/components/DetailTemplate';

export default function KurangiFastFoodPage() {
  return (
    <DetailTemplate
      backHref="/materi/pencegahan"
      title="2️⃣ Mengurangi Makanan Cepat Saji dan Minuman Manis"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🚫</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Batasi konsumsi gorengan, fast food, dan camilan tinggi gula.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Kurangi minuman bersoda, boba, teh manis, dan minuman kemasan.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Ganti dengan air putih atau jus tanpa tambahan gula.</span>
            </li>
          </ul>
        </div>
      }
      tip="Terlalu banyak gula dapat meningkatkan risiko resistensi insulin."
      bgColor="bg-green-50"
      borderColor="border-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
    />
  );
}
