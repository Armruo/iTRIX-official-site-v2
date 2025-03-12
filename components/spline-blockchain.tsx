'use client';

import { useState, useCallback } from 'react';

interface SplineSceneProps {
  className?: string;
}

export default function SplineBlockchain({ className = '' }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className="relative py-2 md:py-2">
        <div className="max-w-[1900px] mx-auto px-6 sm:px-8 lg:px-10 2xl:px-16">
            <div className={`relative w-full h-[300px] sm:h-[400px] md:h-[450px] aspect-[16/9] ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="text-xl text-gray-600 dark:text-gray-300">Loading...</div>
                </div>
            )}
            <iframe 
                src='https://my.spline.design/blockchain-23d5f4bde33a79b32616a55c752446b4/'
                frameBorder='0'
                width='100%'
                height='100%'
                onLoad={handleIframeLoad}
                className="absolute inset-0"
                title="Blockchain 3D Scene"
            />
            </div>
        </div>
    </section>
  );
}