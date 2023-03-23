import React from 'react';
import { Navbar, Main, Programs, Career, Testimonials, Testimonial, Steps, Events, FreeCourses, Learning, Footer } from './index';


export const Homepage = () => {
  return (
    <>
        <Navbar />
        <Main />
      <Programs />
      <Steps />
        <Career />
      <Testimonials />
      <Testimonial />
      <Events />
      <FreeCourses />
        <Learning />
        <Footer />
    </>
  )
}
