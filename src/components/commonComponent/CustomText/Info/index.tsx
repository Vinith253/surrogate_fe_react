import * as React from 'react';
import { Typography } from '@mui/material';

const TypographyInfo = (props: any) => {
  return (
    <Typography
      sx={{
        fontSize: '12px',
        fontWeight: '400',
        alignItems: 'center',
        // padding: 1,
        marginBottom: '2px',
      }}
      color="textSecondary"
      paragraph
    >
      {props.title}
    </Typography>
  );
};
export default TypographyInfo;
