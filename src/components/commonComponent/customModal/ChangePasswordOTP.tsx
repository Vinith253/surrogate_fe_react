import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from './CustomModal';

function ChangePasswordOTP() {
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
        Change password OTP
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        changePasswordTitle={'Change Password'}
        changePasswordTitleMsg={'Enter the 6-digit OTP sent to your email ID'}
        ProceedBtn={'Verify'}
        resentOTP={'Resent OTP'}
        resentOTPmsg={
          'Please enter the correct OTP sent to your registered email ID'
        }
      />
    </div>
  );
}

export default ChangePasswordOTP;
