import React, {useState} from 'react';
import { Pricing } from './Pricing/Pricing';
import { course } from '../Assets/index';
import { FaLongArrowAltRight } from 'react-icons/fa';
export const Topics = () => {
  return (
    <>
      <section className="flex flex-row gap-10 px-10 py-10">
        <div className="w-1/2 rounded-2xl p-5 bg-red-100">
          <a href="/topics/courses" className="lg:flex lg:flex-row gap-20">
            <div className="">
              <img
                src={course}
                alt="courseIcon"
                className="rounded-2xl lg:w-52"
              />
            </div>
            <div className="flex flex-row gap-10">
              <div className="">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <div className="font-serif text-green-700 text-center mt-3">
                      COURSES
                    </div>
                    <div className="hidden lg:flex text-md font-sans my-3 text-gray-800">
                      Free Courses by top instructors.
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex font-semibold text-blue-700 justify-center">
                  View all courses
                  <FaLongArrowAltRight className="my-auto text-2xl ml-5 mt-1 text-blue-600 hover:ml-10 hover:duration-1000" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="w-1/2 rounded-2xl p-5 bg-red-100">
          <a href="/topics/webinars" className="lg:flex lg:flex-row gap-20">
            <div className="">
              <img
                src={course}
                alt="courseIcon"
                className=" rounded-2xl lg:w-52"
              />
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <div className="font-serif text-green-700 text-center mt-3 ">
                      WEBINARS
                    </div>
                    <div className="hidden lg:flex text-md font-sans my-3 text-gray-800">
                      Free Webinars by top instructors.
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex font-semibold text-blue-700 justify-center">
                  View all courses
                  <FaLongArrowAltRight className="my-auto ml-5 hover:ml-10 duration-1000 mt-1 text-2xl  text-blue-600 " />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Pricing />
    </>
  );
};
