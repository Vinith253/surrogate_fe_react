import React from 'react';
import { useState, useEffect } from 'react';
import './loginlayout.scss';
import { Box, Typography, Grid } from '@mui/material';
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
      <Grid container className="login-layout-page" style={{ height: '100%' }}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Box className="layout-container">
            <Box className="layout-head">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <Box sx={{ width: '90%' }}>
                  <Typography className="layout-heading">
                    Surrogate Product for Credit Card Issuers
                  </Typography>
                  <Typography className="layout-heading-text">
                    <Grid xs={12}>We Can handle</Grid>
                    <Grid xs={12}>your Credit Card Issuance</Grid>
                  </Typography>
                  <Typography className="layout-text">
                    Disburse Credit Cards seamlessly! M2P handles your Credit
                    Card issuance end-to-end with assured security and
                    convenience.
                  </Typography>
                </Box>
                <Box className="layout-image">
                  <img width={'90%'} height={'100%'} src={LoginImg} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Box className="layout-outlet">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
