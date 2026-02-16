'use client';

import Image from 'next/image';
import { useState } from 'react';
import SectionContainer from './SectionContainer';

export default function BloodSugarTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      emoji: '👦👩',
      label: 'Remaja',
      image: 'remaja1.jpg',
      title: 'Nilai Normal Gula Darah Remaja',
      values: [
        { label: 'Gula Darah Puasa (GDP)', value: '70–100 mg/dL' },
        { label: 'Gula Darah Sewaktu (GDS)', value: '<140 mg/dL' },
        { label: 'HbA1c', value: '<5,7%' },
      ],
      info: '💡 Menjaga gula darah tetap normal sejak remaja dapat mencegah diabetes di usia dewasa.',
      infoType: 'blue',
    },
    {
      emoji: '🧑',
      label: 'Dewasa',
      image: 'remaja1.jpg',
      title: 'Nilai Normal Gula Darah Dewasa',
      values: [
        { label: 'Gula Darah Puasa (GDP)', value: '70–100 mg/dL' },
        { label: 'Gula Darah 2 Jam Setelah Makan (GD2PP)', value: '<140 mg/dL' },
        { label: 'HbA1c', value: '<5,7%' },
      ],
      info: '💡 Pola makan sehat dan aktivitas fisik teratur berperan penting dalam menjaga kadar gula darah.',
      infoType: 'blue',
    },
    {
      emoji: '👴👵',
      label: 'Lansia',
      image: 'remaja1.jpg',
      title: 'Target Gula Darah Lansia',
      subtitle:
        'Pada lansia, target gula darah dibuat sedikit lebih longgar untuk mencegah hipoglikemia.',
      values: [
        { label: 'Gula Darah Puasa (GDP)', value: '80–130 mg/dL' },
        { label: 'Gula Darah 2 Jam Setelah Makan (GD2PP)', value: '<180 mg/dL' },
        { label: 'HbA1c', value: '7–7,5% (disesuaikan kondisi kesehatan)' },
      ],
      info: '⚠️ Target gula darah lansia berbeda karena perubahan fungsi tubuh seiring bertambahnya usia.',
      infoType: 'amber',
    },
  ];

  return (
    <SectionContainer id="nilai-normal">
      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Berapa Nilai Normal Gula Darah?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nilai gula darah menunjukkan seberapa baik tubuh mengatur kadar glukosa sebagai sumber energi. Setiap kelompok usia memiliki batas nilai normal yang berbeda, sehingga penting untuk mengetahuinya agar dapat melakukan pencegahan diabetes sejak dini.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/berapanormalnilaiguladarah.jpg"
                alt="Nilai Normal Gula Darah"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b-2 border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 font-semibold transition-all rounded-t-lg ${
                activeTab === index
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-blue-500 hover:bg-gray-50'
              }`}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  {tabs[activeTab].title}
                </h3>
                {tabs[activeTab].subtitle && (
                  <p className="text-base text-slate-600">{tabs[activeTab].subtitle}</p>
                )}
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                {tabs[activeTab].values.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="font-medium text-slate-700 text-sm md:text-base">{item.label}</span>
                    <span className="font-bold text-blue-600 text-base md:text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className={`p-5 rounded-xl border-2 ${
                tabs[activeTab].infoType === 'blue' 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'bg-amber-50 border-amber-200'
              }`}>
                <p className="text-base text-slate-700 leading-relaxed">{tabs[activeTab].info}</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-white">
                <Image
                  src={`/images/${tabs[activeTab].image}`}
                  alt={tabs[activeTab].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
