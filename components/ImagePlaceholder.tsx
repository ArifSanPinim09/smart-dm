import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  text: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({ 
  text, 
  aspectRatio = "aspect-video",
  className = ""
}: ImagePlaceholderProps) {
  return (
    <div className={`
      bg-gradient-to-br from-blue-50 to-green-50
      ${aspectRatio}
      rounded-xl
      flex items-center justify-center
      border-2 border-dashed border-gray-300
      overflow-hidden
      ${className}
    `}>
      <div className="text-center p-4">
        <div className="text-gray-400 mb-2">
          <ImageIcon className="w-12 h-12 mx-auto" />
        </div>
        <span className="text-sm text-gray-500 font-medium line-clamp-2">{text}</span>
      </div>
    </div>
  );
}
