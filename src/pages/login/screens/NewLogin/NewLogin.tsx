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
import './NewLogin.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Yesbank from '../../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import LoginImg from '../../../../assets/images/LoginImg.svg';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
import wrong_info from '../../../../assets/images/wrong_Info.svg';
import IconButton from '@mui/material/IconButton';
import { verification } from '../../../../utils/Constants';
import OutlinedInput from '@mui/material/OutlinedInput';
import Poweredby from '../../../../assets/images/Powered by.svg'


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
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const onhandlechangeFun = (e: any) => {
    setEmailValue(e.target.value);
  };
  const loginChange = () => {
    setEmail(true);
    setPassword(true);
  };

  
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
    <Box className='newlogin-container'
      
    >
      <Box className='newlogin-header'
       
      >
        <Box>
          <img src={Yesbank} alt="logo" />
          <Typography className='newlogin-logo-text'
           
          >
            Surrogate Portal
          </Typography>
        </Box>

        <Box>
          <Typography className='newlogin-heading'
            
          >
            Login to your account
          </Typography>
        </Box>

        <Box className='newlogin-content' >
          <Box>
            <InputLabel className='newlogin-content-text'
              
              required
            >
              Email Id
            </InputLabel>
            <TextField
              required
              error={email ? true : false}
              size="small"
              className='newlogin-content-textfield'
              
              placeholder="Enter Email Id"
              onChange={onhandlechangeFun}
            />
            {email && (
              <Box className='newlogin-error' >
                <img className='newlogin-error-img'
                  // style={{ width: '0.9375rem', height: '0.9375rem' }}
                  src={wrong_info}
                />
                <Typography className='newlogin-error-msg' >
                  Error Mismatch
                </Typography>
              </Box>
            )}
          </Box>

          <Box className='newlogin-password' >
            <InputLabel className='newlogin-password-text'
          
              required
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
            className='newlogin-password-field'
            
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
                    {values.showPassword ?   <Visibility />: <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {password && (
              <Box className='newlogin-password-error' >
                <img className='newlogin-password-error-img'
                  // style={{ width: '0.9375rem', height: '0.9375rem' }}
                  src={wrong_info}
                />
                <Typography  className='newlogin-password-error-msg' sx={{ fontSize: '0.625rem', color: '#992D26' }}>
                  Password Wrong
                </Typography>
              </Box>
            )}

            <Typography className='newlogin-forgotpassword'
              onClick={() => {
                navigate('/login/forgot');
              }}
              
            >
              Forgot Password?
            </Typography>
          </Box>

          <Box className='footer' >
            <Button className='footer-text'
              onClick={loginChange}
              fullWidth
              sx={{
              
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
      <Box className='footer-img' >
        <img src={Poweredby} />
      </Box>
    </Box>
  );
};
