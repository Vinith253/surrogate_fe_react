import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from './CustomModal';
import { RegexValidation } from '../../../utils/Regex';

function CreateNewPassword() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [createValuePassword, setCreateValuePassword] = React.useState<any>({
    password: '',
    confirmPassword: '',
    showPassword: true,
    showConfirmPassword: true,
  });

  const textareaonchangeFun =
    (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreateValuePassword({
        ...createValuePassword,
        [prop]: event.target.value,
      });

      setButtonDisabled(
        createValuePassword.password.match(RegexValidation.passwordPattern) &&
          createValuePassword.confirmPassword === createValuePassword.password
          ? false
          : true
      );
    };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setCreateValuePassword({
      ...createValuePassword,
      showPassword: !createValuePassword.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setCreateValuePassword({
      ...createValuePassword,
      showConfirmPassword: !createValuePassword.showConfirmPassword,
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Create New password
      </Button>
      <CustomModal
        handleMouseDownPassword={handleMouseDownPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleClickShowConfirmPassword={handleClickShowConfirmPassword}
        buttonDisabled={buttonDisabled}
        createValuePassword={createValuePassword}
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
        textareaonchangeFun={textareaonchangeFun}
      />
    </div>
  );
}

export default CreateNewPassword;
