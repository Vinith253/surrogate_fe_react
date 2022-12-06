import { Stack, Box, Button, Grid, Typography } from "@mui/material";
import { ScreenHeader } from "../../../components/commonComponent/ScreenHeader/ScreenHeader";
import { riskChannnelData, riskMngmtViewData } from "../riskManagement.const";
import './style.scss';
import DownloadIcon from '../../../assets/icons/download.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import { ReactComponent as PassIcon } from '../../../assets/icons/risk_mgmt_pass.svg';
import { ReactComponent as ApprovedIcon } from '../../../assets/icons/approved_risk_mngm_icon.svg';
import { ReactComponent as RejectedIcon } from '../../../assets/icons/risk_rejected_icon.svg';
import { ReactComponent as ReferIcon } from '../../../assets/icons/risk_refer_icon.svg';
import DetailsCard from "../../../components/commonComponent/DetailsCard";
import { useLocation, useNavigate } from "react-router-dom";
import { FooterButton } from "../../../components/commonComponent/FooterButton/FooterButton";
import { RiskMngmtAccordian } from "../../../components/commonComponent/RiskMngmtAccordian";
import { useState, useEffect } from "react";

export default function CustomerDetailScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [statusText, setStatusText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [displayCategories, setDisplayCategories] = useState<any>(state?.scoreData);
  const [cashFlowData, setCashlowData] = useState<any>(state?.cashFlowData);

    const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (state) {
      console.log("state.data", state.scoreData)
      setStatusText(state.statusText)
      setButtonText(state.modalText)
      // isEnabled(state.isView)
    }
  }, [state]);


    const handleEditRoleClick = () => {
        console.log("clicked")
        // isEnabled(false)
        // setRoleName('Executive')
      }

      var bgColor = ''
      var txtColor = ''

      if(cashFlowData.customerCreditScore >= 750) {
        bgColor= '#F1F9F3'
        txtColor='#32A64D'
      }
      else if(cashFlowData.customerCreditScore < 750 && cashFlowData.customerCreditScore > 450) {
        bgColor= '#FEFBF3'
        txtColor='#E4AC04'
      }
      else if(cashFlowData.customerCreditScore < 450) {
        bgColor= '#FDF1F2'
        txtColor='#E63946'
      }

  return (
    <Stack className="risk-mngmt-customer-details">
    <Stack>
    <Box className="upper-head-container">
        <Box className="create-header-container">
        <ScreenHeader
          title="Customer Details / Application No : 1234567890"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer senectus mattis."
          showBackButton={true}
        />
        <Box sx={{display:'flex',alignItems:'flex-start'}}>
          {statusText === 'Approved' &&
        <Button
                startIcon={<ApprovedIcon />}
                sx={{
                  fontSize: '12px',
                  color: '#1C592A',
                  backgroundColor: '#E3F3E6',
                  textTransform: 'none',
                  height:'24px',
                }}
              >
                {statusText}
              </Button> }
              {statusText === 'Rejected' &&
        <Button
                startIcon={<RejectedIcon />}
                sx={{
                  fontSize: '12px',
                  color: '#992D26',
                  backgroundColor: '#FCE4E5',
                  textTransform: 'none',
                  height:'24px',
                }}
              >
                {statusText}
              </Button> }
              {statusText === 'Refer' &&
        <Button
                startIcon={<ReferIcon />}
                sx={{
                  fontSize: '12px',
                  color: '#997F31',
                  backgroundColor: '#FBF2D7',
                  textTransform: 'none',
                  height:'24px',
                }}
              >
                {statusText}
              </Button> }
              <Typography className="icons-container">
          <Stack className="each-icon">
            <img src={DownloadIcon} alt="" className="icons" />
          </Stack>
          <Stack className="each-icon">
            <img src={MailIcon} alt="" className="icons" />
          </Stack>
        </Typography>
        {buttonText.length > 0 && 
            <Button
              sx={{ textTransform: 'capitalize', padding:'0'}}
              color="secondary"
            //   aria-haspopup="true"
              onClick={handleEditRoleClick}
            //   id="basic-button"
            >
              {buttonText} {'>'}
            </Button> }
          </Box>
      </Box>
      <div className='viewpage-detail'>
      <div className="underline"></div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          >
            {displayCategories?.details?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={3} key={index}>
                  <div className="each-info">
                    <div className="info-label">{eachItem?.label ?? '--'}</div>
                    <div className="info-value">{eachItem?.value ?? '--'}</div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          </div>
      </Box>

      <Box className="credit-score-outer-container">
        <Box sx={{width:'48%', backgroundColor:'white', padding:'24px 32px 24px 32px',borderRadius:'4px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)'}}>
        <Box>
         <Typography sx={{fontSize:'16px', marginBottom:'8px'}}>User Cashflow</Typography>
         <Typography sx={{fontSize:'16px', color:'#656769'}}>Lorem ipsum dolor sit amet consectetur. Phasellus in amet netus at ante. Nunc quam interdum odio consectetur. Fermentum iaculis.</Typography>
         </Box>
        <div className="underline"></div>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Typography sx={{fontSize:'20px'}}>Score {cashFlowData.userCashFlowScore}{'/'}{cashFlowData.userCashFlowTotal}</Typography>
          <Box sx={{display:'flex', flexDirection:'row', gap:'16px'}}>
          {cashFlowData.userCashFlowScore/cashFlowData.userCashFlowTotal >= 0.5 ? 
          
          <>
          <Typography sx={{fontSize:'16px', color:'#32A64D'}}>Pass</Typography>
          <PassIcon/></> : 
          
          <>
          <Typography sx={{fontSize:'16px', color:'#E63946'}}>Fail</Typography>
          <PassIcon/></>
          
          }
          
          </Box>
          </Box>
        </Box>

        <Box sx={{width:'48%', backgroundColor:'white', padding:'24px 32px 24px 32px',marginTop:'24px', borderRadius:'4px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)'}}>
        <Box>
         <Typography sx={{fontSize:'16px', marginBottom:'8px'}}>User Cashflow</Typography>
         <Typography sx={{fontSize:'16px', color:'#656769'}}>Lorem ipsum dolor sit amet consectetur. Phasellus in amet netus at ante. Nunc quam interdum odio consectetur. Fermentum iaculis.</Typography>
         </Box>
        <div className="underline"></div>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Typography sx={{fontSize:'20px'}}>Score {cashFlowData.userCreditProfileScore}{'/'}{cashFlowData.userCreditProfileTotal}</Typography>
          <Box sx={{display:'flex', flexDirection:'row', gap:'16px'}}>
          {cashFlowData.userCreditProfileScore/cashFlowData.userCreditProfileTotal >= 0.5 ?
          <>
           <Typography sx={{fontSize:'16px', color:'#32A64D'}}>Pass</Typography>
           <PassIcon/>
           </>
          :
          <>
           <Typography sx={{fontSize:'16px', color:'#E63946'}}>Fail</Typography>
           <PassIcon/>
           </>
          }
          </Box>
          </Box>
        </Box>

        <Box sx={{width:'30%'}}></Box>
      </Box>
      
      <Box className="refer-value-container">
          <Box sx={{backgroundColor:'#FEFBF3', height:'132px', borderRadius:'12px', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', width:'100%'}}>
            <Typography sx={{fontSize:'16px'}}>Bank - Refer Value</Typography>
            <Typography sx={{fontSize:'34px', color:'#D78320'}}>700 - 749</Typography>
          </Box>
          <Box sx={{backgroundColor: bgColor, height:'132px', borderRadius:'12px', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', width:'100%'}}>
            <Typography sx={{fontSize:'16px'}}>Customers Credit Score</Typography>
            <Typography sx={{fontSize:'34px', color: txtColor}}>{cashFlowData.customerCreditScore}</Typography>
          </Box>
      </Box>

      <Stack>
          <DetailsCard data={riskChannnelData} gridColumn={3} />
      </Stack>

      <Stack sx={{marginTop:'32px', marginBottom:'80px'}}>
      <RiskMngmtAccordian
      data={riskMngmtViewData}
      isViewPage={false}
      />
      </Stack>

      <FooterButton
        submit='Close'
        handleSubmitClick={goBack}
        />

        </Stack></Stack>
  );
}
