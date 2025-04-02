export const metadata = {
  title: 'Home - ITRIX',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import HeroNew from '@/components/hero-home-new'
import Stats from '@/components/stats'
import Carousel from '@/components/carousel'
import Tabs from '@/components/tabs'
import Process from '@/components/process'
import HeroBlockChain from '@/components/blockchain'
import PricingTables from '@/components/pricing-tables'
import UseCasesBlocks from '@/components/use-cases-blocks'
import SplineBlockchain from '@/components/spline-blockchain'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'
import FeaturesAnimation from '@/components/features-animation'
import Clients from '@/components/hero-client'
import NewHomePage from '@/components/newHome/temp-next'

export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      
      <HeroNew />
      <Clients />
      {/* <SplineBlockchain /> */}
      <HeroBlockChain />
      <Carousel />
      <FeaturesAnimation />
      {/* <Tabs /> */}
      {/* <Process /> */}
      {/* <PricingTables /> */}
      {/* <UseCasesBlocks /> */}
      {/* <FeaturesBlocks /> */}
      {/* <HowToUse /> */}
      <Cta />
      <NewHomePage />
    </>
  )
}
