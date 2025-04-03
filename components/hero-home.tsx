import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import SplineScene from './SplineScene';

import Spline from '@splinetool/react-spline';


export default function HeroHome() {
  return (
    <section>
      <div className="max-w-[1900px] mx-auto px-6 sm:px-8 lg:px-10 2xl:px-16">
        <div className="pt-32 pb-0 md:pt-40 md:pb-0">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-6 lg:col-span-6 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-600 via-slate-200 to-slate-600" data-aos="fade-down">
                <span className="block">Real-time Influence</span>
                <span className="block">Anywhere, Anytime</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              ITRIX is a next-generation intelligent avatar social platform built on Web 3.0 and AI large-model technology. It deeply learns user social behavior data, precisely creating personalized, highly realistic AI avatars for cross-scenario intelligent interactions. Through decentralized incentives, ITRIX empowers creators and users to enjoy value rewards from content creation and platform engagement.</p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex justify-start max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <a className="btn relative group overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400
                    text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                    before:translate-x-[-200%] before:transition-transform before:duration-500
                    hover:before:translate-x-[200%] hover:shadow-lg hover:shadow-purple-500/30
                    after:absolute after:inset-0 after:border-2 after:border-white/30 after:rounded-lg after:transition-all
                    hover:after:scale-95 hover:after:opacity-0"
                    href="#0">
                    <span className="relative z-10 flex items-center">
                      Explorer dApp
                      <svg className="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </a>
                </div>
              </form>
            </div>

            {/* 3D Scene */}
            <div className="md:col-span-6 lg:col-span-6">
              <div className="relative w-full h-[700px] md:h-[800px]">
                <div className="absolute inset-0">
                  <Spline 
                    // scene="https://prod.spline.design/Wa-Xmo2KATInDEzN/scene.splinecode" // robot
                    scene="https://prod.spline.design/olAQR3L0cJoJh1zU/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
