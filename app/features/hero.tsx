import Image from 'next/image'
import HeroBg from '@/public/images/news-05.jpg'
import HeroImage from '@/public/images/digital-avatar/avatar-bg.png'

export default function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width={1440} height={577} priority alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">Features</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
              Discover the powerful capabilities of ITRIX
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
