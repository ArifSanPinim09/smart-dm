import SimpleNavbar from './SimpleNavbar';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface DetailTemplateProps {
  backHref: string;
  title: string;
  content: React.ReactNode;
  tip?: string;
  bgColor?: string;
  borderColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function DetailTemplate({
  backHref,
  title,
  content,
  tip,
  bgColor = 'bg-blue-50',
  borderColor = 'border-blue-500',
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-blue-600'
}: DetailTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href={backHref} 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
        </div>

        <SectionContainer>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {title}
              </h1>
            </div>

            <div className={`${bgColor} rounded-xl p-8 border-l-4 ${borderColor}`}>
              {content}
            </div>

            {tip && (
              <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl p-6 text-white`}>
                <p className="text-lg leading-relaxed">
                  <span className="text-2xl mr-2">👉</span>
                  <strong>{tip}</strong>
                </p>
              </div>
            )}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
