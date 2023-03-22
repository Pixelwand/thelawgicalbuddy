import React from 'react';
import { Navbar, Main, Programs, Career, Testimonials, Events, FreeCourses, Learning, Footer } from './index';


export const Homepage = () => {
  return (
    <>
        <Navbar />
        <Main />
        <Programs />
        <Career />
        <Testimonials />
      <Events />
      <FreeCourses />
        <Learning />
        <Footer />
    </>
  )
}
