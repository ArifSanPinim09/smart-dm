import MateriNavigation from '@/components/MateriNavigation';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-white">
      <MateriNavigation />
      <main>
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
