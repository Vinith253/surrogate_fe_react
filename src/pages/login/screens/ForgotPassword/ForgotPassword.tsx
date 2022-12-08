import React from 'react';
import { useState, useEffect } from 'react';
import './ForgotPassword.scss';
import { Stack, Box, Typography, Button, TextField } from '@mui/material';
import { verification } from '../../../../utils/Constants';
import { useLocation, useNavigate } from 'react-router-dom';
import Yesbank from '../../../../assets/images/Yes_Bank_SVG_Logo 1.svg';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export const ForgotPassword = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  const submitButtonAction = () => {
    const content = location?.state?.content ?? verification.VERIFY;

    navigate('/login/otp', {
      state: { content: content },
    });
  };

  const onChangeEmail = (e: any) => {
    setEmailText(e.target.value);
    setShowError(false);
  };
  return (
    <Box className="forgotpassword-container">
      <Box className="forgotpassword-heading">
        <Box>
          <img src={Yesbank} alt="logo" />
          <Typography className="forgotpassword-heading-text">
            Surrogate Portal
          </Typography>
        </Box>

        <Box className="forgot-head">
          <Box>
            <Typography className="forgot-head-left">
              Forgot Password
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => navigate('/login')}
              className="forgot-head-right"
            >
              Back
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography className="forgot-text">
            Enter registered mobile number/email ID to receive OTP*
          </Typography>
          <TextField
            onChange={onChangeEmail}
            size="small"
            fullWidth
            placeholder="Enter Email Id"
          />
        </Box>
      </Box>
      <Box className="footer">
        <Button
          onClick={submitButtonAction}
          fullWidth
          variant="contained"
          color="secondary"
          disabled={emailText.length > 4 ? false : true}
          className="footer-button"
          sx={{
            '&:disabled': {
              backgroundColor: '#82B1DB',
            },
          }}
        >
          Proceed
        </Button>
      </Box>
    </Box>
  );
};
