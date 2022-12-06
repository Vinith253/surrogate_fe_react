import { Box, Grid, Typography, Button } from '@mui/material';
import { ReactComponent as StatusPassIcon } from '../../../../assets/icons/risk_status_pass.svg';
import { ReactComponent as ApprovedIcon } from '../../../../assets/icons/approved_risk_mngm_icon.svg';

type props = {
  item?: any;
};

export default function UserCashFlowBox({ item }: props) {
  return (
    <>
      {item?.showHeader && (
        <Box sx={{ height: '40px', borderBottom: '2px solid #F0F2F5' }}>
          <Grid
            container
            item
            key={item.id}
            className="grid-style"
            columnGap={10}
          >
            <Box sx={{ width: '163px'}}>
            <Typography sx={{fontSize:'14px', fontWeight:'bold'}}>Criteria</Typography></Box>
            <Box sx={{ width: '150px'}}>
            <Typography sx={{fontSize:'14px', fontWeight:'bold'}}>Customers Eligibility</Typography></Box>
            <Box sx={{ width: '150px'}}>
            <Typography sx={{fontSize:'14px', fontWeight:'bold'}}>Customers Eligibility</Typography></Box>
            <Box sx={{ width: '150px'}}>
            <Typography sx={{fontSize:'14px', fontWeight:'bold'}}>Status</Typography></Box>
            <Box sx={{ width: '100px'}}>
            <Typography sx={{fontSize:'14px', fontWeight:'bold'}}>Score</Typography></Box>
          </Grid>
        </Box>
      )}
      {item?.data?.map((item: any) => {
        return (
          <Box
            sx={{
              borderBottom: '2px solid #F0F2F5',
              padding: '24px 0px 24px 0px',
            }}
          >
            <Grid
              container
              item
              key={item.id}
              className="grid-style"
              columnGap={10}
            >
              <Box sx={{ width: '163px' }}>
                <Typography sx={{ fontSize: '12px'}}>
                  {item?.criteriaValue}
                </Typography>
              </Box>
              <Box sx={{ width: '150px'}}>
              <Typography sx={{ fontSize: '12px' }}>
                  {item?.customerEligibility1Value}
                </Typography>
                </Box>
                <Box sx={{ width: '150px'}}>
                <Typography sx={{ fontSize: '12px' }}>
                  {item?.customerEligibility2Value}
                </Typography>
                </Box>

              {item?.passedStatus && (
                <Box sx={{ display: 'flex', gap: '14px' }}>
                  <StatusPassIcon width={'16px'} />
                  <Typography sx={{ fontSize: '12px' }}>
                    {item?.matchedDisplayText}
                  </Typography>
                </Box>
              )}
              <Box sx={{ width: '100px' }}>
              <Typography sx={{ fontSize: '12px' }}>
                  {item?.scoreValue}
                </Typography>
                </Box>
            </Grid>
          </Box>
        );
      })}
    </>
  );
}
