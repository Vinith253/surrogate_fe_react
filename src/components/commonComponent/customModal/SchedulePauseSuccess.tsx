import React,{useState} from 'react'

import { Button } from "@mui/material";
import CustomModal from './CustomModal';

function SchedulePauseSuccess() {

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}> Schedule Pause Success</Button>
      <CustomModal
       openSuccess={openSuccess}
       handleCloseSuccess={handleCloseSuccess}
        successModalTitle={"Card For Card - Scheduled Pause"}
        successModalMsg={"Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer"}
        btn={" Close"}
       
      />

    </div>
  )
}

export default SchedulePauseSuccess