import React from 'react';
import { useState, useEffect } from 'react';
import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Yesbank from '../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import LoginImg from '../../assets/images/LoginImg.svg';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
import wrong_info from '../../../assets/images/wrong_Info.svg';
import IconButton from '@mui/material/IconButton';
import { verification } from '../../../utils/Constants';
import OutlinedInput from '@mui/material/OutlinedInput';
import Poweredby from '../../assets/images/Powered by.svg';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export const NewLogin = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onhandlechangeFun = (e: any) => {
    setEmailValue(e.target.value);
  };
  const loginChange = () => {
    setEmail(true);
    setPassword(true);
  };

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      setPasswordValue(event.target.value);
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
          <Typography
            sx={{
              marginBottom: '15px',
              fontSize: '20px',
              fontWeight: 500,
              paddingY: 3,
              lineHeight: '22px',
              letterSpacing: '0.15%',
            }}
          >
            Login to your account
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box>
            <InputLabel
              sx={{ color: 'black', fontSize: '12px', fontWeight: 500 }}
              required
            >
              Email Id
            </InputLabel>
            <TextField
              required
              error={email ? true : false}
              size="small"
              sx={{
                width: '340px',
                marginTop: '5px',
              }}
              placeholder="Enter Email Id"
              onChange={onhandlechangeFun}
            />
            {email && (
              <Box sx={{ display: 'flex', marginTop: '5px', gap: 1 }}>
                <img
                  style={{ width: '15px', height: '15px' }}
                  src={wrong_info}
                />
                <Typography sx={{ fontSize: '10px', color: '#992D26' }}>
                  Error Mismatch
                </Typography>
              </Box>
            )}
          </Box>

          <Box sx={{ marginY: 3 }}>
            <InputLabel
              sx={{ color: 'black', fontSize: '12px', fontWeight: 500 }}
              required
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              sx={{ width: '340px', marginTop: '5px' }}
              id="outlined-adornment-password"
              placeholder="Enter Password"
              type={values.showPassword ? 'text' : 'password'}
              // value={values.password}
              onChange={handleChange('password')}
              size="small"
              error={password ? true : false}
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
            {password && (
              <Box sx={{ display: 'flex', marginTop: '5px', gap: 1 }}>
                <img
                  style={{ width: '15px', height: '15px' }}
                  src={wrong_info}
                />
                <Typography sx={{ fontSize: '10px', color: '#992D26' }}>
                  Password Wrong
                </Typography>
              </Box>
            )}

            <Typography
              onClick={() => {
                navigate('/login/forgot');
              }}
              sx={{
                color: '#0662B7',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'end',
                paddingTop: '10px',
                cursor: 'pointer',
              }}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              onClick={loginChange}
              fullWidth
              sx={{
                textTransform: 'capitalize',
                '&:disabled': {
                  backgroundColor: '#82B1DB',
                },
              }}
              variant="contained"
              color="secondary"
              disabled={
                emailValue.length > 4 && passwordValue.length > 4 ? false : true
              }
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
