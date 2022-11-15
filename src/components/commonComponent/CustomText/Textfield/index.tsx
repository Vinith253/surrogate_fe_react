import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

const TypoText = (props: any) => {
  return (
    <Box>
      {props.title && (
        <Typography
          sx={{
            margin: 0,
            fontSize: "16px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "flex-start",
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
