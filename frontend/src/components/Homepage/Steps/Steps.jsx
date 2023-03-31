import React from 'react';

export const Steps = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill-opacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,202.7C640,203,800,181,960,170.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section className="pb-10 bg-black text-white sm:pb-16 lg:pb-24 lg:hover:">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto hover:scale-110 bg-white text-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-black"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight  md:mt-10">
                  Create a free account
                </h3>
                <p className="mt-4 text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-white mx-auto border-2 hover:scale-110 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-black"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                  Choose your course
                </h3>
                <p className="mt-4 text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white hover:scale-110 border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-black"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                  Learn & Improve skills
                </h3>
                <p className="mt-4 text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1140 320">
        <path
          fill-opacity="1"
          d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,96C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};
