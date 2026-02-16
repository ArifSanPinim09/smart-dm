'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Droplet, AlertTriangle, Stethoscope, Pill, Heart, Shield, Video } from 'lucide-react';

const menuItems = [
  { id: 'home', title: 'Beranda', icon: Home, href: '/' },
  { id: 'education', title: 'Apa Itu DM?', icon: BookOpen, href: '/materi/diabetes-mellitus' },
  { id: 'blood-sugar', title: 'Nilai Normal', icon: Droplet, href: '/materi/nilai-gula-darah' },
  { id: 'risk-factors', title: 'Faktor Risiko', icon: AlertTriangle, href: '/materi/faktor-risiko' },
  { id: 'symptoms', title: 'Gejala', icon: Stethoscope, href: '/materi/gejala' },
  { id: 'treatment', title: 'Penanganan', icon: Pill, href: '/materi/penanganan' },
  { id: 'impact', title: 'Dampak', icon: Heart, href: '/materi/dampak' },
  { id: 'prevention', title: 'Pencegahan', icon: Shield, href: '/materi/pencegahan' },
  { id: 'video', title: 'Video', icon: Video, href: '/materi/video' }
];

export default function MateriNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
