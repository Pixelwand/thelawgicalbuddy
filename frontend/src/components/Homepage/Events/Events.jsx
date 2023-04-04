import React from 'react';
import { event } from '../../Assets/index';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

export const Events = () => {
  return (
    <>
      <div className=" mb-10 text-white pb-10 pt-5">
        <div className="text-center font-sans text-xl mb-10">
          <div>Upskill with The Lawgical Buddy</div>
          <div>Learn from the best in the industry</div>
          <div>Get access to the best resources</div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 gap-6 px-4">
          <motion.div
            transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            class="bg-gradient-to-r from-blue-700 to-chelesa text-white max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="/">
              <img class="rounded-t-lg" src={event} alt="" />
            </a>
            <div class="p-5">
              <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register Now <ArrowRightIcon className="h-5 w-5 ml-2 -mr-1" />
              </a>
            </div>
          </motion.div>
          <motion.div
            transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            class="bg-gradient-to-r from-blue-700 to-chelesa text-white max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="/">
              <img class="rounded-t-lg" src={event} alt="" />
            </a>
            <div class="p-5">
              <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register Now <ArrowRightIcon className="h-5 w-5 ml-2 -mr-1" />
              </a>
            </div>
          </motion.div>
          <motion.div
            transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            class="bg-gradient-to-r from-blue-700 to-chelesa text-white max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="/">
              <img class="rounded-t-lg" src={event} alt="" />
            </a>
            <div class="p-5">
              <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register Now <ArrowRightIcon className="h-5 w-5 ml-2 -mr-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
