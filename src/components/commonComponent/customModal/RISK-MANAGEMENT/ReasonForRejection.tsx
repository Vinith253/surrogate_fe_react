import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function ReasonForRejection() {
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
        {' '}
        Reason For Rejection
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Enter Reason For Rejection'}
        textarea_title={'Add Reasons'}
        maxLength={'Maximum of 500 words'}
        close={'Cancel'}
        submit={'Reject'}
        textAreaHeight={'230px'}
      />
    </div>
  );
}

export default ReasonForRejection;
