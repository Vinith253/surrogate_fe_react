import { Box, IconButton, Stack, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { colors } from '../../../../style/Color';
import profile_icon from '../../../../assets/icons/profile_icon.svg';
import passwordShow from '../../../../assets/icons/passwordView.svg';
import DetailsCard from '../../../../components/commonComponent/DetailsCard';
import './style.scss';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import { RegexValidation } from '../../../../utils/Regex';

export const personalDetails = {
  title: 'Profile Details',
  icon: true,
  note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
  details: [
    {
      label: 'Name',
      value: 'Ashwin Kumar',
    },
    {
      label: 'Employee ID',
      value: '231456789021',
    },
    {
      label: 'Designation',
      value: 'Surrogate Manager',
    },
    {
      label: 'User Role',
      value: 'Manager',
    },
    {
      label: 'Reporting Head',
      value: 'Jack',
    },
    {
      label: 'Channel',
      value: 'DSA',
    },
    {
      label: 'Role Access Type',
      value: 'Initiator',
    },
    {
      label: 'Date Of Joining',
      value: '10/05/2020',
    },
    {
      label: 'State',
      value: 'Tamil Nadu',
    },
    {
      label: 'Zone',
      value: 'South Zone',
    },
    {
      label: 'District',
      value: 'Thirchy',
    },
    {
      label: 'Branch',
      value: 'Thirchy',
    },
  ],
};
export const contactDetails = {
  title: 'Contact Details',
  icon: true,
  note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
  details: [
    {
      label: 'Email Id',
      value: 'Ashwin@abc.com',
    },
    {
      label: 'Mobile No',
      value: '9876543210',
    },
  ],
};
export const Profile = () => {
  const passWord = 'M2P@123';
  const [passwordView, setPasswordView] = useState(passWord);
  const [changePassWord, setChangePassWord] = useState(false);
  const [changePassWordOtp, setChangePassWordOtp] = useState(false);
  const [createPassword, setCreatePassword] = useState(false);
  const [successModel, setSuccessModel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [emailValue, setEmailValue] = useState('');
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

  const handleClickOpen = () => {
    setChangePassWord(true);
  };

  const closeFunction = () => {
    setChangePassWord(false);
    setChangePassWordOtp(false);
    setCreatePassword(false);
    setSuccessModel(false);
  };
  const ChangePasswordHandleCloseSuccess = () => {
    setChangePassWord(false);
    setChangePassWordOtp(true);
  };
  const verifyModel = () => {
    setChangePassWordOtp(false);
    setCreatePassword(true);
  };
  const UpdatehandleCloseSuccess = () => {
    setCreatePassword(false);
    setSuccessModel(true);
  };
  const handleSuccessModel = () => {
    setSuccessModel(false);
  };
  const viewPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderPassWord = () => {
    if (!showPassword) {
      return passwordView.split('').map(() => <>*</>);
    }
    return passwordView;
  };

  const [newPasswordButtonDisabled, setNewPasswordButtonDisabled] =
    useState<boolean>(true);
  const [createValuePassword, setCreateValuePassword] = React.useState<any>({
    password: '',
    confirmPassword: '',
    showPassword: true,
    showConfirmPassword: true,
  });

  const createNewPasswordOnchangeFun =
    (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreateValuePassword({
        ...createValuePassword,
        [prop]: event.target.value,
      });

      setNewPasswordButtonDisabled(
        createValuePassword.password.match(RegexValidation.passwordPattern) &&
          createValuePassword.confirmPassword === createValuePassword.password
          ? false
          : true
      );

      console.log(
        'newPasswordButtonDisabled',
        createValuePassword,
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
    <Stack sx={{ backgroundColor: colors.bgGrey }} className="profileContainer">
      <Stack>
        <Box
          className="headerContainer"
          sx={{
            backgroundColor: colors.white,
          }}
        >
          <Stack>
            <img src={profile_icon} alt="Profile" />
          </Stack>
          <Stack className="headerContent">
            <Typography className="userName">Ashwin Kumar</Typography>
            <Typography
              className="userRole"
              sx={{ color: colors.textGreyHeader }}
            >
              Surrogate Manager,{' '}
              <span style={{ color: 'black' }}>Employee ID</span> : 231456789021
            </Typography>
          </Stack>
        </Box>

        <DetailsCard data={personalDetails} gridColumn={2} />

        <DetailsCard data={contactDetails} gridColumn={2} />

        <Stack
          sx={{
            backgroundColor: colors.white,
            margin: '30px 0',
          }}
        >
          <Stack className="profile-accountHeader">
            <Stack className="profile-header">Account Password</Stack>
            <Stack>
              <Stack className="profile-password">Password</Stack>

              <Stack className="ProfilepasswordStyle">
                <Stack className="passwordDetailsStyle">
                  <Stack className="profile-info-value" sx={{ width: '100px' }}>
                    <Typography>{renderPassWord()}</Typography>
                  </Stack>
                  <Stack>
                    <IconButton
                      sx={{ padding: '0', marginLeft: '20px' }}
                      onClick={viewPassword}
                    >
                      <img src={passwordShow} alt="password" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack>
                  <Button
                    className="profile-changePassword"
                    variant="text"
                    size="small"
                    onClick={handleClickOpen}
                    // sx={{ color: '#0662B7' }}
                  >
                    Change Password
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {changePassWord && (
        <CustomModal
          openSuccess={changePassWord}
          handleCloseSuccess={ChangePasswordHandleCloseSuccess}
          changePasswordTitle={'Change Password'}
          changePasswordTitleMsg={
            'Enter registered mobile number/email ID to receive OTP)'
          }
          ProceedBtn={'Proceed'}
          closeButtonMsg={'Close'}
          closeFunction={closeFunction}
          buttonDisabled={buttonDisabled}
          textareaonchangeFun={textareaonchangeFun}
          emailValue={emailValue}
        />
      )}
      {changePassWordOtp && (
        <CustomModal
          openSuccess={changePassWordOtp}
          handleCloseSuccess={verifyModel}
          changePasswordTitle={'Change Password'}
          changePasswordTitleMsg={'Enter the 6-digit OTP sent to your email ID'}
          ProceedBtn={'Verify'}
          resentOTP={'Resent OTP'}
          resentOTPmsg={
            'Please enter the correct OTP sent to your registered email ID'
          }
          closeButtonMsg={'Back'}
          closeFunction={closeFunction}
        />
      )}
      {/* {console.log('newPasswordButtonDisabled', newPasswordButtonDisabled)} */}
      {createPassword && (
        <CustomModal
          openSuccess={createPassword}
          handleCloseSuccess={UpdatehandleCloseSuccess}
          changePasswordTitle={'Create New Password'}
          ProceedBtn={'Update'}
          resentOTPmsg={
            ' Password should be 8 characters, including 1 Caps, 1 lowercase, 1 numeral.'
          }
          enterNewPassword={'Enter New Password'}
          confirmNewPassword={'Confirm New Password'}
          forgotPassword={'Forgot Password?'}
          closeButtonMsg={'Back'}
          closeFunction={closeFunction}
          textareaonchangeFun={createNewPasswordOnchangeFun}
          handleMouseDownPassword={handleMouseDownPassword}
          handleClickShowPassword={handleClickShowPassword}
          handleClickShowConfirmPassword={handleClickShowConfirmPassword}
          buttonDisabled={newPasswordButtonDisabled}
          createValuePassword={createValuePassword}
        />
      )}
      {successModel && (
        <CustomModal
          openSuccess={successModel}
          handleCloseSuccess={handleSuccessModel}
          successModalTitle={'Password Changed'}
          successModalMsg={'Please log in with new password'}
          btn={' Login'}
          closeFunction={closeFunction}
        />
      )}
    </Stack>
  );
};
