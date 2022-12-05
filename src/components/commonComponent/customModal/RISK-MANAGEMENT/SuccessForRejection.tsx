import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function SuccessForRejection() {
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
        Success For Rejection
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        btn={' Close'}
        rejectedModaltitle={'Application Force Rejection'}
        rejectedModalMsg={
          'Your action of force rejection of application has been successfully sent to the reviewer.'
        }
        modalType={'Success For Rejection'}
      />
    </div>
  );
}

export default SuccessForRejection;
