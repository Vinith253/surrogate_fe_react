import * as React from 'react';
import { Typography } from '@mui/material';

const TypographyInfo = (props: any) => {
  return (
    <Typography
      sx={{
        fontSize: '12px',
        fontWeight: '400',
        // padding: 1,
        // marginBottom: 'unset',
      }}
      color="textSecondary"
      paragraph
    >
      {props.title}
    </Typography>
  );
};
export default TypographyInfo;
