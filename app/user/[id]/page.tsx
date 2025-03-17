import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import SmartSavingCard from '@/components/SmartSavingCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import UserActivities from '@/components/UserActivities'
import UserProfileCard from '@/components/UserProfileCard'
import { fetchUserProfile } from '@/lib/api'
import { Suspense } from 'react'
import React from 'react'
import HeroBg from '@/public/images/news-05.jpg'

import Datepicker from '@/components/datepicker'
import AnalyticsCard01 from '@/components/user/analytics/analytics-card-01'
import AnalyticsCard02 from '@/components/user/analytics/analytics-card-02'
import AnalyticsCard03 from '@/components/user/analytics/analytics-card-03'
import AnalyticsCard04 from '@/components/user/analytics/analytics-card-04'
import AnalyticsCard05 from '@/components/user/analytics/analytics-card-05'
import AnalyticsCard06 from '@/components/user/analytics/analytics-card-06'
import AnalyticsCard07 from '@/components/user/analytics/analytics-card-07'
import AnalyticsCard08 from '@/components/user/analytics/analytics-card-08'
import AnalyticsCard09 from '@/components/user/analytics/analytics-card-09'
import AnalyticsCard10 from '@/components/user/analytics/analytics-card-10'
import AnalyticsCard11 from '@/components/user/analytics/analytics-card-11'
import DashboardCard01 from '@/components/user/analytics/dashboard-card-01'
import DashboardCard02 from '@/components/user/analytics/dashboard-card-02'
import DashboardCard03 from '@/components/user/analytics/dashboard-card-03'
import Orders from '@/components/user/transaction/order-content'

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'View user details and activities',
}

interface UserPageProps {
  params: {
    id: string
  }
}

// 格式化用户名显示：前6个字符 + ... + 后4个字符
function formatUsername(username: string) {
  if (username.length <= 10) return username;
  return `${username.slice(0, 6)}...${username.slice(-4)}`;
}

async function UserContent({ userId }: { userId: string }) {
  const userData = await fetchUserProfile(userId);

  return (
    <div className="max-w-[1900px] mx-auto px-6 sm:px-8 lg:px-10 2xl:px-16">
      {/* User Profile Card */}
      <UserProfileCard
        userId={userData.id}
        username={formatUsername(userData.id)}
        avatar={userData.avatar}
      />

      {/* Smart Saving Card */}
      <SmartSavingCard />

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">

        {/* Line chart (Acme Plus) */}
        <DashboardCard01 />
        {/* Line chart (Acme Advanced) */}
        <DashboardCard02 />
        {/* Line chart (Acme Professional) */}
        <DashboardCard03 />

        {/* Stacked bar chart (Acquisition Channels) */}
        <AnalyticsCard03 />
        {/* Horizontal bar chart (Audience Overview) */}
        <AnalyticsCard04 />

        {/* Line chart (Analytics) */}
        {/* <AnalyticsCard01 /> */}
        {/*  Line chart (Active Users Right Now) */}
        {/* <AnalyticsCard02 /> */}
        
        {/* Report card (Top Channels) */}
        {/* <AnalyticsCard05 /> */}
        {/* Report card (Top Pages) */}
        {/* <AnalyticsCard06 /> */}
        {/* Report card (Top Countries) */}
        {/* <AnalyticsCard07 /> */}
        
        {/* Doughnut chart (Sessions By Device) */}
        {/* <AnalyticsCard08 /> */}
        {/* Doughnut chart (Visit By Age Category) */}
        {/* <AnalyticsCard09 /> */}
        {/* Polar chart (Sessions By Gender) */}
        {/* <AnalyticsCard10 /> */}

        {/* Table (Top Products) */}
        <AnalyticsCard11 />

        {/* <Orders /> */}

      </div>

    </div>
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <Suspense fallback={<LoadingSpinner />}>
            <UserContent userId={params.id} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
