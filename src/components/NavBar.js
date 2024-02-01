import React from 'react';
import '../styles.css';
import { Box } from '@radix-ui/themes';

const NavBar = () => {
  return (
    <Box className='h-16 flex justify-between items-center px-8 bg-background border-b-4 border-one'>
      <div className='text-one text-lg font-bold'>
        Sweet Scores
      </div>
      <ul className='text-five flex space-x-4 cursor-pointer'>
        <li className='hover:text-one'>Games</li>
        <li className='hover:text-one'>High Scores</li>
        <li className='hover:text-one'>Forms</li>
        <li className='hover:text-one'>Log In</li>
      </ul>
    </Box>
  );
};

export default NavBar;