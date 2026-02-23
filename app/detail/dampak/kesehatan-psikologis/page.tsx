import DetailTemplate from '@/components/DetailTemplate';

export default function KesehatanPsikologisPage() {
  return (
    <DetailTemplate
      backHref="/materi/dampak"
      title="Kesehatan Psikologis (Stres dan Cemas)"
      content={
        <div className="space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            Remaja dengan diabetes bisa mengalami tekanan emosional karena harus:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700">• Mengatur pola makan ketat</li>
            <li className="text-slate-700">• Rutin cek gula darah</li>
            <li className="text-slate-700">• Mengonsumsi obat atau insulin</li>
            <li className="text-slate-700">• Takut terjadi komplikasi</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed font-semibold mt-4">
            Kondisi ini dapat menimbulkan:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700">• Stres</li>
            <li className="text-slate-700">• Rasa cemas berlebihan</li>
            <li className="text-slate-700">• Perasaan berbeda dari teman sebaya</li>
            <li className="text-slate-700">• Menurunnya kepercayaan diri</li>
          </ul>
        </div>
      }
      tip="Jika tidak dikelola dengan baik, masalah psikologis dapat memengaruhi kepatuhan pengobatan dan kontrol gula darah."
      bgColor="bg-pink-50"
      borderColor="border-pink-500"
      gradientFrom="from-pink-500"
      gradientTo="to-pink-600"
    />
  );
}
