import DetailTemplate from '@/components/DetailTemplate';

export default function AktivitasSekolahPage() {
  return (
    <DetailTemplate
      backHref="/materi/dampak"
      title="Aktivitas Sekolah dan Sosial"
      content={
        <div className="space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            Diabetes yang tidak terkontrol dapat menyebabkan:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700">• Mudah Lelah</li>
            <li className="text-slate-700">• Sering haus dan buang air kecil</li>
            <li className="text-slate-700">• Konsentrasi menurun</li>
            <li className="text-slate-700">• Sering izin ke UKS atau tidak masuk sekolah</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed font-semibold mt-4">
            Hal ini dapat memengaruhi:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700">• Prestasi akademik</li>
            <li className="text-slate-700">• Keikutsertaan dalam kegiatan olahraga</li>
            <li className="text-slate-700">• Interaksi sosial dengan teman</li>
          </ul>
        </div>
      }
      tip="Beberapa remaja juga bisa merasa minder atau takut dijauhi karena kondisi kesehatannya."
      bgColor="bg-pink-50"
      borderColor="border-pink-500"
      gradientFrom="from-pink-500"
      gradientTo="to-pink-600"
    />
  );
}
