import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const TypoText = (props: any) => {
  const { handleChange, id, value, fontSize } = props;
  return (
    <Box>
      {props.title && (
        <Typography
          sx={{
            marginBottom: '5px',
            // fontFamily:'ilisarniq',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            color: props.color,
          }}
          style={props.style}
          variant="body1"
          color="textPrimary"
        >
          
          {props.title}
        </Typography>
      )}

      {props.placeholder && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder={props.placeholder}
          variant="outlined"
          size="small"
          onChange={(e) => handleChange(e, id)}
          value={value}
          sx={{fontSize:'14px',fontWeight:'400'}}
        >
          {props.placeholder}
        </TextField>
      )}
    </Box>
    // <Box>
    //   <TextField
    //     fullWidth
    //     hiddenLabel
    //     placeholder={props.placeholder}
    //     variant="outlined"
    //     size="small"
    //   >
    //     {props.placeholder}
    //   </TextField>
    // </Box>
  );
};
export default TypoText;
