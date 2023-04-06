import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  async function loginUser(credentials) {
    console.log(credentials)
    return fetch('https://apply-remote-jobs.onrender.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
      
    }
    
    )
    
      .then(data => data.json())
      .then(navigate('/dashboard'))
   }
  

const formSubmit = async e => {

  e.preventDefault();
  const token = await loginUser({
    email,
    password
  });
  console.log(token)

}
  

  
  return (
    <>
      <div class="p-2 pb-2">
        <form onSubmit={formSubmit}>
          <fieldset class="text-center font-semibold text-base mb-8">
            Login with email
          </fieldset>
          <div class="mb-8">
            <label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                class="outline outline-2 outline-offset-1 outline-blue-400 focus:outline-4 placeholder:text-black rounded-lg w-72 h-10 pl-5 placeholder:font-sans"
                type={'email'}
                placeholder="Email"
              />
            </label>
          </div>
          <div class="mb-8">
            <label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                class="outline outline-2 outline-offset-1 outline-blue-400 focus:outline-4 placeholder:text-black rounded-lg w-72 h-10 pl-5 placeholder:font-sans"
                type={'password'}
                placeholder="Enter Your Password"
              />
            </label>
          </div>
          <div class="text-center">
            <button
              class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl px-6 py-3 w-5/6 rounded-3xl"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

