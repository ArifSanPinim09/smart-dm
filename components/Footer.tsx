export default function Footer() {
  const links = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Edukasi DM', href: '#edukasi' },
    { label: 'Nilai Normal', href: '#nilai-normal' },
    { label: 'Faktor Risiko', href: '#faktor-risiko' },
    { label: 'Tanda & Gejala', href: '#tanda-gejala' },
    { label: 'Penanganan', href: '#penanganan' },
    { label: 'Dampak', href: '#dampak' },
    { label: 'Pencegahan', href: '#pencegahan' },
    { label: 'Video Edukasi', href: '#video' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">SMART DM</h3>
            <p className="text-gray-400">Sehat Dimulai Sejak Dini</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SMART DM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
