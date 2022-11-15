import * as React from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const TypographyHead = (props: any) => {
  console.log("title", props);
  return (
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
  );
};
export default TypographyHead;
