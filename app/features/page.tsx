export const metadata = {
  title: 'Features - ITRIX',
  description: 'Explore ITRIX Features',
}

import PageIllustration from '@/components/page-illustration'
import Hero from './hero'
import Content from './content'

export default function Features() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>    
      <Hero />
      <Content />
    </>
  )
}
