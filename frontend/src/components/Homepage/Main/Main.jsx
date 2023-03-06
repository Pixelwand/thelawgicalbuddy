import React from 'react'

export const Main = () => {
  return (
    <>
      <div className="bg-airforce mt-1 text-white h-full pb-7">
        <div className="text-center px-10 pt-7 text-3xl font-bold">
          India's best legal learning company
        </div>
        <div className="text-xl font-bold text-center text-gray-300 mt-5 px-5">
          Learn industry relevant skills with top veterans
        </div>
        <div className="bg-white rounded-2xl px-5 py-5 mx-5 mt-5 text-black">
          <h2 className="text-2xl">
            Book a Live Class, For{" "}
            <span className="text-red-600 font-bold">Free!</span>
          </h2>
          <form>
            <div className="mt-5 text-gray-600 font-sans">
              Your topic of interest
            </div>
            <div className="mt-2 flex flex-row gap-10 text-gray-700 mb-5">
              <label>
                <input type={"radio"} name="program" className="mr-3 h-4 w-4" />{" "}
                Program 1
              </label>
              <label>
                <input
                  type={"radio"}
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
                  type={"text"}
                  placeholder="Full Name"
                  className="outline outline-1 outline-blue-600 focus:outline-2 border-blue-400 w-72 h-10 rounded-2xl pl-5 placeholder:text-base"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type={"email"}
                  placeholder="Email"
                  className="outline outline-1 outline-blue-600 focus:outline-2 border-blue-400 w-72 h-10 rounded-2xl pl-5 placeholder:text-base"
                />
              </label>
            </div>
            <div className='mt-5'>
              <label>
                <input
                  type={"number"}
                  placeholder="Phone No."
                  className="outline outline-1 outline-blue-600 focus:outline-2 border-blue-400 w-72 h-10 rounded-2xl pl-5 placeholder:text-base"
                />
              </label>
            </div>
            <div className='text-sm text-red-600 mt-3'>Limited seats left</div>
            <button className='bg-gray-400 text-white px-10 py-2 rounded mt-1 ml-1' type="submit">Continue Booking Live Class</button>
          </form>
        </div>
        <div className="text-sm text-black flex flex-col gap-5 shadow-2xl m-5 bg-white  rounded p-5">
          <div>126% Avg. CTC Hike</div>
          <div>Instructors From Top Companies</div>
          <div>750+ Employer Partners</div>
        </div>
      </div>
    </>
  );
}
