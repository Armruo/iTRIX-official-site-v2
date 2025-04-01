'use client'

import { useTranslation } from "react-i18next"

export default function Content() {

  const { t } = useTranslation()

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Celebrities */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    {t('common.digitalAvatarSystem.items.0.title')}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('common.digitalAvatarSystem.items.0.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Industry KOLs */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    {t('common.digitalAvatarSystem.items.1.title')}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('common.digitalAvatarSystem.items.1.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Creators */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    {t('common.digitalAvatarSystem.items.2.title')}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('common.digitalAvatarSystem.items.2.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Brands */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    {t('common.digitalAvatarSystem.items.3.title')}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('common.digitalAvatarSystem.items.3.desc')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
