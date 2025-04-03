'use client'

import Spline from '@splinetool/react-spline';

import { useTranslation } from 'react-i18next'
import i18next from '@/app/i18n/i18next-config'
import Image from 'next/image'
import NewHomeHero from '@/public/images/new-home/home-hero.png'

export default function HeroHomeNew() {

    const { t } = useTranslation()
    const currentLanguage = i18next.language || 'en-US'

    return (
        <section className="min-h-screen">
            <div className="relative w-full h-screen flex items-center">
                {/* Spline容器 */}
                {/* <div className="absolute inset-0 w-full h-full">
                    <Spline 
                        // scene="https://prod.spline.design/Wa-Xmo2KATInDEzN/scene.splinecode" // robot
                        scene="https://prod.spline.design/olAQR3L0cJoJh1zU/scene.splinecode"
                        className="w-full h-full"
                        onError={(error) => {
                            console.error('Spline error:', error);
                        }}
                    />
                </div> */}
                {/* Illustration */}
                <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
                    <Image src={NewHomeHero} className="max-w-none" priority alt="Hero Illustration" />
                </div>
                
                {/* 内容容器 */}
                <div className="relative z-10 flex flex-col justify-center max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-10 2xl:px-16 h-full pt-16 sm:pt-24 md:pt-28">
                    <div className="w-full text-center sm:text-left mx-auto sm:mx-0 sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
                        {/* {process.env.NODE_ENV === 'development' && (
                            <div className="text-sm text-gray-500 mb-4">
                                Current Language: {currentLanguage}
                            </div>
                        )} */}
                        <h1 className="h1 text-4xl lg:text-6xl mb-6 sm:mb-4 font-red-hat-display font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-600 via-slate-200 to-slate-600 whitespace-pre-line" data-aos="fade-down">
                            {t('common.home.hero.title')}
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-full sm:max-w-[90%] mx-auto sm:mx-0" data-aos="fade-down" data-aos-delay="150">
                            {t('common.home.hero.description')}
                        </p>

                        {/* CTA form */}
                        <form className="mt-8 sm:mt-8" data-aos="fade-down" data-aos-delay="300">
                            <div className="flex justify-center sm:justify-start max-w-sm mx-auto sm:max-w-md sm:mx-0">
                                <a className="btn relative group overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400
                                    text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105
                                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                                    before:translate-x-[-200%] before:transition-transform before:duration-500
                                    hover:before:translate-x-[200%] hover:shadow-lg hover:shadow-purple-500/30
                                    after:absolute after:inset-0 after:border-2 after:border-white/30 after:rounded-lg after:transition-all
                                    hover:after:scale-95 hover:after:opacity-0"
                                    href="#0">
                                    <span className="relative z-10 flex items-center">
                                        {t('common.home.hero.dAppButton')}
                                        <svg className="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
