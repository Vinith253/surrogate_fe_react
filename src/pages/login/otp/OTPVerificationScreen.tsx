import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
// import OTPInputContainer from '../../userManagement/orgStructure/screens/OrgReview/otpVerificationScreen/OTPInputContainer';
import OTPInputContainer from './OTPInputContainer';
import { CommonColor } from '../../../commonStyle/CommonColor';
import { CommonStyle } from '../../../commonStyle/CommonStyle';
import CustomButton from '../../../components/commonComponent/customButton/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import TimerComponent from '../../../utils/Timer';
// import LoginImg from '../../../../../../assets/images/LoginImg.svg';
import IconButton from '@mui/material/IconButton';
import LoginImg from '../../../assets/images/LoginImg.svg';
import Poweredby from '../../../assets/images/Powered by.svg';
import Yesbank from '../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import { verification } from '../../../utils/Constants';
import info_icon from '../../../assets/images/info_icon.svg';
import wrong_Info from '../../../assets/images/wrong_Info.svg';
import { LinearScale, Visibility, VisibilityOff } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';

interface State {
  amount: string;
  password: string;
  confirmPassword:string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
  showConfirmPassword:boolean;
}

export default function OtpVerificationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [enableResendButton, setEnableResendButton] = useState<boolean>(false);
  const [mobileNo, setMobileNo] = useState<String>('+91 *******210');
  const [otp, setOtp] = useState<number>(0);
  // const
  const [showError, setShowError] = useState<boolean>(false);
  const [otpStatus, setOtpStatus] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validOtp, setValidOtp] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const updateTimer = (value: number) => {
    setEnableResendButton(value === 0 ? true : false);
  };

  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    confirmPassword:'',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword:false,
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
    setValidOtp(true);
  };

  const submitButtonAction = () => {
    const content = location?.state?.content ?? verification.VERIFY;

    navigate('/verification', {
      state: { content: content },
    });
  };

  useEffect(() => {
    updateButtonStatus();
  }, [otp]);

  const updateButtonStatus = () => {
    setButtonDisabled(otp && String(otp).length === 6 ? false : true);
  };

  const onChangeOtp = (e: any) => {
    setOtp(e);
    setShowError(false);
  };

  return (
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
              marginBottom: '10px',
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
              marginBottom: '25px',
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
          <Box sx={{ position: 'absolute', bottom: 0, left: '5%' }}>
            <img width={'480px'} src={LoginImg} />
          </Box>
        </Box>
      </Box>
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
              }}
            >
              Surrogate Portal
            </Typography>
          </Box>

          {validOtp && (
            <Box>
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
                    Enter New Password
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{ textTransform: 'capitalize', color: '#0662B7' }}
                  >
                    Back
                  </Button>
                </Box>
              </Box>
              <Box>
                <Box sx={{ marginY: 3 }}>
                  <InputLabel required htmlFor="outlined-adornment-password">
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box sx={{ marginY: 3 }}>
                  <InputLabel required htmlFor="outlined-adornment-password">
                    Confirm New Password
                  </InputLabel>
                  <OutlinedInput
                    sx={{ width: '340px' }}
                    id="outlined-adornment-password"
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
            </Box>
          )}

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
              <Button sx={{ textTransform: 'capitalize', color: '#0662B7' }}>
                Back
              </Button>
            </Box>
          </Box>

          <Box>
            <Box style={{ backgroundColor: 'success.light' }}>
              <Typography sx={CommonStyle.authLayoutTitleText}>
                OTP VERIFICATION
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                Enter the 6-digit OTP sent to your email ID
              </Typography>
              <OTPInputContainer
                otpError={showError}
                otpValue={otp}
                onOTPChange={onChangeOtp}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <TimerComponent time={180} callBackFunction={updateTimer} />
                </Box>
                <Box>
                  <Typography
                    onClick={() => console.log('resend otp clicked')}
                    sx={
                      !enableResendButton
                        ? CommonStyle.otpTextColorFaded
                        : CommonStyle.otpTextColor
                    }
                  >
                    Resend OTP
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: '25px',
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <img src={wrong_Info} />
                <Typography
                  sx={{ fontSize: '10px', fontWeight: '400', color: '#992D26' }}
                >
                  Please enter the correct OTP sent to your registered Email ID
                </Typography>
              </Box>
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
              Proceed
            </Button>
            {}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                marginTop: '10px',
                alignItems: 'center',
              }}
            >
              <img src={info_icon} />
              <Typography
                sx={{ fontSize: '10px', fontWeight: 400, color: ' #898989' }}
              >
                Please enter the correct OTP sent to your registered email ID
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
        <img src={Poweredby} />
      </Box>
    </Box>
  );
}
