import React from 'react';
import { teacher } from '../../Assets/index';
const courses = [
  {
    name: "Teacher 1",
    courseName: "Coures 1",
    studentsEnrolled: 1,
    src: teacher,
  },
  {
    name: "Teacher 2",
    courseName: "Coures 2",
    studentsEnrolled: 2,
    src: teacher,
  },
  {
    name: "Teacher 3",
    courseName: "Coures 3",
    studentsEnrolled: 3,
    src:teacher,
  },
  {
    name: "Teacher 4",
    courseName: "Coures 4",
    studentsEnrolled: 4,
    src:teacher,
  },
];
export const FreeCourses = () => {
  return (
    <>
      <section>
        <div className="h2 text-center">
          Explore Free Courses from Lawgical Instructors
        </div>
        <div className="h4 text-center font-normal">1000+ Learners have attended the courses</div>
        <div className="grid grid-rows-2 px-4 grid-flow-col lg:flex lg:flex-row justify-center gap-10 my-10">
          {courses.map((course) => {
            return (
              <div className='shadow-2xl rounded-2xl'>
                <img src={course.src} alt="teacher" className="h-24 w-24 rounded-t-2xl" />
                <div>{course.name}</div>
                <div>{course.courseName}</div>
                <div>{course.studentsEnrolled}</div>
              </div>
            );
          })}
        </div>
        <button class
        >View All Courses</button>
      </section>
    </>
  );
}
