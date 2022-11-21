import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from './CustomModal';

function CreateNewPassword() {
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
        Create New password
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        changePasswordTitle={'Change Password'}
        ProceedBtn={'Update'}
        resentOTPmsg={
          ' Password should be 8 characters, including 1 Caps, 1 lowercase, 1 numeral.'
        }
        enterNewPassword={'Enter New Password'}
        confirmNewPassword={'Confirm New Password'}
        forgotPassword={'Forgot Password?'}
      />
    </div>
  );
}

export default CreateNewPassword;
