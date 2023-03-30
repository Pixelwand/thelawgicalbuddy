import React from 'react';
import { Pricing } from './Pricing/Pricing';

export const Topics = () => {
  return (
    <>
      <section>
        <div className="w-1/2 rounded-2xl p-5 bg-red-100">
          <a href="/topics/courses">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div>Icon 1</div>
                  <div className="flex flex-col">
                    <div>COURSES</div>
                    <div>Free Courses by top scaler instructors.</div>
                  </div>
                </div>
                <div>View all courses</div>
              </div>
              <div>Icon 2</div>
            </div>
          </a>
        </div>
        <br />
        <a href="/topics/webinars">Webinars</a>
      </section>
      <Pricing />
    </>
  );
};
