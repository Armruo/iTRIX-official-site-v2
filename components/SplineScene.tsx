'use client';

import { useState } from 'react';

interface SplineSceneProps {
  url: string;
  className?: string;
}

export default function SplineScene({ url, className = "w-full h-[600px]" }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      )}
      <iframe 
        src={url}
        frameBorder='0'
        width='100%'
        height='100%'
        onLoad={handleIframeLoad}
        className="absolute inset-0"
      />
    </div>
  );
}
