import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Login = () => {
    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)
  
  return (
    <>
    <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Full Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' />
              </FormControl>
    </>
  )
}
