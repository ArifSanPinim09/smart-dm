'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, Activity, AlertTriangle, AlertCircle, Stethoscope, MessageCircle, Shield, Video } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Beranda', href: '#beranda' },
  { icon: BookOpen, label: 'Edukasi DM', href: '#edukasi' },
  { icon: Activity, label: 'Nilai Normal', href: '#nilai-normal' },
  { icon: AlertTriangle, label: 'Faktor Risiko', href: '#faktor-risiko' },
  { icon: AlertCircle, label: 'Tanda & Gejala', href: '#tanda-gejala' },
  { icon: Stethoscope, label: 'Penanganan', href: '#penanganan' },
  { icon: MessageCircle, label: 'Dampak', href: '#dampak' },
  { icon: Shield, label: 'Pencegahan', href: '#pencegahan' },
  { icon: Video, label: 'Video Edukasi', href: '#video' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <a 
                href="#beranda" 
                className="text-xl sm:text-2xl font-bold text-blue-500 hover:text-blue-600 transition-colors"
                onClick={handleMenuClick}
              >
                SMART DM
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition-all"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Tablet Menu - Icon Only */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-center p-2.5 text-slate-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                  title={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-gray-100 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={handleMenuClick}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-white shadow-2xl overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="flex items-center gap-3 px-4 py-4 text-base font-medium text-slate-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all active:scale-95"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
