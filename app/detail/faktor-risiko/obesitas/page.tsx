import DetailTemplate from '@/components/DetailTemplate';

export default function ObesitasPage() {
  return (
    <DetailTemplate
      backHref="/materi/faktor-risiko"
      title="⚖️ Obesitas atau Berat Badan Berlebih"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">⚖️</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Berat badan berlebih, terutama penumpukan lemak di area perut, dapat membuat tubuh menjadi kurang sensitif terhadap insulin. Semakin tinggi indeks massa tubuh (IMT), semakin besar risiko terjadinya resistensi insulin dan diabetes tipe 2.
          </p>
        </div>
      }
      tip="Menjaga berat badan ideal membantu tubuh menggunakan insulin dengan lebih efektif."
      bgColor="bg-orange-50"
      borderColor="border-orange-500"
      gradientFrom="from-orange-500"
      gradientTo="to-orange-600"
    />
  );
}
