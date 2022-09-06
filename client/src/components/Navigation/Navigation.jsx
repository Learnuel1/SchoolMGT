import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons';
import {NavLink} from 'react-router-dom'


const Navigation = () => {
  return (
    <Flex bg={'blue.100'}>
      <Flex p={5} align={'center'}>Logo</Flex>
      <Flex w={'full'} p={5} 
          justify={'flex-end'}
          display={['none', 'none', 'flex']}
          gap={6}  >
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
              Home
            </NavLink>
            <NavLink to={'/login'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
              Login
            </NavLink>
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
              Portal
            </NavLink>
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
              Blog
            </NavLink>
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
              About us
            </NavLink>
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
              Contact us
            </NavLink>
      </Flex>
      <Flex align={'center'} 
        justify={'flex-end'}
        w={'full'} p={5} 
        display={['flex', 'flex', 'none']}>
        <Menu>
          <MenuButton
            as={IconButton}
            arial-label={'Options'}
            icon={<HamburgerIcon />}
            variant='outline'
            colorScheme={'blue'}
            size={'lg'}
          />
          
          <MenuList gap={3}>
            <MenuItem>
              <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to={'/login'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
                Login
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
                Portal
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
                Blog
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
                About us
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'red'}: {color:'green'}}>
                Contact us
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
};

export default Navigation;
