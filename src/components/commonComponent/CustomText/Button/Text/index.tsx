import * as React from "react";
import {
  Button,
  Typography
} from "@mui/material";

const BtnText = (props:any)=>{
  return(
    <Button sx={{height:30,width:100}} variant="text" color="secondary" >
        <Typography sx={{ textTransform: "capitalize",fontSize:12,fontWeight:'bold' }}>
            {props.title}
        </Typography>
      </Button>
)

}
export default BtnText