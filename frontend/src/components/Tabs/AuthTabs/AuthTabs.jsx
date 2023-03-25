import React, {useState} from 'react';
import Modal from 'react-modal';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs';
import { Login, Signup } from '../../Authentication/index';

export const AuthTabs = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div>
        <button onClick={openModal}>Login</button>

        <Modal isOpen={modal}>
          <Tabs>
            <TabList>
              <Tab>Signup</Tab>
              <Tab>Login</Tab>
            </TabList>
            <TabPanel>
              <Signup />
            </TabPanel>
            <TabPanel>
              <Login />
            </TabPanel>
          </Tabs>
        </Modal>
      </div>
    </>
  );
}

