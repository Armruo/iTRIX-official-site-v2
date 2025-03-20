import Link from 'next/link'
import Image from 'next/image'
import HeroBg from '@/public/images/hero-bg-handcoin-resize2.jpg'

export default function HeroUseCases() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width={1440} height={577} priority alt="UseCases" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">Use Cases</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
            ITRIX demonstrates its technological strengths across various application scenarios, showcasing its diverse commercial value.</p>
            {/* <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link className="btn text-white bg-teal-500 hover:bg-teal-400 ml-3" href="/contact">Explorer dApp</Link>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  )
}