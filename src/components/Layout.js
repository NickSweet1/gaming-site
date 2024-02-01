import React from 'react';
import { Box } from '@radix-ui/themes';

const Layout = ({ children }) => {
  return (
    <Box className='bg-seven min-h-screen'>
      {children}
    </Box>
  );
};

export default Layout;