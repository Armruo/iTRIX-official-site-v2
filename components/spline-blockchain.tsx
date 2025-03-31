'use client';

import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  className?: string;
}

export default function SplineBlockchain({ className = '' }: SplineSceneProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0">
        <Spline 
          // scene="https://prod.spline.design/PgI0GNAU0j2DZX2J/scene.splinecode" // blockchain
          // scene='https://prod.spline.design/Wa-Xmo2KATInDEzN/scene.splinecode' // robot
          scene='https://prod.spline.design/QhpfwhcoKGFv2I56/scene.splinecode'
          className="w-full h-full"
        />
      </div>
    </div>
  );
}