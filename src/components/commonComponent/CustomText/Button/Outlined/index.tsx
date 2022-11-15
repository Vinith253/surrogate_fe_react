import * as React from "react";
import {
  Button,
  Typography
} from "@mui/material";

const BtnOutlined = (props:any)=>{
    return(
        <Button sx={{height:30,width:70}} variant="outlined">
            <Typography sx={{ color:'black', textTransform: "capitalize",fontSize:12,fontWeight:'bold',borderBlockColor:'black' }}>
                {props.title}
            </Typography>
          </Button>
    )

}
export default BtnOutlined