import DetailTemplate from '@/components/DetailTemplate';

export default function PolaMakanPage() {
  return (
    <DetailTemplate
      backHref="/materi/faktor-risiko"
      title="🍟 Pola Makan Tinggi Gula, Lemak, dan Makanan Cepat Saji"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🍟</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Sering mengonsumsi minuman manis, makanan tinggi gula, lemak jenuh, dan makanan cepat saji dapat menyebabkan kenaikan berat badan dan resistensi insulin. Jika kebiasaan ini berlangsung lama, tubuh akan kesulitan mengontrol kadar gula darah sehingga risiko diabetes meningkat.
          </p>
        </div>
      }
      tip="Batasi gula tambahan dan pilih makanan yang lebih seimbang seperti sayur, buah, dan protein sehat."
      bgColor="bg-orange-50"
      borderColor="border-orange-500"
      gradientFrom="from-orange-500"
      gradientTo="to-orange-600"
    />
  );
}
