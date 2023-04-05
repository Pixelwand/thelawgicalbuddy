// import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const formSubmit = async () => {
   await axios({
     method: 'post',
     url: 'http://localhost:8080/user/register',
     data: {
       name: setName,
       email: setEmail,
       number: setNumber,
       password: setPassword,
     },
   }).then(() => {
     console.log('User:');
   });
  };
  return (
    <>
      <div class="px-4 pb-2">
        <form onSubmit={formSubmit}>
          <fieldset class="text-center font-semibold text-base mb-8 font-sans">
            Sign up with your email
            <hr class="mt-3 font-" />
          </fieldset>

          <div class="mb-8 font-xl">
            <label>
              <input
                onChange={(e) => setName(e.target.value)}
                name="name"
                type={'text'}
                class="outline outline-2 outline-offset-1 focus:outline-4 outline-blue-400 placeholder:text-black placeholder:text-base rounded-lg w-72 h-10 pl-5 placeholder:font-sans"
                placeholder="Enter Your Name"
              />
            </label>
          </div>

          <div class="mb-8">
            <label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                class="w-72  h-10 pl-5 outline outline-2 outline-offset-1 focus:outline-4 outline-blue-400 placeholder:text-black rounded-lg"
                type="email"
                placeholder="Email"
              />
            </label>
          </div>
          <div class="mb-8 ">
            <label>
              <input
                name="number"
                onChange={(e) => setNumber(e.target.value)}
                class="w-72  h-10 pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-black focus:outline-4 rounded-lg"
                placeholder="Phone Number"
              ></input>
            </label>
          </div>
          <div class="mb-5">
            <label>
              <input
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                class="w-72 focus:outline-4  h-10 pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-black rounded-lg"
                type={'password'}
                placeholder="Create New Password"
              />
            </label>
          </div>
          <div class="mb-5">
            <input
              type={'checkbox'} 
            />
            <label class="font-sans text-sm ml-5">
              I agree to the{' '}
              <a href="#/" class="text-blue-700 font-semibold">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#/" class="font-semibold font-sans text-blue-700">
                Privacy Policy
              </a>
            </label>
          </div>
          <div class="text-center">
            <button
              class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded-3xl w-5/6 px-6 py-3"
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
