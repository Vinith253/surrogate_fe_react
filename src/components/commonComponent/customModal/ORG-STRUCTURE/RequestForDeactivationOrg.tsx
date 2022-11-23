import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function RequestForDeactivationOrg() {
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
        Request For Deactivation Org
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Request for Deactivation'}
        pause_content={
          'Do you want to submit request for Deactivating Organisation?'
        }
        close={'Close'}
        submit={'Submit'}
      />
    </div>
  );
}

export default RequestForDeactivationOrg;
