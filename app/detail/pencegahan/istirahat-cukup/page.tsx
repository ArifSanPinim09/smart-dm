import DetailTemplate from '@/components/DetailTemplate';

export default function IstirahatCukupPage() {
  return (
    <DetailTemplate
      backHref="/materi/pencegahan"
      title="5️⃣ Istirahat yang Cukup"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">😴</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Tidur 7–9 jam per malam.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Hindari begadang terlalu sering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Kurangi penggunaan gadget sebelum tidur.</span>
            </li>
          </ul>
        </div>
      }
      tip="Kurang tidur dapat mengganggu metabolisme dan meningkatkan risiko diabetes."
      bgColor="bg-green-50"
      borderColor="border-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
    />
  );
}
