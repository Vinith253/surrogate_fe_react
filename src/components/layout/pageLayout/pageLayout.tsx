import { Box } from '@mui/system';
import React from 'react';

const PageLayout = (props: any) => {
  const boxStyle = {
    padding: '5vh 3vw',
    marginBottom: '5rem',
  };
  const { children } = props;
  return (
    <Box sx={boxStyle} {...props}>
      {children}
    </Box>
  );
};

export default PageLayout;
