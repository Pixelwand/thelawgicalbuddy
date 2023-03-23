import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AuthTabs } from '../../Tabs';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Courses', href: '/topics', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'FAQs', href: '/faqs', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-900"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 ml-80 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  sm:items-stretch sm:justify-start">
                <div className="text-white font-bold font-logo text-xl ml-3 lg:text-2xl">
                  Lawgical
                </div>
                <div className="text-white sm:hidden">
                  <AuthTabs />
                </div>
                <div className="hidden sm:ml-6 sm:block text-white lg:flex lg:flex-row lg:ml-80 lg:gap-64">
                  <div className="flex space-x-4 lg:space-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-blue-600"
                            : "text-white hover:bg-blue-200 hover:text-blue-600",
                          "px-3 py-2 rounded-md text-sm font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="text-white lg:space-x-72 lg:ml-20 lg:relative">
                    <AuthTabs />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

