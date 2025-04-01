'use client'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import ThemeToggle from './theme-toggle'
import MobileMenu from './mobile-menu'
import ConnectWallet from '@/components/connect-wallet';
import LanguageSwitcher from '@/components/language-switcher';

import { useTranslation } from 'react-i18next'

export default function Header() {

  const { t } = useTranslation()

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-[1900px] mx-auto px-6 sm:px-6 lg:px-8 2xl:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-5">
            <Link href="/" className="block" aria-label="ITRIX">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  {t('common.navigation.about')}
                </Link>
              </li>
              
              <li>
                <Link
                  href="/digital-avatar-system"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  {t('common.navigation.digitalAvatarSystem')}
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  {t('common.navigation.features')}
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  {t('common.navigation.roadmap')}
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  {t('common.navigation.useCases')}
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title={t('common.navigation.resources')}>
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t('common.navigation.blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t('common.navigation.docs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t('common.navigation.team')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t('common.navigation.faq')}  
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user/3HhCohCQhyEMUcZRZqkVmasFsedAJjSFyRRMhVPHW2Sz"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    User Account(临时)
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop language and theme switches */}
            <div className="flex items-center ml-3">
              <LanguageSwitcher />
              <ThemeToggle className="ml-3" />
            </div>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li className="ml-6">
                <ConnectWallet size="small" />
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
