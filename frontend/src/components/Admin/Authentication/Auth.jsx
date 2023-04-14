import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Tab } from '@headlessui/react';


export const AdminAuth = () => {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-900 py-3 mb-5">
          <a
            href="/"
            className="text-white font-bold font-logo text-xl ml-3 lg:text-2xl"
          >
            BICS
          </a>
        </div>
        <div className="flex flex-row">
          <div className="hidden lg:inline-flex lg:basis-1/2">Half</div>
          <div className="lg:basis-1/2">
            <Tab.Group>
              <Tab.List className="flex flex-row justify-center gap-10">
                <Tab>Signup</Tab>
                <Tab>Login</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Register />
                </Tab.Panel>
                <Tab.Panel>
                  <Login />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </>
  );
}
