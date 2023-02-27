import React from 'react';
import { learnings } from '../../Assets/index';
import {ArrowRightIcon} from '@heroicons/react/24/solid'

export const Learning = () => {
  return (
    <>
    <div className='h-72  bg-blue-600 w-full text-white'>
      <div className=''>
      <img src={learnings} alt='Learning'   className="h-60 mx-auto items-center"/>
      </div>
      <div>
      <div>Technopedia for your Mastermind</div>
      <div>
        <p>A curated interactive space for aspiring programmers to learn and master their coding skills.</p>
      </div>
      </div>
      <div className='mx-auto'>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Start Learning For Free <ArrowRightIcon />
  </span>
</button>
      </div>
    </div>
    </>
  )
}
