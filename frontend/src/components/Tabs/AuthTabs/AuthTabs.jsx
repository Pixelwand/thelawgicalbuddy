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
        <Button onClick={openModal} bg="" ml={32} bgColor="blue.600">
          Login
        </Button>
        <Modal isOpen={modal} style={customStyles}>
          <button
            onClick={closeModal}
            className="float-right relative left-4 bottom-4"
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
