import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Signup = () => {
    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)
  
  return (
    <>
    <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input ref={initialRef} placeholder='Full Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Number</FormLabel>
                <Input placeholder='Number' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' />
              </FormControl>
    </>
  )
}
