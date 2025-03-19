import Link from 'next/link'
import Image from 'next/image'
import Customers01 from '@/public/images/feature-01.png'
import Customers02 from '@/public/images/feature-02.png'
import Customers03 from '@/public/images/feature-03.png'
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
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 via-slate-200 to-slate-200/60 pb-6">
              Intelligent Voice Cloning</h1>
              {/* Rings illustration */}
              <div className="inline-flex items-center justify-center relative">
                {/* Particles animation */}
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  <canvas data-particle-animation data-particle-quantity="10"></canvas>
                </div>
                <div className="inline-flex [mask-image:_radial-gradient(circle_at_bottom,transparent_15%,black_70%)]">
                  <Image src={AboutIllustration} width={446} height={446} alt="About illustration" />
                </div>
                <Image className="absolute mt-[30%] drop-shadow-lg animate-float" src={Icon} width={72} height={72} alt="About icon" />
              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
