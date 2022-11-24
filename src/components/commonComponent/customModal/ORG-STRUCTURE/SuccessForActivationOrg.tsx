import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function SuccessForActivationOrg() {
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
        Activate success org
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Activation Organisation'}
        successModalMsg={
          'Your request for Activating Org is successfully sent to the Reviewer.'
        }
        btn={' Close'}
      />
    </div>
  );
}

export default SuccessForActivationOrg;
