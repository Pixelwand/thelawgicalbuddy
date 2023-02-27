import React from 'react';
import {event} from '../../Assets/index';

export const Career = () => {
  return (
    <>
      <div className='mb-48'>
        <div className='bg-learningBackground text-xl text-white p-2 font-sans'>
          <strong>The Lawgical Buddy Recipe to</strong> Transform your career
        </div>
        <div className="flex flex-col gap-40 px-3">
          <div class="max-w-sm p-6 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                A structured & flexible program, that cares for you
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You begin either as a Beginner, Intermediate, or Advanced learner
              based on your expertise.
            </p>
            <div className="bg-blue-700 p-4 rounded-2xl absolute mt-2 mx-auto mr-10 ">
              <img
                src={event}
                alt="Structured Program"
                className="rounded-2xl"
              />
            </div>
          </div>

          <div class="max-w-sm p-6 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Be Mentored 1:1 by Experienced Professionals
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Get senior industry experts as mentors to guide you with mock
              interviews, career advice, resume review, etc.
            </p>
            <div className="bg-blue-700 p-4 rounded-2xl absolute mt-2 mx-auto mr-10 ">
              <img
                src={event}
                alt="Structured Program"
                className="rounded-2xl"
              />
            </div>
          </div>

          <div class="max-w-sm p-6 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Become part of a thriving community for life
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              As part of our extensive alumni community you will find job
              referrals, career advice, life advice, or your future co-founder -
              all in one place.
            </p>
            <div className="bg-blue-700 p-4 rounded-2xl absolute mt-2 mx-auto mr-10 ">
              <img
                src={event}
                alt="Structured Program"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
