'use client';

import Link from 'next/link';
import SectionContainer from './SectionContainer';
import { BookOpen, Droplet, AlertTriangle, Stethoscope, Pill, Heart, Shield, Video } from 'lucide-react';

const menuItems = [
  {
    id: 'education',
    title: 'Apa Itu Diabetes Mellitus?',
    description: 'Pelajari pengertian, jenis-jenis, dan dasar-dasar diabetes mellitus',
    icon: BookOpen,
    color: 'bg-blue-500',
    href: '/materi/diabetes-mellitus'
  },
  {
    id: 'blood-sugar',
    title: 'Nilai Normal Gula Darah',
    description: 'Ketahui berapa nilai gula darah yang normal dan tidak normal',
    icon: Droplet,
    color: 'bg-red-500',
    href: '/materi/nilai-gula-darah'
  },
  {
    id: 'risk-factors',
    title: 'Faktor Risiko Diabetes',
    description: 'Kenali faktor-faktor yang meningkatkan risiko diabetes',
    icon: AlertTriangle,
    color: 'bg-orange-500',
    href: '/materi/faktor-risiko'
  },
  {
    id: 'symptoms',
    title: 'Gejala Diabetes',
    description: 'Pelajari tanda dan gejala diabetes yang perlu diwaspadai',
    icon: Stethoscope,
    color: 'bg-purple-500',
    href: '/materi/gejala'
  },
  {
    id: 'treatment',
    title: 'Penanganan Diabetes',
    description: 'Cara mengelola dan mengobati diabetes mellitus',
    icon: Pill,
    color: 'bg-green-500',
    href: '/materi/penanganan'
  },
  {
    id: 'impact',
    title: 'Dampak Diabetes',
    description: 'Pahami dampak diabetes terhadap kesehatan dan kehidupan',
    icon: Heart,
    color: 'bg-pink-500',
    href: '/materi/dampak'
  },
  {
    id: 'prevention',
    title: 'Pencegahan Diabetes',
    description: 'Tips dan cara mencegah diabetes mellitus',
    icon: Shield,
    color: 'bg-teal-500',
    href: '/materi/pencegahan'
  },
  {
    id: 'video',
    title: 'Video Edukasi',
    description: 'Tonton video animasi edukatif tentang diabetes',
    icon: Video,
    color: 'bg-indigo-500',
    href: '/materi/video'
  }
];

export default function LearningMenu() {
  return (
    <SectionContainer id="learning-menu" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Mulai Belajar Tentang Diabetes
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Pilih topik yang ingin kamu pelajari untuk memahami diabetes mellitus lebih dalam
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                <div className={`${item.color} w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  <span>Pelajari</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionContainer>
  );
}
