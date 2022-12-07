import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, Typography, Button, TextField } from '@mui/material';
import { verification } from '../../../utils/Constants';
import { useLocation, useNavigate } from 'react-router-dom';
import Yesbank from '../../../assets/images/Yes_Bank_SVG_Logo 1.svg';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export const ForgotPassword = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const [emailText, setEmailText] = useState(0);
  const [showError, setShowError] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  const submitButtonAction = () => {
    const content = location?.state?.content ?? verification.VERIFY;

    navigate('/login/verification', {
      state: { content: content },
    });
  };

  const onChangeEmail = (e: any) => {
    setEmailText(e);
    setShowError(false);
  };
  return (
    <Box
      sx={{
        height: '70%',
        width: '40vw',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '30px',

        // borderRadius: '10px',
        // boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingX: '30px',
          // backgroundColor: 'red',
          justifyContent: 'center',
        }}
      >
        <Box>
          <img src={Yesbank} alt="logo" />
          <Typography
            sx={{
              color: '#004C8F',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '16.8px',
              letterSpacing: '3px',
            }}
          >
            Surrogate Portal
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            marginY: '20px',
            alignItem: 'center',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          <Box>
            <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>
              Forgot Password
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => setForgetPassword(false)}
              sx={{
                textTransform: 'capitalize',
                color: '#0662B7',
                alignItems: 'center',
              }}
            >
              Back
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '14px',
              marginBottom: '5px',
            }}
          >
            Enter registered mobile number/email ID to receive OTP*
          </Typography>
          <TextField
            onChange={onChangeEmail}
            size="small"
            fullWidth
            sx={{ fontSize: '10px' }}
            placeholder="Enter Email Id"
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: '20%', marginLeft: '40px' }}>
        <Button
          onClick={submitButtonAction}
          fullWidth
          variant="contained"
          color="secondary"
          disabled={buttonDisabled}
          sx={{
            textTransform: 'capitalize',
            color: 'white',
            width: '320px',

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
