import DetailTemplate from '@/components/DetailTemplate';

export default function CekKesehatanPage() {
  return (
    <DetailTemplate
      backHref="/materi/pencegahan"
      title="6️⃣ Rutin Cek Kesehatan Bila Berisiko"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🩺</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Periksa gula darah jika memiliki riwayat keluarga diabetes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Konsultasi ke tenaga kesehatan bila mengalami gejala seperti sering haus atau mudah lelah.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-lg text-slate-700">Lakukan pemeriksaan secara berkala jika berat badan berlebih.</span>
            </li>
          </ul>
        </div>
      }
      tip="Deteksi dini membantu mencegah komplikasi di kemudian hari."
      bgColor="bg-green-50"
      borderColor="border-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
    />
  );
}
