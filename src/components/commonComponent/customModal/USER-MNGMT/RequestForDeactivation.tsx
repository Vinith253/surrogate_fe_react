import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function RequestForDeactivation() {
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
        Request For Deactivation
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Request for Deactivation'}
        pause_content={'Do you want to submit request for deactivating user?'}
        close={'Close'}
        submit={'Submit'}
      />
    </div>
  );
}

export default RequestForDeactivation;
