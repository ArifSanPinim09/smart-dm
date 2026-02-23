import DetailTemplate from '@/components/DetailTemplate';

export default function RiwayatKeluargaPage() {
  return (
    <DetailTemplate
      backHref="/materi/faktor-risiko"
      title="🧬 Riwayat Keluarga dengan Diabetes"
      content={
        <div className="space-y-4">
          <div className="text-6xl text-center mb-4">🧬</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Jika orang tua atau anggota keluarga dekat memiliki diabetes, risiko seseorang untuk mengalami diabetes juga meningkat. Hal ini karena faktor genetik dapat memengaruhi cara tubuh memproduksi atau menggunakan insulin. Namun, memiliki riwayat keluarga bukan berarti pasti terkena diabetes. Pola hidup sehat tetap dapat membantu menurunkan risiko.
          </p>
        </div>
      }
      tip="Artinya: faktor keturunan tidak bisa diubah, tetapi gaya hidup bisa dikontrol."
      bgColor="bg-orange-50"
      borderColor="border-orange-500"
      gradientFrom="from-orange-500"
      gradientTo="to-orange-600"
    />
  );
}
