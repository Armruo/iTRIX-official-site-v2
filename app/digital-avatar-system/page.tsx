export const metadata = {
  title: 'Digital Avatar System - ITRIX',
  description: 'Digital Avatar System by ITRIX',
}

import PageIllustration from '@/components/page-illustration'
import Hero from './hero'
import Content from './content'
import CoreValues from '@/components/core-values'

export default function DigitalAvatarSystem() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>    
      <Hero />
      <Content />
      <CoreValues />
    </>
  )
}
