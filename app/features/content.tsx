import Link from 'next/link'
import Image from 'next/image'
import Customers01 from '@/public/images/feature-01.png'
import Customers02 from '@/public/images/feature-02.png'
import Customers03 from '@/public/images/feature-03.png'
import Feature04 from '@/public/images/feature-04.png'
import Feature05 from '@/public/images/feature-05.png'
import AboutIllustration from '@/public/images/about-illustration.svg'
import Icon from '@/public/images/about-icon.svg'

export default function Content() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Line */}
          <div className="hidden md:block absolute left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200" aria-hidden="true"></div>

          {/* Customers */}
          <div className="max-w-6xl mx-auto space-y-20">

            {/* 1st Customer */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  Appearance · 
                  Hyper-realistic Restoration
                </h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                Advanced algorithms deeply learn and finely replicate facial features, skin textures, and hair details, faithfully restoring lifelike appearance.</p>

              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Customers01} width={560} height={230} alt="Customer 01" />
                </div>
              </div>

            </div>

            {/* 2nd Customer */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                Motion · 
                Natural Fluidity
                </h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                Cutting-edge motion capture precisely synchronizes real movements, vivid and natural.</p>

              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Customers02} width={540} height={405} alt="Customer 02" />
                </div>
              </div>

            </div>

            {/* 3rd Customer */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                Visuals · Refined Authenticity
                </h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                Real-time rendering accurately presents detailed lighting and environments, delivering immersive experiences.</p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Customers03} width={540} height={405} alt="Customer 03" />
                </div>
              </div>

            </div>
          </div>

        

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-10 md:pt-40">
              {/* Hero content */}
              <div className="text-center">
                {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The folks behind the product</div> */}
                <h2 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 via-slate-200 to-slate-200/60 pb-6">
                Intelligent Voice Cloning</h2>
                {/* Rings illustration */}
                <div className="inline-flex items-center justify-center relative">
                  {/* Particles animation */}
                  <div className="absolute inset-0 -z-10" aria-hidden="true">
                    <canvas data-particle-animation data-particle-quantity="10"></canvas>
                  </div>
                  <div className="inline-flex [mask-image:_radial_gradient(circle_at_bottom,transparent_15%,black_70%)]">
                    <Image src={AboutIllustration} width={446} height={446} alt="About illustration" />
                  </div>
                  <Image className="absolute mt-[30%] drop-shadow-lg animate-float" src={Icon} width={72} height={72} alt="About icon" />
                </div>
              </div>
            </div>
          </div>


          {/* Voice Features Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Voice Cloning Card */}
              <div className="relative bg-gradient-to-tr from-slate-800 to-slate-700/50 p-6 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300" data-aos="fade-right">
                <div className="absolute right-0 top-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl transform group-hover:scale-150 group-hover:opacity-70 transition-all duration-500"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="inline-flex p-2 bg-purple-500/10 rounded-lg">
                      <svg className="w-6 h-6 fill-purple-500" viewBox="0 0 24 24">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                      </svg>
                    </div>
                    <h3 className="h4 text-purple-500">Voice · Precision Cloning</h3>
                  </div>
                  <p className="text-slate-400">Advanced acoustic algorithms precisely replicate voice, authentically restoring vocal charm.</p>
                  <div className="mt-4">
                    <div className="w-full bg-slate-700/30 h-1 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-purple-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Language Card */}
              <div className="relative bg-gradient-to-tr from-slate-800 to-slate-700/50 p-6 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300" data-aos="fade-left">
                <div className="absolute right-0 top-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl transform group-hover:scale-150 group-hover:opacity-70 transition-all duration-500"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="inline-flex p-2 bg-blue-500/10 rounded-lg">
                      <svg className="w-6 h-6 fill-blue-500" viewBox="0 0 24 24">
                        <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" />
                      </svg>
                    </div>
                    <h3 className="h4 text-blue-500">Language · Seamless Translation</h3>
                  </div>
                  <p className="text-slate-400">Intelligent real-time language switching breaks barriers, empowering global interactions.</p>
                  <div className="mt-4 flex space-x-2">
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded">EN</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded animate-pulse">中文</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded">日本語</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded">한국어</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded">Latina</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 via-slate-200 to-slate-200/60 pb-6">
                Intelligent Copywriting</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
                  
                  AI generates precise, scenario-based copywriting with efficient refinement, achieving perfect expression.
                </p>
              </div>

              {/* Feature 04 Image with Effects */}
              <div className="relative mt-12 md:mt-20" data-aos="zoom-y-out">
                <div className="relative flex justify-center">
                  {/* Background glow effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-96 h-96 bg-purple-500/30 rounded-full blur-3xl opacity-50"></div>
                  </div>
                  
                  {/* Image container with perspective effect */}
                  <div className="relative perspective-1000">
                    <div className="transform hover:rotate-y-12 transition-transform duration-700 ease-in-out">
                      <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        
                        {/* Main image */}
                        <div className="relative">
                          <Image
                            src={Feature04}
                            width={800}
                            height={600}
                            alt="Intelligent Copywriting"
                            className="rounded-2xl shadow-2xl"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 via-slate-200 to-slate-200/60 pb-6">
                Intelligent Editing</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
                AI-powered Theme Matching, One-click Material Editing, Auto-generation of Multi-version Videos, Easily Meets Multi-scenario Marketing, Maximizes Creative Efficiency
                </p>
              </div>

              {/* Feature 05 Image with Effects */}
              <div className="relative mt-12 md:mt-20" data-aos="zoom-y-out">
                <div className="relative flex justify-center">
                  {/* Background glow effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-96 h-96 bg-blue-500/30 rounded-full blur-3xl opacity-50"></div>
                  </div>
                  
                  {/* Image container with floating effect */}
                  <div className="relative">
                    <div className="animate-float-slow">
                      <div className="relative">
                        {/* Decorative frame */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        
                        {/* Main image */}
                        <div className="relative">
                          <Image
                            src={Feature05}
                            width={800}
                            height={600}
                            alt="Intelligent Editing"
                            className="rounded-2xl shadow-2xl"
                          />
                          {/* Overlay pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
