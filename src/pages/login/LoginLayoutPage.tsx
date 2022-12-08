import React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Yesbank from '../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import LoginImg from '../../assets/images/LoginImg.svg';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
import wrong_info from '../../assets/images/wrong_Info.svg';
import IconButton from '@mui/material/IconButton';
import { verification } from '../../utils/Constants';
import OutlinedInput from '@mui/material/OutlinedInput';
import Poweredby from '../../assets/images/Powered by.svg';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export const LoginLayoutPage = () => {
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
  console.log('emailvalue: ', emailValue.length);

  const loginChange = () => {
    setEmail(true);
    setPassword(true);
  };

  const submitButtonAction = () => {
    const content = location?.state?.content ?? verification.VERIFY;
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
    <>
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
             
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
            }}
          >
            

            <Box
              sx={{
                height: '100vh',
                width: '100%',
                background: 'linear-gradient(180.03deg, #0797FF, #005FA4)',
                padding: '30px',
               
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    marginBottom: '15px',
                  }}
                >
                  Surrogate Product for Credit Card Issuers
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: '500',
                    lineHeight: '50px',
                    marginBottom: '40px',
                  }}
                >
                  We Can handle your Credit Card Issuance
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    zIndex: '999',
                  }}
                >
                  Disburse Credit Cards seamlessly! M2P handles your Credit Card
                  issuance end-to-end with assured security and convenience.
                </Typography>
                <Box sx={{ position: 'absolute', bottom: 0, left: '7%' }}>
                  <img width={'450px'} height={'400px'} src={LoginImg} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
             
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: '0.625rem',
              borderBottomLeftRadius: '0.625rem',
            }}
          >
            
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
