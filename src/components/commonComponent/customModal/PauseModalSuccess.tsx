import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomModal from "./CustomModal";



function PauseModalSucces() {
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
        Pause modal Success
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={"Card For Card - Pause"}
        successModalMsg={
          " Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer"
        }
        btn={" Close"}
       
      />
    </div>
  );
}

export default PauseModalSucces;
