import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { ReactComponent as StatusPassIcon } from '../../../../assets/icons/risk_status_pass.svg';
import { ReactComponent as ApprovedIcon } from '../../../../assets/icons/approved_risk_mngm_icon.svg';
import { ReactComponent as StatusFailIcon } from '../../../../assets/icons/risk_mgmt_expand_fail.svg';
import { useState } from 'react';
import CustomModal from '../../customModal/CustomModal';

type props = {
  item?: any;
};

const addressDetails = [
  {
    Key: 'Address 1',
    value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
    addressSource: 'Address source',
    billMethod: 'CIBIL',
    selectedAddress: true,
  },
  {
    Key: 'Address 1',
    value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
    addressSource: 'Address source',
    billMethod: 'CIBIL',
    selectedAddress: false,
  },
  {
    Key: 'Address 1',
    value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
    addressSource: 'Address source',
    billMethod: 'CIBIL',
    selectedAddress: false,
  },
  {
    Key: 'Address 1',
    value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
    addressSource: 'Address source',
    billMethod: 'CIBIL',
    selectedAddress: false,
  },
];

const employeeDetailsRowOne = [
  {
    Key: 'Relationship with bank',
    value: 'Existing to Bank',
  },
  {
    Key: 'Account Type',
    value: 'Savings Account',
  },
  {
    Key: 'Account Holder Name',
    value: 'Antony Jackson',
  },
  {
    Key: 'Account Number',
    value: '8090785645342312',
  },
  {
    Key: 'IFSC Code',
    value: 'YES00001212',
  },
  {
    Key: 'Branch',
    value: 'Chromepet - 600044',
  },
];

export default function UserIdentityBox({ item }: props) {
  const [approvalModal, setApprovalModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
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
                  <Stack
                    className="account-detail-text"
                    onClick={() => {
                      if (item?.showMoreText === 'Account Details') {
                        setAccountModal(true);
                      }
                      if (item?.showMoreText === 'More Addresses') {
                        setApprovalModal(true);
                      }
                    }}
                  >
                    {item?.showMoreText} {'>'}
                  </Stack>
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
                  {item?.matchedDisplayText > 0 && (
                    <>
                      <StatusFailIcon width={'16px'} />
                      <Typography className="text-font-style">
                        {item?.matchedDisplayText}
                      </Typography>
                    </>
                  )}
                </Box>
              )}
            </Grid>
          </Box>
        );
      })}

      {approvalModal && (
        <CustomModal
          openSuccess={approvalModal}
          handleCloseSuccess={() => setApprovalModal(false)}
          title={'User Traceability - Address Details'}
          duplicateRoleCloseBtn={' Close'}
          addressDetails={addressDetails}
        />
      )}
      {accountModal && (
        <CustomModal
          openSuccess={accountModal}
          handleCloseSuccess={() => setAccountModal(false)}
          employeeDetailsRowOne={employeeDetailsRowOne}
          title={'Employee Details'}
          duplicateRoleCloseBtn={' Close'}
        />
      )}
    </>
  );
}
