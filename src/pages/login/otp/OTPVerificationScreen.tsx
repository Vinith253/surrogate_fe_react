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
import info_grey from '../../../assets/images/info_grey.svg'
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
  const [forgetEmail, setForgetEmail] = useState(true);
  const [emailText, setEmailText] = useState(0);
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
    <Box className="otp-container">
      <Box className="otp-head-container">
        <Box className="otp-logo-container">
          <Box>
            <img src={Yesbank} alt="logo" />
            <Typography className="otp-logo-text">Surrogate Portal</Typography>
          </Box>

          <>
            <Box className="otp-forgot-box">
              <Box className="otp-forgot-left">
                <Typography>Forgot Password</Typography>
              </Box>
              <Box>
                <Button
                  onClick={() => navigate('/login/forgot')}
                  className="otp-forgot-right"
                >
                  Back
                </Button>
              </Box>
            </Box>

            <Box>
              <Box
                className="otp-6-digit"
                style={{ backgroundColor: 'success.light' }}
              >
                <Typography className="otp-6-digit-text">
                  Enter the 6-digit OTP sent to your email ID
                </Typography>
                <OTPInputContainer
                  otpError={showError}
                  otpValue={otp}
                  onOTPChange={onChangeOtp}
                />
                <Box className="otp-timer">
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
                {showError ? (
                  <Box className="otp-error-img">
                    <img src={wrong_Info} />
                    <Typography className="otp-error-text">
                      Please enter the correct OTP sent to your registered Email
                      ID
                    </Typography>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
              <Box className="otp-btn-box">
                <Button
                  className="otp-btn"
                  // onClick={submitPassword}
                  onClick={() => navigate('/login/newpassword')}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  disabled={buttonDisabled}
                  sx={{
                    '&:disabled': {
                      backgroundColor: '#82B1DB',
                    },
                  }}
                >
                  Verify
                </Button>
                {}
                <Box className="otp-info">
                  <img className="otp-info-img" src={info_grey} />
                  <Typography className="otp-info-text">
                    Please enter the correct OTP sent to your registered email
                    ID
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        </Box>
      </Box>
      <Box className="footer-img">
        <img src={Poweredby} />
      </Box>
    </Box>
  );
}
