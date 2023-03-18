import React from 'react';
import {motion} from 'framer-motion'

export const Testimonials = () => {
  return (
    <>
      <div className=" pt-3">
        <div className="text-2xl text-center font-bold mb-2 px-5">
          Discover and Connect with Alumni
        </div>
        <div className="text-2xl text-center px-5">
          Who have walked the same path as you
        </div>
        <div className="text-2xl text-center font-sans pt-3 px-1 my-5">
          <b>Creating Impact</b> with 100+ Professionals & Counting
        </div>

        <div className=" flex flex-col lg:flex-row justify-center gap-5 lg:gap-14 pb-10 pt-5  px-3">
          <motion.div
           transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            class=" bg-gradient-to-r from-astros to-chelesa text-white max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <div class="relative w-10 h-10 overflow-hidden rounded-full dark:bg-gray-600 ">
                <svg
                  class="absolute w-12 h-12 -left-1 text-white "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal  dark:text-gray-400">
              Getting to learn System Design topics from people having worked at
              top companies that face a large scale, getting to learn algorithms
              from people who have been at ICPC World Finals is an altogether
              different experience.
            </p>
            <a
              href="/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
             transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
             transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          </div>
      </div>
    </>
  );
}
