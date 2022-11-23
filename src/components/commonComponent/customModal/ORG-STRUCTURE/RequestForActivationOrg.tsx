import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function RequestForActivationOrg() {
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
        Request For Activation Org
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Request for Activation'}
        pause_content={
          'Do you want to submit request for Activating Organisation?'
        }
        close={'Close'}
        submit={'Submit'}
      />
    </div>
  );
}

export default RequestForActivationOrg;
