import { Button } from '@mui/material';
import React,{useState} from 'react'
import CustomModal from './CustomModal';



function SurrogateSelection() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Surrogate selection
      </Button>
        <CustomModal 
       openSuccess={openSuccess}
   
       handleCloseSuccess={handleCloseSuccess}
       title={"Surrogate Selection"}
       pause_content={"You can assign or remove surrogate."}
  
       normalPause={"Assign Surrogate"}
       scheulePause={"Remove Surrogate"}
       
       close={"Close"}
       submit={"Assign"}
       product_label={product_label}
        />
    </div>
  )
}

export default SurrogateSelection



const product_label= [
  {
   id:1,
   label:"Payroll",
   defaultChecked :true
  },
  {
    id:2,
    label:"Car For Card",
    defaultChecked :true
  },
  {
    id:3,
    label:"CIBIL",
    defaultChecked :true
  },
  {
    id:4,
    label:"AQB",
    defaultChecked :false
  },
  {
    id:5,
    label:'Secured',
    defaultChecked :false
  }
  ,{
    id:6,
    label:"RC Surrogate",
    defaultChecked :false
  }
]