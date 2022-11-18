import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from './CustomModal';

function ChangePasswordProfileModal() {
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
        Change password
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        changePasswordTitle={'Change Password'}
        changePasswordTitleMsg={
          'Enter registered mobile number/email ID to receive OTP)'
        }
        ProceedBtn={'Proceed'}
      />
    </div>
  );
}

export default ChangePasswordProfileModal;
