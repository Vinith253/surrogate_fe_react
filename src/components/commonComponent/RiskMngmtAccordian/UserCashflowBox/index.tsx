import { Box, Grid, Typography } from '@mui/material';
import { ReactComponent as StatusPassIcon } from '../../../../assets/icons/risk_status_pass.svg';
import { ReactComponent as StatusFailIcon } from '../../../../assets/icons/risk_mgmt_expand_fail.svg';

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
            className="risk-accordian-grid-style"
            columnGap={10}
          >
            <Box sx={{ width: '150px' }}>
              <Typography className="cashflow-text">Criteria</Typography>
            </Box>
            <Box sx={{ width: '150px' }}>
              <Typography className="cashflow-text">
                Customers Eligibility
              </Typography>
            </Box>
            <Box sx={{ width: '150px' }}>
              <Typography className="cashflow-text">
                Customers Eligibility
              </Typography>
            </Box>
            <Box sx={{ width: '200px' }}>
              <Typography className="cashflow-text">Status</Typography>
            </Box>
            <Box sx={{ width: '50px'}}>
              <Typography className="cashflow-text">Score</Typography>
            </Box>
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
              className="risk-accordian-grid-style"
              columnGap={10}
            >
              <Box sx={{ width: '150px' }}>
                <Typography className="cashflow-value-text">
                  {item?.criteriaValue}
                </Typography>
              </Box>
              <Box sx={{ width: '150px' }}>
                <Typography className="cashflow-value-text">
                  {item?.customerEligibility1Value}
                </Typography>
              </Box>
              <Box sx={{ width: '150px' }}>
                <Typography className="cashflow-value-text">
                  {item?.customerEligibility2Value}
                </Typography>
              </Box>

              <Box sx={{ width: '200px' }}>
                {item?.passedStatus ? (
                  <Box className="cashflow-status-box">
                    <StatusPassIcon width={'16px'} />
                    <Typography className="cashflow-value-text">
                      {item?.matchedDisplayText}
                    </Typography>
                  </Box>
                ) : (
                  <Box className="cashflow-status-box">
                    <StatusFailIcon width={'16px'} />
                    <Typography className="cashflow-value-text">
                      {item?.matchedDisplayText}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box sx={{ width: '50px' }}>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: item?.passedStatus ? 'black' : '#E63946',
                  }}
                >
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
