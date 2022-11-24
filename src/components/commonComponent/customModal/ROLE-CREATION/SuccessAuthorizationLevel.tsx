import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function SuccessAuthorizationLevel() {
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
        Success Authorization Level
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Authorization level Created Successfully'}
        successModalMsg={
          'Your request for creating new authorization level is successfully sent to the Reviewer.'
        }
        btn={' Close'}
      />
    </div>
  );
}

export default SuccessAuthorizationLevel;
