import { Box, Typography, TextField, Button, capitalize } from '@mui/material';
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
import LoginImg from '../../../assets/images/LoginImg.svg';
import Poweredby from '../../../assets/images/Powered by.svg';
import Yesbank from '../../../assets/images/Yes_Bank_SVG_Logo 1.svg';
import { verification } from '../../../utils/Constants';
import info_icon from '../../../assets/images/info_icon.svg';
import wrong_Info from '../../../assets/images/wrong_Info.svg';

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
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const updateTimer = (value: number) => {
    setEnableResendButton(value === 0 ? true : false);
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

          {/* <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '14px',
                    marginBottom: '5px',
                  }}
                >
                  Enter registered mobile number/email ID to receive OTP
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Enter Email Id"
                />
              </Box> */}
          <Box>
            <Box style={{ backgroundColor: 'success.light' }}>
              {/* <Stack> */}
              <Typography sx={CommonStyle.authLayoutTitleText}>
                OTP VERIFICATION
              </Typography>
              {/* </Stack> */}
              <Typography
                sx={[
                  CommonStyle.authLayoutDescriptionText,
                  { fontSize: '14px' },
                ]}
              >
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
              <Box sx={{marginTop:'25px',display:'flex',gap:2,alignItems:'center'}} >
                <img src={wrong_Info} />
                <Typography  sx={{fontSize:'10px',fontWeight:'400',color:'#992D26'}} >Please enter the correct OTP sent to your registered Email ID</Typography>
              </Box>
            </Box>
           
          </Box>
          <Box sx={{ marginTop: '10%' }}>
            <Button
              // onClick={submitButtonAction}
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
            <Box sx={{ display: 'flex', gap: 2, marginTop: '10px',alignItems:'center' }}>
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
