import React from 'react';
import {
  Navbar,
  Main,
  Programs,
  Career,
  Testimonials,
  Testimonial,
  Steps,
  Us,
  Events,
  FreeCourses,
  Story,
  Footer,
} from './index';
import { SignupLists } from '../../features/Authentication/SignupLists';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <SignupLists />
      <Main />
      <Programs />
      <Steps />
      <Us />
      <Career />
      <Testimonials />
      <Testimonial />
      <Events />
      <FreeCourses />
      <Story />
      <Footer />
    </>
  );
};
