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
import './otp.scss';
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
  confirmPassword: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

export default function OtpVerificationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [enableResendButton, setEnableResendButton] = useState<boolean>(false);
  const [mobileNo, setMobileNo] = useState<String>('+91 *******210');
  const [forgetEmail, setForgetEmail] = useState(true)
  const [emailText,setEmailText] = useState(0)
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
            marginLeft:'100%'
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
                letterSpacing:'3px',
              }}
            >
              Surrogate Portal
            </Typography>
          </Box>

         
            <>
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
                    sx={{ textTransform: 'capitalize', color: '#0662B7' }}
                  >
                    Back
                  </Button>
                </Box>
              </Box>

              <Box>
                <Box style={{ backgroundColor: 'success.light' }}>
                  <Typography sx={{ fontSize: '14px', marginBottom: '30px' }}>
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
                      <TimerComponent
                        time={180}
                        callBackFunction={updateTimer}
                      />
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
                  {showError ? (
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
                        sx={{
                          fontSize: '10px',
                          fontWeight: '400',
                          color: '#992D26',
                        }}
                      >
                        Please enter the correct OTP sent to your registered
                        Email ID
                      </Typography>
                    </Box>
                  ) : (
                    ''
                  )}
                </Box>
                <Box sx={{ marginTop: '15%' }}>
                  <Button
                    onClick={submitPassword}
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
                      }
                    }}
                  >
                    Verify
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
                    <img style={{color:'#AFAEAF'}} src={info_icon} />
                    <Typography
                      sx={{
                        fontSize: '10px',
                        fontWeight: 400,
                        color: ' #898989',
                      }}
                    >
                      Please enter the correct OTP sent to your registered email
                      ID
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
        <img src={Poweredby} />
      </Box>
    </Box>
  );
}
