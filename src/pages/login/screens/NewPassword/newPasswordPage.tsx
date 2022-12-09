import React from 'react';
import { useEffect, useState } from 'react';
import './Newpassword.scss';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import Yesbank from '../../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { useLocation, useNavigate } from 'react-router-dom';
import info_icon from '../../../../assets/images/info_icon.svg';
import info_grey from '../../../../assets/images/info_grey.svg';
import Poweredby from '../../../../assets/images/Powered by.svg';

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
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      setNewPassword(event.target.value);
    };
  const handleConfirmPasswordChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      setConfirmPassword(event.target.value);
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

  const handleDisableBtn = () => {
    if (newPassword === confirmPassword) {
      setButtonDisabled(false);
    }
  };

  return (
    <Box
      className="newpassword-container"
      
    >
      <Box
        className="newpassword-head"
        
      >
        <Box>
          <img src={Yesbank} alt="logo" />
          <Typography
            className="logo-text"
            
          >
            Surrogate Portal
          </Typography>
        </Box>

        <Box>
          <Box
            className="password-header"
            
          >
            <Box className="head-left">
              <Typography >
                Enter New Password
              </Typography>
            </Box>
            <Box >
              <Button className="head-right"  
              onClick={()=>navigate('/login/otp')} >
                Back
              </Button>
            </Box>
          </Box>
          <Box className="text-field">
            <Box className="text-new-password-container">
              <InputLabel
                className="text-new-password"
                
                required
                htmlFor="outlined-adornment-password"
              >
                Enter New Password
              </InputLabel>
              <OutlinedInput
                className="input-new-password"
                
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box className='text-confirm-password-container' >
              <InputLabel
                className="text-confirm-password"
                sx={{ color: 'black' }}
                required
                htmlFor="outlined-adornment-confirm-password"
              >
                Confirm New Password
              </InputLabel>
              <OutlinedInput
                className="input-confirm-password"
                sx={{ width: '340px' }}
                id="outlined-adornment-confirm-password"
                placeholder="Re-enter New Password"
                type={values.showConfirmPassword ? 'text' : 'password'}
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
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          </Box>
          <Box className="footer">
            <Button
              disabled={
                newPassword === confirmPassword &&
                newPassword !== '' &&
                confirmPassword !== ''
                  ? false
                  : true
              }
              onClick={submitPassword}
              fullWidth
              variant="contained"
              color="secondary"
              className="footer-button"
              sx={{
                '&:disabled': {
                  backgroundColor: '#82B1DB',
                },
              }}
            >
              Update
            </Button>
            {}
            <Box className="footer-info">
              <img src={info_grey} />
              <Typography className="footer-info-message">
                Password should be 8 characters, including 1 caps, 1 lowercase,
                1 numeral.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='footer-img'>
        <img src={Poweredby} />
      </Box>
    </Box>
  );
};
