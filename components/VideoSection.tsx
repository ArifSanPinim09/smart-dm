'use client';

import { useState } from 'react';
import SectionContainer from './SectionContainer';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function VideoSection() {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <SectionContainer id="video" className="bg-gray-50">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Video Edukasi Animasi
          </h2>
          <h3 className="text-xl font-semibold text-slate-700">
            Kenali Diabetes Mellitus Sejak Dini – SMART DM
          </h3>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tonton video animasi edukatif untuk memahami diabetes dengan lebih mudah dan menyenangkan
          </p>
        </div>

        {/* YouTube Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zFmJxgdY_9M"
              title="Video Edukasi Diabetes Mellitus - SMART DM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>


        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
          Video ini menjelaskan diabetes mellitus secara visual agar lebih mudah dipahami oleh remaja dan masyarakat umum.
        </p>
      </div>
    </SectionContainer>
  );
}
