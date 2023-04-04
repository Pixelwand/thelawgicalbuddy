import React from 'react';
import { Pricing } from './Pricing/Pricing';
import { course } from '../Assets/index';
export const Topics = () => {
  return (
    <>
      <section className='flex flex-row gap-10 px-10 py-10'>
        <div className="w-1/2 rounded-2xl p-5 bg-red-100">
          <a href="/topics/courses">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div>Icon 1</div>
                  <div className="flex flex-col">
                    <div className='hidden lg:flex'>COURSES</div>
                    <div className='hidden lg:flex'>Free Courses by top scaler instructors.</div>
                  </div>
                </div>
                <div className='hidden lg:flex'>View all courses</div>
              </div>
              <div>
                {/* <img src={course} alt="courseIcon" className='w-44 top-11 absolute ml-20 rounded-2xl'/> */}
              </div>
            </div>
          </a>
        </div>
        <div className="w-1/2 rounded-2xl p-5 bg-red-100">
          <a href="/topics/webinars">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div>Icon 1</div>
                  <div className="flex flex-col">
                    <div>COURSES</div>
                    <div className='hidden lg:flex'>Free Courses by top scaler instructors.</div>
                  </div>
                </div>
                <div className='hidden lg:flex'>View all courses</div>
              </div>
              <div className='hidden lg:flex'>Icon 2</div>
            </div>
          </a>
        </div>
      </section>
      <Pricing />
    </>
  );
};
