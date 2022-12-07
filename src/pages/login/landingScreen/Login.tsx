import React from 'react';
import { useState, useEffect } from 'react';
import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Card,
  Grid,
  Divider,
  Checkbox,
  InputLabel,
  InputAdornment,
  FormHelperText,
} from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import wrong_info from '../../../assets/images/wrong_Info.svg';
import IconButton from '@mui/material/IconButton';
import Yesbank from '../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import LoginImg from '../../../assets/images/LoginImg.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
import Poweredby from '../../../assets/images/Powered by.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import EditIcon from '../../../../../assets/images/edit_card.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Modal from '@mui/material/Modal';
import Info_Icon from '../../../../../assets/images/info_icon.svg';
import TypoText from '../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../components/commonComponent/CustomText/Info';
import TypographyHead from '../../../components/commonComponent/CustomText/Head';
import TypographySubTitle from '../../../components/commonComponent/CustomText/Typography';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
// import { verification } from '../../../../../utils/Constants';
import { verification } from '../../../utils/Constants';
import OtpVerification from '../otp/OTPVerificationScreen';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import OtpVerification from '../OrgReview/otpVerificationScreen/OTPVerificationScreen';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export const LoginPage = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [otpVerify, setOtpVerify] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [forgetEmail, setForgetEmail] = useState(true);
  const [emailText, setEmailText] = useState(0);
  const [showError, setShowError] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onhandlechangeFun = (e: any) => {
    setEmailValue(e.target.value);

    // if (emailValue.length > 4) {
    //   setButtonDisabled(false);
    // }
  };
  console.log('emailvalue: ', emailValue.length);

  const loginChange = () => {
    setEmail(true);
    setPassword(true);
  };

  const submitButtonAction = () => {
    const content = location?.state?.content ?? verification.VERIFY;

    navigate('/login/verification', {
      state: { content: content },
    });
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

  useEffect(() => {
    updateEmailButtonStatus();
  }, [emailText]);

  const updateEmailButtonStatus = () => {
    setForgetEmail(emailText && String(emailText).length === 6 ? false : true);
    // setButtonDisabled(false)
  };
  const onChangeEmail = (e: any) => {
    setEmailText(e);
    setShowError(false);
  };

  // useEffect(() => {
  //   updateButtonStatus();
  // }, [otp]);

  // const updateButtonStatus = () => {
  //   setButtonDisabled(otp && String(otp).length === 6 ? false : true);
  // };

  return (
    <Stack>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            height: '100vh',
            width: '50%',
            background: 'linear-gradient(180.03deg, #0797FF, #005FA4)',
            padding: '30px',
            // backgroundImage:`url(${LoginImage})`
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
                zIndex: 99,
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

        {forgetPassword ? (
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

              <Box
                sx={{
                  display: 'flex',
                  marginY: '15px',
                  alignItem: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
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
            <Box sx={{ marginTop: '20%' }}>
              <Button
                onClick={submitButtonAction}
                fullWidth
                variant="contained"
                color="secondary"
                disabled={buttonDisabled}
                sx={{
                  textTransform: 'capitalize',
                  color: 'white',
                  width: '340px',
                  '&:disabled': {
                    backgroundColor: '#82B1DB',
                  },
                }}
              >
                Proceed
              </Button>
            </Box>
          </Box>
        ) : (
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
                  {/* {password? () : ()} */}
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
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
                      emailValue.length > 4 && passwordValue.length > 4
                        ? false
                        : true
                    }
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
          <img src={Poweredby} />
        </Box>
      </Box>
    </Stack>
  );
};
