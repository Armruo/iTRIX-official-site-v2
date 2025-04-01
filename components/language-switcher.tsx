'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { languages } from '@/app/i18n/language'
import { useTranslation } from 'react-i18next'
import i18next from '@/app/i18n/i18next-config'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLanguage = languages.find(lang => lang.value === i18n.language) || languages[0]

  const handleLanguageChange = (langValue: string) => {
    // 设置 cookie
    document.cookie = `locale=${langValue};path=/;max-age=31536000`
    // 切换语言
    i18next.changeLanguage(langValue)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
          {currentLanguage.name}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.filter(lang => lang.supported).map((language) => (
              <Menu.Item key={language.value}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(language.value)}
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span>{language.name}</span>
                      <span className="text-gray-400 text-xs">{language.example}</span>
                    </div>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
