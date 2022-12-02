import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function Loading() {
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
        Loading
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        // successModalTitle={'Activation Organisation'}
        // successModalMsg={
        //   'Your request for Activating Org is successfully sent to the Reviewer.'
        // }
        // btn={' Close'}
        LoadingMsg={'Loading selected application(s) for Re-Targeting'}
      />
    </div>
  );
}

export default Loading;
