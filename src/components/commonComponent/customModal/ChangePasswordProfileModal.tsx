import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from './CustomModal';
import { RegexValidation } from '../../../utils/Regex';
function ChangePasswordProfileModal() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const [emailValue, setEmailValue] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    updateButtonStatus();
  }, [emailValue]);

  const updateButtonStatus = () => {
    setButtonDisabled(
      emailValue.match(RegexValidation.EmailPattern) ? false : true
    );
  };
  const textareaonchangeFun = (e: any) => {
    setEmailValue(e.target.value);
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
        buttonDisabled={buttonDisabled}
        textareaonchangeFun={textareaonchangeFun}
        emailValue={emailValue}
      />
    </div>
  );
}

export default ChangePasswordProfileModal;
