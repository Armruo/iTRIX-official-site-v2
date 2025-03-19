export const metadata = {
  title: 'Use Cases - ITRIX',
  description: 'Page description',
}

import Hero from '@/components/hero-use-cases'
import Clients from '@/components/clients'
import Video from '@/components/use-cases-video'
import Carousel from '@/components/use-cases-carousel'
import Circles from '@/components/use-cases-circles'
import Cta from '@/components/cta'

export default function UseCases() {
  return (
    <>
      <Hero />
      <Clients />
      <Video />
      <Carousel />
      <Circles />
      <Cta />
    </>
  )
}