import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Login = () => {
    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)
  
  return (
    <>
    <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
    </>
  )
}
