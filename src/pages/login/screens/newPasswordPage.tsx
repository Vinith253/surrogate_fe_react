import React from 'react';
import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import Poweredby from '../../../assets/images/Powered by.svg';
import Yesbank from '../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { useLocation, useNavigate } from 'react-router-dom';
import info_icon from '../../../assets/images/info_icon.svg';

interface State {
  amount: string;
  password: string;
  confirmPassword: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

export const NewPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [validOtp, setValidOtp] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    confirmPassword: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword: false,
  });
  const handlePasswordChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleConfirmPasswordChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const submitPassword = () => {
    // setValidOtp(true);
    if (!showError) {
      setShowError(true);
    }
    if (showError) {
      setValidOtp(true);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '50%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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

        <Box>
          <Box
            sx={{
              display: 'flex',
              marginY: '20px',
              paddingTop: '10px',
              alignItem: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>
                Enter New Password
              </Typography>
            </Box>
            <Box>
              <Button sx={{ textTransform: 'capitalize', color: '#0662B7' }}>
                Back
              </Button>
            </Box>
          </Box>
          <Box>
            <Box sx={{ marginY: 3 }}>
              <InputLabel
                sx={{ color: 'black' }}
                required
                htmlFor="outlined-adornment-password"
              >
                Enter New Password
              </InputLabel>
              <OutlinedInput
                sx={{ width: '340px' }}
                id="outlined-adornment-password"
                placeholder="Enter New Password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handlePasswordChange('password')}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box sx={{ marginY: 3 }}>
              <InputLabel
                sx={{ color: 'black' }}
                required
                htmlFor="outlined-adornment-confirm-password"
              >
                Confirm New Password
              </InputLabel>
              <OutlinedInput
                sx={{ width: '340px' }}
                id="outlined-adornment-confirm-password"
                placeholder="Re-enter New Password"
                type={values.showConfirmPassword ? 'text' : 'confirmPassword'}
                value={values.confirmPassword}
                onChange={handleConfirmPasswordChange('confirmPassword')}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: '10%' }}>
            <Button
              onClick={submitPassword}
              fullWidth
              variant="contained"
              color="secondary"
              sx={{
                textTransform: 'capitalize',
                color: 'white',
                width: '340px',
              }}
            >
              Update
            </Button>
            {}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                marginTop: '20px',
                alignItems: 'center',
                width: '75%',
              }}
            >
              <img src={info_icon} />
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 400,
                  color: ' #898989',
                }}
              >
                Password should be 8 characters, including 1 caps, 1 lowercase,
                1 numeral.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
