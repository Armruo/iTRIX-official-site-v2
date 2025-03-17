'use client'

import Image from 'next/image'

export default function SmartSavingCard() {
  return (
    <div className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden relative cursor-pointer">
      <div className="p-4 sm:p-6 z-[9] relative">
        {/* Header Info */}
        <div className="flex items-center gap-2 font-semibold text-sm sm:text-base text-white truncate overflow-x-hidden">
          <p>Smart Savings</p>
          <div className="flex flex-row items-center justify-center gap-1 ml-3 text-sm text-gray-200">
            Deposit ≥ $500 to earn
            <div className="flex justify-center items-center py-1 px-3 bg-yellow-400/10 rounded-full">
              <Image
                src="/images/profile/gg-icon.png"
                alt="gg"
                width={12}
                height={12}
                className="w-3 h-3 mr-[2px]"
              />
              <p className="text-sm font-semibold text-yellow-400">100</p>
            </div>
          </div>
          
          <div className="ml-auto flex gap-1 text-white/60 text-xs">
            <p>Audited by</p>
            <Image
              src="/images/profile/slowmist-logo.svg"
              alt="SlowMist"
              width={65}
              height={14}
            />
          </div>
          
          <button className="hidden sm:block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Deposit
          </button>
        </div>

        {/* Mobile Button */}
        <button className="sm:hidden w-full mt-4 text-white bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg text-sm font-semibold transition-colors">
          Deposit
        </button>

        {/* Features List */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:mt-5">
          {/* Liquidity Feature */}
          <div className="flex flex-col gap-2 mt-4 sm:mt-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/profile/feature-1.png"
                alt=""
                width={24}
                height={24}
                className="max-w-[24px]"
              />
              <div className="font-bold text-sm sm:text-base text-white">
                110% Liquidity
              </div>
            </div>
            <div className="text-sm text-gray-200">
              Enhanced fluidity for your assets.
            </div>
          </div>

          {/* Chain Support Feature */}
          <div className="flex flex-col gap-2 mt-4 sm:mt-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/profile/feature-2.png"
                alt=""
                width={24}
                height={24}
                className="max-w-[24px]"
              />
              <div className="font-bold text-sm sm:text-base text-white">
                Multiple Chain Support
              </div>
            </div>
            <div className="text-sm text-gray-200">
              Compatibility with over 16 chains across Galxe.
            </div>
          </div>

          {/* Rewards Feature */}
          <div className="flex flex-col gap-2 mt-4 sm:mt-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/profile/feature-3.png"
                alt=""
                width={24}
                height={24}
                className="max-w-[24px]"
              />
              <div className="font-bold text-sm sm:text-base text-white">
                Generous Rewards
              </div>
            </div>
            <div className="text-sm text-gray-200">
              Unlock native yield and accumulate points effortlessly.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
