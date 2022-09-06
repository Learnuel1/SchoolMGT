import { Button, FormControl, FormLabel, Heading,  Input, InputGroup, InputRightElement, VStack, Link, Text } from "@chakra-ui/react";

import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { useState } from "react";


const AdminLoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
   const admin = JSON.stringify({mail, password});
    sessionStorage.setItem('admin', admin);
    setPassword('');
  }
 
  return (
      <form onSubmit={handleSubmit}>
        <VStack gap={4} p={5} > 
          <Heading fontFamily={'sans-serif'} textColor='blue.400'>Admin Login Page</Heading>
        <FormControl isRequired w={['full', '80%', '60%']}>
          <FormLabel>Email</FormLabel>
          <Input type={'email'} variant={'filled'}
            value={mail}
            onChange={e => setMail(e.target.value)}
            placeholder={'enter your email here'} />
        </FormControl>
       <FormControl isRequired w={['full', '80%', '60%']}>
         <FormLabel>Password</FormLabel>
        <InputGroup >
          <Input type={show ? 'text' : 'password'} 
            variant={'filled'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={'enter your password here'} />
          <InputRightElement>
          <Button p={1} variant={'unstyled'} 
            onClick={() => setShow(!show)}>
            {show ? <ViewIcon /> : <ViewOffIcon /> }
          </Button>
          </InputRightElement>
        </InputGroup>
       </FormControl>
       <Link> <Text color={'blue'}>Forgot Password</Text> </Link>
       <Button 
          type="submit" size={'lg'} colorScheme={'green'}>
            Login
        </Button>
        </VStack>
      </form>
  )
};

export default AdminLoginPage;
