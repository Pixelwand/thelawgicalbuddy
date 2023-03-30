import React from 'react';

export const Main = () => {
  return (
    <>
      <div className="bg-airforce mt-1 text-white h-full pb-7 lg:flex lg:flex-row lg:justify-center  lg:gap-20 lg:px-10 lg:py-5">
        <div>
          <p className="text-center px-10 lg:px-20 lg:leading-snug pt-7 text-3xl font-bold lg:text-5xl lg:basis-1/2">
            India's best legal learning company
          </p>
          <div className="text-xl font-bold text-center text-gray-300 mt-5 px-5">
            Learn industry relevant skills with top veterans
          </div>
        </div>
        <div className="bg-white lg:relative lg:top-20 lg:shadow-2xl text-center rounded-2xl px-5 py-5 mx-5 mt-5 text-black lg:basis-1/2">
          <h2 className="text-2xl">
            Book a Live Class, For{' '}
            <span className="text-red-600 font-bold">Free!</span>
          </h2>
          <form>
            <div className="mt-5 text-gray-600 font-sans">
              Your topic of interest
            </div>
            <div className="mt-2 flex flex-row gap-10 text-gray-700 mb-5 justify-center">
              <label>
                <input type={'radio'} name="program" className="mr-3 h-4 w-4" />{' '}
                Program 1
              </label>
              <label>
                <input
                  type={'radio'}
                  name="program"
                  className="mr-3 h-4 w-4 "
                />
                Program 2
              </label>
            </div>
            <hr />
            <div className="mt-5 mb-5">
              <label>
                <input
                  type={'text'}
                  placeholder="Full Name"
                  className="outline outline-1 outline-blue-600 focus:outline-2 border-blue-400 w-72 h-10 rounded-2xl pl-5 placeholder:text-base"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type={'email'}
                  placeholder="Email"
                  className="outline outline-1 outline-blue-600 focus:outline-2 border-blue-400 w-72 h-10 rounded-2xl pl-5 placeholder:text-base"
                />
              </label>
            </div>
            <div className="mt-5">
              <label>
                <input
                  type={'number'}
                  placeholder="Phone No."
                  className="outline outline-1 outline-blue-600 focus:outline-2 border-blue-400 w-72 h-10 rounded-2xl pl-5 placeholder:text-base"
                />
              </label>
            </div>
            <div className="text-sm text-red-600 mt-3">Limited seats left</div>
            <button
              className="bg-gray-400 text-white px-10 py-2 rounded mt-1 ml-1"
              type="submit"
            >
              Continue Booking Live Class
            </button>
          </form>
        </div>
      </div>
      <div className=" text-xs lg:space-x-10 lg:px-7 lg:relative lg:w-1/2 lg:flex-row lg:bottom-14  text-black flex flex-col gap-5 shadow-2xl m-5 bg-white rounded p-5">
        <div>
          <span className="text-green-600 font-bold text-xl mr-1">126%</span>{' '}
          Avg. CTC Hike
        </div>
        <div>
          <span className="text-orangered font-bold text-xl mr-1">Top 1%</span>{' '}
          Instructors From Top Companies
        </div>
        <div>
          <span className="text-intel font-bold text-xl mr-1">750+</span>{' '}
          Employer Partners
        </div>
      </div>
    </>
  );
};
