import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import SmartSavingCard from '@/components/SmartSavingCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import UserActivities from '@/components/UserActivities'
import UserAddress from '@/components/UserAddress'
import { fetchUserProfile } from '@/lib/api'
import { Suspense } from 'react'
import React from 'react'
import HeroBg from '@/public/images/news-05.jpg'

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'View user details and activities',
}

interface UserPageProps {
  params: {
    id: string
  }
}

async function UserContent({ userId }: { userId: string }) {
  const userData = await fetchUserProfile(userId);

  return (
    <>
      {/* User Basic Info */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <div className="relative inline-flex mb-4">
          {/* User Avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={userData.avatar}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* User Address */}
        <UserAddress address={userData.address} />
      </div>

      {/* Smart Saving Card */}
      <div className="max-w-4xl mx-auto mb-12">
        <SmartSavingCard />
      </div>

      {/* User Statistics */}
      <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
        <div className="relative flex flex-col items-center">
          <h4 className="h4 mb-2">{userData.stats.activitiesCount}</h4>
          <p className="text-lg text-gray-400">Activities</p>
        </div>
        <div className="relative flex flex-col items-center">
          <h4 className="h4 mb-2">{userData.stats.badgesCount}</h4>
          <p className="text-lg text-gray-400">Badges</p>
        </div>
        <div className="relative flex flex-col items-center">
          <h4 className="h4 mb-2">{userData.stats.contributionScore}</h4>
          <p className="text-lg text-gray-400">Contribution Score</p>
        </div>
      </div>

      {/* Activity History */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="h3 mb-6">Activity History</h3>
        <div className="border rounded-lg">
          <UserActivities activities={userData.activities} />
        </div>
      </div>
    </>
  );
}

export default function UserPage({ params }: UserPageProps) {
  if (!params.id) {
    notFound()
  }

  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width={1440} height={577} priority alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <Suspense fallback={<LoadingSpinner />}>
            <UserContent userId={params.id} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
