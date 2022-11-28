import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function SuccessForDeactivation() {
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
        Deactivation success
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Request - Deactivate User'}
        successModalMsg={
          'Your request for deactivating user is successfully sent to the Reviewer.'
        }
        btn={'Close'}
      />
    </div>
  );
}

export default SuccessForDeactivation;
