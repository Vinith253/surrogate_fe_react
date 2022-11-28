import * as React from 'react';
import { Typography } from '@mui/material';

const TypographyInfo = (props: any) => {
  return (
    <Typography
      sx={{
        fontSize: '12px',
        fontWeight: '400',
        alignItems: 'center',
        paddingTop:'2px',
        // padding: 1,
        marginBottom: '2px',
      }}
      color="#9FACB8"
      
      paragraph
    >
      {props.title}
    </Typography>
  );
};
export default TypographyInfo;
