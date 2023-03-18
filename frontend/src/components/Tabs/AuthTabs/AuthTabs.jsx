import {Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';
import React from 'react';
import { Login, Signup } from '../../Authentication';
export const AuthTabs = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
          <button onClick={onOpen} className="border border-white px-4 rounded-sm font-bold py-1 ml-28 xl:ml-0 lg:text-sm lg:px-8 lg:py-2 hover:bg-white hover:text-blue-600 sm:mr-20">
            Login
          </button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Tabs>
                <TabList>
                  <Tab className="focus:hidden">Login</Tab>
                  <Tab className="focus:hidden">Signup</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Login />
                  </TabPanel>
                  <TabPanel>
                    <Signup />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }