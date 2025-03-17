'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function DropdownProfile({ align }: {
  align?: 'left' | 'right'
}) {
  return (
    <Popover className="relative inline-flex">
      <Popover.Button className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
        <span className="sr-only">Filter</span><wbr />
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className={`origin-top-right z-10 absolute top-full min-w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}>
          <ul>
            <li>
              <button className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex py-1 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700/20">
                Today
              </button>
            </li>
            <li>
              <button className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex py-1 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700/20">
                Last 7 Days
              </button>
            </li>
            <li>
              <button className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex py-1 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700/20">
                Last Month
              </button>
            </li>
            <li>
              <button className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex py-1 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700/20">
                Last 12 Months
              </button>
            </li>
            <li>
              <button className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex py-1 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700/20">
                All Time
              </button>
            </li>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}