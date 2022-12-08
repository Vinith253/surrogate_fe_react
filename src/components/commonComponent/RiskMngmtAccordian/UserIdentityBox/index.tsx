import { Box, Grid, Typography, Button } from '@mui/material';
import { ReactComponent as StatusPassIcon } from '../../../../assets/icons/risk_status_pass.svg';
import { ReactComponent as ApprovedIcon } from '../../../../assets/icons/approved_risk_mngm_icon.svg';
import { ReactComponent as StatusFailIcon } from '../../../../assets/icons/risk_mgmt_expand_fail.svg';

type props = {
  item?: any;
};

export default function UserIdentityBox({ item }: props) {
  return (
    <>
      {item?.showHeader && (
        <Box className="risk-user-identity-box">
          <Grid
            container
            item
            key={item.id}
            className="grid-style"
            columnGap={78}
          >
            <Typography>Criteria</Typography>
            <Typography>Status</Typography>
          </Grid>
        </Box>
      )}
      {item?.data?.map((item: any) => {
        return (
          <Box className="risk-user-identiy-box2">
            <Grid
              container
              item
              key={item.id}
              className="risk-accordian-grid-style"
              columnGap={65}
            >
              <Box className="inner-box">
                <Typography className="box-title">{item?.title1}</Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  {item?.title1Value}
                </Typography>
                {item?.showAccountDetails && (
                  <Typography className="account-detail-text">
                    {item?.showMoreText} {'>'}
                  </Typography>
                )}
                {item?.isSelectedAddress && (
                  <Button startIcon={<ApprovedIcon />} className="box-title2">
                    Selected Address
                  </Button>
                )}
                {item?.title2 && (
                  <Box className="extra-title">
                    <Typography className="text-style">
                      {item?.title2}
                    </Typography>
                    <Typography className="text-value-style">
                      {item?.title2Value}
                    </Typography>
                  </Box>
                )}
              </Box>

              {item?.passedStatus ? (
                <Box className="right-status-box">
                  <StatusPassIcon width={'16px'} />
                  <Typography className="text-font-style">
                    {item?.matchedDisplayText}
                  </Typography>
                </Box>
              ) : (
                <Box className="right-status-box">
                  {item?.matchedDisplayText > 0 && 
                  <>
                  <StatusFailIcon width={'16px'} />
                  <Typography className="text-font-style">
                    {item?.matchedDisplayText}
                  </Typography>
                  </> }
                </Box>
              )}
            </Grid>
          </Box>
        );
      })}
    </>
  );
}
