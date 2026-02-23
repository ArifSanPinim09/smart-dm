import DetailTemplate from '@/components/DetailTemplate';

export default function AktifBergerakPage() {
  return (
    <DetailTemplate
      backHref="/materi/pencegahan"
      title="3️⃣ Aktif Bergerak Minimal 30–60 Menit per Hari"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🏃</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Lakukan olahraga ringan seperti jalan cepat, bersepeda, atau skipping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Bisa juga ikut kegiatan ekstrakurikuler olahraga di sekolah.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Kurangi duduk terlalu lama atau screen time berlebihan.</span>
            </li>
          </ul>
        </div>
      }
      tip="Aktivitas fisik membantu tubuh menggunakan gula darah sebagai energi."
      bgColor="bg-green-50"
      borderColor="border-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
    />
  );
}
