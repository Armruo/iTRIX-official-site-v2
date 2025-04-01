export const metadata = {
  title: 'About - ITRIX',
  description: 'Page description',
}

import Hero from '@/components/team/hero-about'
import Stats from '@/components/team/stats-02'
import Content from './content'
import TeamInfo from '@/components/team/team'
import TeamMembers from '@/components/team/team-members'
import Clients from '@/components/team/clients-02'
import Cta from '@/components/team/cta-02'

export default function Team() {
  return (
    <>
      <Hero />
      <Stats />
      <Content />
      <TeamInfo />
      <TeamMembers />
      {/* <Clients /> */}
      <Cta />
    </>
  )
}
