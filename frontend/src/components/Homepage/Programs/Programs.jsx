import React from 'react';
import { GrCheckboxSelected } from "react-icons/gr";
import { programone } from '../../Assets/index';


export const Programs = () => {
  return (
    <>
      <div>
        <div className="text-center text-2xl my-6 leading-10 ">
          <b>Programs</b> we offer
        </div>
        <div className="flex flex-col lg:flex-row  lg:justify-center gap-10 text-center">
          <div className="shadow-2xl m-5 border-solid border rounded-2xl">
            <div>
              <div className="bg-gradient-to-r from-liberty via-intel to-blue-400 text-2xl text-white rounded-t-2xl py-8 flex flex-row gap-20 justify-center">
                <div>Program 1</div>
                <div>Icon 1
                  {/* <img src={programone} alt="Program One" className='h-20 w-24 rounded-2xl'/> */}
                </div>
              </div>
              <div className="pl-10 pt-5 pb-10">
                <div className="text-left">
                  <div className="my-3 text-gray-600">
                    <div><span><GrCheckboxSelected className='text-blue-600'/></span>1+ years of Work Experinence Required.</div>
                  </div>
                </div>
                <div className="font-bold text-left">Career Outcome</div>
                <div className="text-left">Lorem ipsum</div>
                <div className="text-left">What you'll learn?</div>
                <div className="text-left">Lorem ipsum</div>
                <div>
                  <div className="text-left">1 Capstone Project</div>
                  <div className="flex flex-row gap-10">
                    <div className="text-left">Learn more</div>
                    <div>
                      <a href="tel:+919000000000">Call</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl m-5 border-solid border rounded-2xl ">
            <div>
              <div className="bg-gradient-to-r from-darkblue to-boeing text-2xl text-white rounded-t-2xl py-8 flex flex-row gap-20 justify-center">
                <div> Program 2</div>
                <div>Icon</div>
              </div>
            </div>
            <div className="p-10">
              <div className="text-left">
                <div className="my-3 text-gray-600">
                  <div>1+ years of Work Experinence Required.</div>
                </div>
              </div>
              <div className="font-bold text-left">Career Outcome</div>
              <div className="text-left">Lorem ipsum</div>
              <div className="text-left">What you'll learn?</div>
              <div className="text-left">Lorem ipsum</div>
              <div>
                <div className="text-left">1 Capstone Project</div>
                <div className="flex flex-row gap-10">
                  <div className="text-left">Learn more</div>
                  <div>
                    <a href="tel:+919000000000">Call</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl m-5 border-solid border rounded-2xl">
            <div>
              <div className="bg-gradient-to-r from-orangered  to-coral text-2xl text-white rounded-t-2xl py-8 flex flex-row gap-20 justify-center">
                <div>Program 3</div>
                <div>Icon</div>
              </div>
            </div>
            <div className='p-10'>
              <div className="text-left">
                <div className="my-3 text-gray-600">
                  <div>1+ years of Work Experinence Required.</div>
                </div>
              </div>
              <div className="font-bold text-left">Career Outcome</div>
              <div className="text-left">Lorem ipsum</div>
              <div className="text-left">What you'll learn?</div>
              <div className="text-left">Lorem ipsum</div>
              <div>
                <div className="text-left">1 Capstone Project</div>
                <div className="flex flex-row gap-10">
                  <div className="text-left">Learn more</div>
                  <div>
                    <a href="tel:+919000000000">Call</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
