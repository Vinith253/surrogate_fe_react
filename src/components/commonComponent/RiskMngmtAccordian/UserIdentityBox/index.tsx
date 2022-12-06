import { Box, Grid, Typography, Button } from '@mui/material';
import { ReactComponent as StatusPassIcon } from '../../../../assets/icons/risk_status_pass.svg';
import { ReactComponent as ApprovedIcon } from '../../../../assets/icons/approved_risk_mngm_icon.svg';

type props = {
  item?: any;
};

export default function UserIdentityBox({ item }: props) {
  return (
    <>
      {item?.showHeader && (
        <Box sx={{ height: '40px', borderBottom: '2px solid #F0F2F5' }}>
          <Grid
            container
            item
            key={item.id}
            className="grid-style"
            columnGap={70}
          >
            <Typography>Criteria</Typography>
            <Typography>Status</Typography>
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
              columnGap={57}
            >
              <Box sx={{ width: '163px' }}>
                <Typography sx={{ color: '#AFAEAF', fontSize: '12px' }}>
                  {item?.title1}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  {item?.title1Value}
                </Typography>
                {item?.showAccountDetails && (
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#0662B7',
                      marginTop: '12px',
                    }}
                  >
                    {item?.showMoreText} {'>'}
                  </Typography>
                )}
                {item?.isSelectedAddress && (
                  <Button
                    startIcon={<ApprovedIcon />}
                    sx={{
                      fontSize: '12px',
                      color: '#1C592A',
                      backgroundColor: '#E3F3E6',
                      textTransform: 'none',
                      height: '24px',
                      marginTop: '16px',
                    }}
                  >
                    Selected Address
                  </Button>
                )}
                {item?.title2 && (
                  <Box sx={{ marginTop: '32px' }}>
                    <Typography sx={{ color: '#AFAEAF', fontSize: '12px' }}>
                      {item?.title2}
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      {item?.title2Value}
                    </Typography>
                  </Box>
                )}
              </Box>
              {item?.passedStatus && (
                <Box sx={{ display: 'flex', gap: '14px' }}>
                  <StatusPassIcon width={'16px'} />
                  <Typography sx={{ fontSize: '12px' }}>
                    {item?.matchedDisplayText}
                  </Typography>
                </Box>
              )}
            </Grid>
          </Box>
        );
      })}
    </>
  );
}
