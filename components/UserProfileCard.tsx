'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface UserProfileCardProps {
  userId: string
  username?: string
  avatar: string
}

export default function UserProfileCard({ userId, username = 'Anonymous', avatar }: UserProfileCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden mb-8">
      <div className="z-[9] py-8 max-sm:py-5 relative">
        <div className="flex items-start justify-between max-sm:flex-col max-sm:items-start">
          {/* Left Section: Avatar and User Info */}
          <div className="flex items-start">
            {/* Avatar */}
            <div className="w-[74px] h-[74px] relative max-sm:w-[52px] max-sm:h-[52px]">
              <div className="rounded-full overflow-hidden min-w-[52px]">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-[72px] h-[72px] rounded-full"
                />
              </div>
            </div>
            
            {/* User Info */}
            <div className="ml-6 max-sm:ml-5 flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <div className="text-2xl max-sm:text-lg font-bold">{username}</div>
                
                {/* Level Badge */}
                <div className="hidden md:block">
                  <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-[6px] py-[6px] px-[10px] ml-3">
                    <Image
                      src="/images/profile/level-icon.png"
                      alt="Level"
                      width={22}
                      height={22}
                    />
                    <span className="text-base font-semibold ml-2">Lv3</span>
                  </div>
                </div>

                {/* Points Badge */}
                <div className="hidden md:flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-[6px] py-[6px] px-[10px] ml-3 cursor-pointer">
                  <Image
                    src="/images/profile/gg-icon.png"
                    alt="Points"
                    width={22}
                    height={22}
                  />
                  <span className="text-base font-semibold ml-2">35081</span>
                  <span className="text-xs text-gray-500 ml-2 cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap">
                    Exchange for rewards
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 items-center">
                {['twitter', 'github', 'discord', 'telegram'].map((platform) => (
                  <Link
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <Image
                      src={`/images/profile/${platform}-icon.png`}
                      alt={platform}
                      width={24}
                      height={24}
                      className="max-sm:w-4 max-sm:h-4"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Stats */}
          <div className="flex gap-8 items-start mt-0 max-sm:mt-4 max-sm:w-full">
            {[
              { title: 'Referral Code', value: '9CVDSK4S' },
              // { title: 'Passport', value: 'Unverified' },
              // { title: 'Loyalty Points', value: 'in 0 spaces' }
            ].map((stat, index) => (
              <div key={stat.title} className="flex items-start cursor-pointer gap-2 flex-col group">
                <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.title}
                </div>
                <div className="flex text-gray-500 text-sm items-center whitespace-nowrap">
                  {stat.value}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="ml-2 cursor-pointer hover:text-gray-600"
                    onClick={() => handleCopy('swapFpHZwjELNnjvThjajtiVmkz3yPQEHjLtka2fwHW')}
                  >
                    {copied ? (
                      <path
                        fill="currentColor"
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                      />
                    ) : (
                      <path
                        fill="currentColor"
                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                      />
                    )}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
