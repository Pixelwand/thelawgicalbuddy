import React from 'react';
import { GrCheckboxSelected } from 'react-icons/gr';
import { programone } from '../../Assets/index';
import { motion } from 'framer-motion';

export const Programs = () => {
  return (
    <>
      <div>
        <div className="text-center text-2xl my-6 leading-10 ">
          <b>Programs</b> we offer
        </div>
        <div className="flex flex-col lg:flex-row  lg:justify-center gap-5 text-center">
          <motion.div
            transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            className="shadow-2xl m-5 border-solid border rounded-2xl"
          >
            <div>
              <div className="bg-gradient-to-r from-liberty via-intel to-blue-400 text-2xl text-white rounded-t-2xl py-4 flex flex-row gap-20 justify-center">
                <div>Program 1</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  {/* <img src={programone} alt="Program One" className='h-20 w-24 rounded-2xl'/> */}
                </div>
              </div>
              <div className="pl-10 pt-5 pb-10">
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
          </motion.div>
          <motion.div
            transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1, duration: 6 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            className="shadow-2xl m-5 border-solid border rounded-2xl "
          >
            <div>
              <div className="bg-gradient-to-r from-darkblue to-boeing text-2xl text-white rounded-t-2xl py-4 flex flex-row gap-20 justify-center">
                <div> Program 2</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                </div>
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
          </motion.div>
          <motion.div
            transition={{
              duration: 0.8,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, duration: 2 }}
            className="shadow-2xl m-5 border-solid border rounded-2xl"
          >
            <div>
              <div className="bg-gradient-to-r from-orangered  to-coral text-2xl text-white rounded-t-2xl py-4 flex flex-row gap-20 justify-center">
                <div>Program 3</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
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
          </motion.div>
        </div>
      </div>
    </>
  );
};
