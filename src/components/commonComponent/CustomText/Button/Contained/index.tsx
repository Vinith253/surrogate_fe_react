import * as React from "react";
import {
  Button,
  Typography
} from "@mui/material";

const BtnContained = (props:any)=>{
    return(
        <Button sx={{height:30,width:70}} variant="contained" color="secondary">
            <Typography sx={{ textTransform: "capitalize",fontSize:12,fontWeight:'bold' }}>
                {props.title}
            </Typography>
          </Button>
    )

}
export default BtnContained