import { Box, Button, FormControl, FormLabel, Heading,  Input, InputGroup, InputRightElement, Link, Text, VStack } from "@chakra-ui/react";

import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { useState } from "react";

const StudentLoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
   const student = JSON.stringify({studentId, password});
    sessionStorage.setItem('student', student);

    setPassword('')
  }

  return (
    <Box h={'90vh'}>
      <form onSubmit={handleSubmit}>
        <VStack gap={4} p={5} > 
          <Heading fontFamily={'sans-serif'} textColor='blue.400'>
            Student Login Page
          </Heading>
        <FormControl isRequired w={['full', '80%', '60%']}>
          <FormLabel>Student id</FormLabel>
          <Input type={'text'} variant={'filled'}
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
            placeholder={'enter your student id here'} />
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
    </Box>
  )
};

export default StudentLoginPage;
