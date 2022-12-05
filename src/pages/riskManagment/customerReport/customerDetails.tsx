import { Stack, Box, Button, Grid, Typography } from "@mui/material";
import { ScreenHeader } from "../../../components/commonComponent/ScreenHeader/ScreenHeader";
import { customerDetailsRiskManagment } from "../riskManagement.const";
import './style.scss';
import DownloadIcon from '../../../assets/icons/download.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import { ReactComponent as ApprovedIcon } from '../../../assets/icons/approved_risk_mngm_icon.svg';

export default function CustomerDetailScreen() {
    const handleEditRoleClick = () => {
        console.log("clicked")
        // isEnabled(false)
        // setRoleName('Executive')
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
                Approved
              </Button>
              <Typography className="icons-container">
          <Stack className="each-icon">
            <img src={DownloadIcon} alt="" className="icons" />
          </Stack>
          <Stack className="each-icon">
            <img src={MailIcon} alt="" className="icons" />
          </Stack>
        </Typography>
            <Button
              sx={{ textTransform: 'capitalize', padding:'0'}}
              color="secondary"
            //   aria-haspopup="true"
              onClick={handleEditRoleClick}
            //   id="basic-button"
            >
              Forced Reject {'>'}
            </Button>
          </Box>
      </Box>
      <div className='viewpage-detail'>
      <div className="underline"></div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          >
            {customerDetailsRiskManagment?.details?.map((eachItem: any, index: number) => {
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
        <Box sx={{width:'70%'}}></Box>
        <Box sx={{width:'30%'}}></Box>
      </Box>

        </Stack></Stack>
  );
}
