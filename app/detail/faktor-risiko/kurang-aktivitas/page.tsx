import DetailTemplate from '@/components/DetailTemplate';

export default function KurangAktivitasPage() {
  return (
    <DetailTemplate
      backHref="/materi/faktor-risiko"
      title="🏃 Kurang Aktivitas Fisik"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🏃</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Tubuh yang jarang bergerak membuat gula dalam darah tidak digunakan secara optimal sebagai energi. Kurangnya aktivitas fisik juga dapat menyebabkan peningkatan berat badan dan menurunkan sensitivitas insulin. Akibatnya, risiko diabetes tipe 2 menjadi lebih tinggi.
          </p>
        </div>
      }
      tip="Lakukan aktivitas fisik minimal 30 menit setiap hari, seperti jalan cepat, bersepeda, atau olahraga ringan."
      bgColor="bg-orange-50"
      borderColor="border-orange-500"
      gradientFrom="from-orange-500"
      gradientTo="to-orange-600"
    />
  );
}
