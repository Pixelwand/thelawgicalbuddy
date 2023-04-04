import React, { useState } from 'react';
import Modal from 'react-modal';
import { Login, Signup } from '../../Authentication/index';
import { Tab } from '@headlessui/react';
import { Button } from '@chakra-ui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const AuthTabs = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div>
        <Button onClick={openModal} ml={132} className="text-white text-md px-4 py-1 rounded-sm outline outline-1 border border-white hover:scale-110 duration-75 hover:text-white ">
          Login
        </Button>
        <Modal isOpen={modal}
        className="justify-center bg-white text-center mt-10 py-3 rounded-2xl shadow-2xl z-10 lg:w-2/6 mx-5 lg:mx-auto"
        >
          <button
            onClick={closeModal}
            className="float-right relative right-2 bottom-1"
          >
            <XMarkIcon
              className="block h-6 w-6 bg-white text-blue-800 text-end"
              aria-hidden="true"
            />
          </button>
          <Tab.Group>
            <Tab.List className="flex flex-row justify-center gap-10">
              <Tab>Signup</Tab>
              <Tab>Login</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Signup />
              </Tab.Panel>
              <Tab.Panel>
                <Login />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Modal>
      </div>
    </>
  );
};
