import Image from 'next/image'
import React from 'react'
import HeroBg from '@/public/images/news-05.jpg'
import { roadmapData } from '@/content/roadmap/roadmap-data'
import { RoadmapPhase, RoadmapStep } from '@/types/roadmap'

const StatusBadge = ({ status }: { status: RoadmapPhase['status'] }) => {
  const statusStyles = {
    completed: 'bg-green-500/20 text-green-700',
    'working on': 'bg-blue-500/20 text-blue-700',
    planned: 'bg-yellow-500/20 text-yellow-700'
  }

  return (
    <div className="flex flex-nowrap items-center space-x-2 mb-6">
      <div>
        <div className={`text-xs inline-flex font-medium ${statusStyles[status]} rounded-full text-center px-2.5 py-1`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
    </div>
  )
}

const StepIcon = ({ finished }: { finished: boolean }) => {
  if (finished) {
    return (
      <div className="absolute left-0 rounded-full bg-violet-500">
        <svg className="fill-current text-white" width="20" height="20" viewBox="0 0 20 20">
          <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="absolute left-0 rounded-full bg-white dark:bg-gray-900">
      <svg className="fill-current text-gray-200 dark:text-gray-700" width="20" height="20" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    </div>
  )
}

const RoadmapStep = ({ step, isLast }: { step: RoadmapStep; isLast: boolean }) => (
  <li className="relative py-2">
    <div className="flex items-center mb-1">
      {!isLast && (
        <div
          className="absolute left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start ml-2.5 -translate-x-1/2 translate-y-3"
          aria-hidden="true"
        ></div>
      )}
      <StepIcon finished={step.finished} />
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">{step.title}</h3>
    </div>
    <div className="pl-9">{step.desc}</div>
  </li>
)

const RoadmapPhase = ({ phase }: { phase: RoadmapPhase }) => (
  <article className="pt-6">
    <div className="xl:flex">
      <div className="w-32 shrink-0">
        <h2 className="text-xl leading-snug font-bold text-gray-800 dark:text-gray-100 xl:leading-7 mb-4 xl:mb-0">
          {phase.phase}
        </h2>
      </div>
      <div className="grow pb-6 border-b border-gray-200 dark:border-gray-700/60">
        <header>
          <StatusBadge status={phase.status} />
        </header>
        <ul className="-my-2">
          {phase.steps.map((step, index) => (
            <RoadmapStep
              key={step.title}
              step={step}
              isLast={index === phase.steps.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  </article>
)

export default function HeroRoadmap() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={HeroBg}
          width={1440}
          height={577}
          priority
          alt="About"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-6 md:pt-40 md:pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
              Roadmap
            </h1>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-8 md:pb-20">
          <div>
            <div className="relative flex items-start">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
                <div className="max-w-3xl m-auto">
                  <div className="xl:-translate-x-16">
                    {roadmapData.map((phase) => (
                      <RoadmapPhase key={phase.phase} phase={phase} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}