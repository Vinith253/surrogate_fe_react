import React, { useState, useEffect } from 'react';
import { Stack, Typography, Grid, Button, Box } from '@mui/material';
import { rowsDataInterface } from './ReviewerLog.const';
import { useLocation } from 'react-router-dom';
import CustomModal from '../../../../../components/commonComponent/customModal/CustomModal';
import { colors } from '../../../../../style/Color';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function ReviewerLogDetails() {
  const [data, setData] = useState<rowsDataInterface>();
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [openRejectSuccessModal, setOpenRejectSuccessModal] = useState(false);
  const [openApproverModal, setopenApproverModal] = useState(false);
  const [openApproverSuccessModal, setopenApproverSuccesModal] =
    useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      setData(state);
    }
  }, [state]);

  const pathurl = window.location.pathname;

  const urlId = pathurl.split('/');
  const id = urlId.slice(urlId.length - 1);

  const SuccessModal = () => {
    setOpenRejectSuccessModal(true);
    setOpenRejectModal(false);
  };

  const ApproverSuccessModal = () => {
    setopenApproverSuccesModal(true);
    setopenApproverModal(false);
  };

  return (
    <Stack>
      <Stack
        sx={{
          backgroundColor: '#ffffff;',
          padding: '0 30px',
          marginTop: '30px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px 0',
            borderBottom: '2px solid #F0F2F5',
            width: '100%',
          }}
        >
          <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
            <Stack>
              <Typography
                sx={{ fontSize: '16px', fontWeight: '500', cursor: 'pointer' }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon sx={{ color: '#0662B7', marginTop: '10pxs' }} />{' '}
              </Typography>
            </Stack>

            <Stack sx={{ marginLeft: '10px' }}>
              <Typography>
                {data?.surrogateName ?? '--'}- Pause Request
              </Typography>
              <Typography
                sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Commodo
                dolor.
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              // '#FBF2D7'
              sx={{
                backgroundColor: `${
                  data?.status == 'Pending'
                    ? '#FBF2D7'
                    : data?.status == 'Sent To Approver'
                    ? '#4FB366'
                    : '#FCE4E5'
                }`,
                fontSize: '12px',
                fontWeight: '500',
                padding: '3px 5px',
                color: `${
                  data?.status == 'Pending'
                    ? ' #997F31'
                    : data?.status == 'Sent To Approver'
                    ? 'black'
                    : '#992D26'
                }`,
              }}
            >
              {data?.status == 'Pending'
                ? 'Pending For Review'
                : data?.status == 'Sent To Approver'
                ? 'Sent To Approver'
                : 'Rejected By Approver'}
            </Typography>
          </Stack>
        </Stack>
        <Grid container sx={{ padding: '16px 0' }}>
          <Grid sm={4}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Surrogate Name
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              {data?.surrogateName ?? '--'}
            </Typography>
          </Grid>
          <Grid sm={4}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Version Number
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              {data?.version ?? '--'}
            </Typography>
          </Grid>
          <Grid sm={4}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Current Status
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              {data?.currentStatus ?? '--'}
            </Typography>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          backgroundColor: '#ffffff;',
          padding: '0 30px',
          marginTop: '30px',
        }}
      >
        <Grid container sx={{ padding: '16px 0' }}>
          <Grid sm={4} sx={{ margin: '8px 0' }}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Request
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              Shedule Pause
            </Typography>
          </Grid>
          <Grid sm={8} sx={{ margin: '8px 0' }}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Sheduled Period
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              From 12 Aug,2022 10:00 AM - To 24 Aug,2022 10:00 AM
            </Typography>
          </Grid>
          <Grid sm={4} sx={{ margin: '8px 0' }}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Initiater
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              {data?.initiatedBy ?? '--'}
            </Typography>
          </Grid>

          <Grid sm={8} sx={{ margin: '8px 0' }}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '500', color: '#AFAEAF' }}
            >
              Date & Time
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#151515' }}
            >
              {data?.dateAndTime ?? '--'}
            </Typography>
          </Grid>
        </Grid>
      </Stack>

      {data?.status == 'Rejected' && (
        <Stack
          sx={{
            backgroundColor: '#ffffff;',
            padding: '10px 30px',
            marginTop: '30px',
          }}
        >
          <Typography
            sx={{ fontSize: '16px', fontWeight: '500', padding: '10px 0' }}
          >
            Reason For Rejection
          </Typography>

          <Stack>
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque.
              Vitae quis praesent tempus ut. Accumsan diam a vulputate ultrices
              turpis viverra rhoncus donec ultricies. In dui ultricies in
              curabitur quis et. Justo velit massa sed morbi nunc, sit magna.
              Facilisi est morbi sollicitudin ornare a. Ullamcorper semper
              facilisi volutpat quis et. Nibh amet eget a amet, phasellus et
              velit auctor. Orci ultricies orci mattis pellentesque pharetra
              quam lectus. Odio viverra iaculis nullam sodales malesuada vitae
              leo mauris et. A feugiat pellentesque porttitor venenatis,
              vehicula risus felis tellus. Ut lacus duis tellus, mi nullam.
              Ullamcorper massa ipsum mi, ullamcorper fames ut aliquam nec.{' '}
            </Typography>
          </Stack>
        </Stack>
      )}

      <Stack
        sx={{
          width: '100%',
          padding: '20px 30px',
          backgroundColor: '#ffffff',
          position: 'fixed',
          right: 0,
          bottom: 0,
        }}
      >
        {openRejectModal && (
          <CustomModal
            openSuccess={openRejectModal}
            handleCloseSuccess={() => setOpenRejectModal(false)}
            handleSuccess={SuccessModal}
            title={'Enter Reason For Rejection'}
            textarea_title={'Add Remarks'}
            maxLength={'Maximum of 500 words'}
            close={'Cancel'}
            submit={'Reject'}
          />
        )}
        {openRejectSuccessModal && (
          <CustomModal
            openSuccess={openRejectSuccessModal}
            handleCloseSuccess={() => setOpenRejectSuccessModal(false)}
            btn={' Close'}
            rejectedModaltitle={'Rejected'}
            rejectedModalMsg={`${
              data?.surrogateName ?? '--'
            } - Scheduled Pause`}
          />
        )}

        {openApproverModal && (
          <CustomModal
            openSuccess={openApproverModal}
            handleCloseSuccess={() => setopenApproverModal(false)}
            title={'Sent to Approver'}
            textarea_title={'Add Remarks (Optional)'}
            maxLength={'Maximum of 500 words'}
            close={'Cancel'}
            submit={'Sent To Approver'}
            handleSuccess={ApproverSuccessModal}
          />
        )}

        {openApproverSuccessModal && (
          <CustomModal
            openSuccess={openApproverSuccessModal}
            handleCloseSuccess={() => setopenApproverSuccesModal(false)}
            successModalTitle={'Sent To Approver'}
            successModalMsg={`${data?.surrogateName ?? '--'} - Scheduled Pause`}
            btn={' Close'}
          />
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            sx={{ marginRight: '10px', fontSize: '14px', fontWeight: '500' }}
            onClick={() => setOpenRejectModal(true)}
          >
            Reject
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              background: `${colors.blue}`,
            }}
            onClick={() => setopenApproverModal(true)}
          >
            Sent To Approver
          </Button>

          {/* <Button
            variant="outlined"
            sx={{ fontSize: '14px', fontWeight: '500' }}
          >
            Cancel
          </Button> */}
        </Box>
      </Stack>
    </Stack>
  );
}

export default ReviewerLogDetails;
