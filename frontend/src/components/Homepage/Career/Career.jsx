import React from 'react';
import { event } from '../../Assets/index';

export const Career = () => {
  return (
    <>
      <div className="mb-48">
        <div className="text-black px-10 text-center my-5 text-xl p-2 font-sans mb-10">
          <strong>The Lawgical Buddy Recipe to</strong> Transform your career
        </div>
        <div className="flex flex-col gap-40 lg:flex-row px-3 lg:gap-14 justify-center">
          <div class="max-w-sm p-6 h-72 bg-lavender border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-crayola text-center dark:text-white">
                A structured & flexible program, that cares for you
              </h5>
            </a>
            <p class="mb-3 font-normal text-sm text-center my-5 text-gray-500 dark:text-gray-400">
              You begin either as a Beginner, Intermediate, or Advanced learner
              based on your expertise.
            </p>
            <div className="bg-white shadow-2xl p-4 rounded-2xl mt-2 lg:w-80 ml-1.5 ">
              <img
                src={event}
                alt="Structured Program"
                className="rounded-2xl"
              />
            </div>
          </div>

          <div class="max-w-sm p-6 h-72 mb-10 bg-lavender border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold text-crayola tracking-tight text-center dark:text-white">
                Be Mentored 1:1 by Experienced Professionals
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 text-sm text-center px-5 my-5 dark:text-gray-400">
              Get senior industry experts as mentors to guide you with mock
              interviews, career advice, resume review, etc.
            </p>
            <div className="bg-white shadow-2xl p-4 rounded-2xl ml-1.5 lg:w-80">
              <img
                src={event}
                alt="Structured Program"
                className="rounded-2xl"
              />
            </div>
          </div>

          <div class="max-w-sm p-6 h-72 bg-teagreen border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gold text-center dark:text-white">
                Become part of a thriving community for life
              </h5>
            </a>
            <p class="mb-3 font-normal px-2 my-5 text-gray-500 text-center text-sm dark:text-gray-400">
              As part of our extensive alumni community you will find job
              referrals, career advice, life advice, or your future co-founder -
              all in one place.
            </p>
            <div className="bg-white shadow-2xl p-4 rounded-2xl ml-1.5 lg:w-80">
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
};
