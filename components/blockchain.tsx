import Image from 'next/image'
import SplineBlockchain from './spline-blockchain';
import Spline from '@splinetool/react-spline';

export default function HeroBlockChain() {
  return (
    <section>
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6">
        <div>
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            

            {/* Right 3D Scene */}
            <div className="md:col-span-6">
              <SplineBlockchain className="w-full" />
            </div>

            {/* Left 3D Scene */}
            <div className="md:col-span-6">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <div className="absolute inset-0">
                  <Spline
                    scene="https://prod.spline.design/p26eigJ-vKJJlRwg/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}