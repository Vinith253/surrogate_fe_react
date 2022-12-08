import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import { colors } from '../../../../style/Color';
import {
  historyLogDetailData,
  historyLogDetailInterface,
} from '../../programmeManagement/screens/listComponents/historyLogDetail.const';

export const orgDetailsData = [
  {
    detailName: 'Surrogate Name',
    orgDetail: 'AQB',
  },
  {
    detailName: 'Version Number',
    orgDetail: 'V1.13',
  },
  {
    detailName: 'Current Status',
    orgDetail: 'Active',
  },
  {
    detailName: 'Rejecterd By',
    orgDetail: 'Karthik Kumar',
  },
];

export const DetailsHistoryLogDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [detailedData, setDetailedData] =
    useState<historyLogDetailInterface>(historyLogDetailData);
  const [orderedData, setOrderData] = useState<any>(null);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);

  useEffect(() => {
    updateOrderedData();
  }, [detailedData]);

  const updateOrderedData = () => {
    let value = {
      details: [
        {
          label: 'Request',
          value: detailedData?.request || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.reviewedDateTime || '',
        },

        {
          label: 'Reviewer',
          value: detailedData?.initiator || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.reviewedDateTime || '',
        },
        {
          label: 'Request',
          value: detailedData?.initiator || '',
        },
        {
          label: 'Scheduled Period',
          value: detailedData?.ScheduledPeriod || '',
        },
        {
          label: 'Approvar',
          value: detailedData?.reviewer || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.approvedDateTime || '',
        },
      ],
    };
    setOrderData(value);
  };
  const NORMAL_PAUSE = 'Pause Now';
  const SCHEDULED_PAUSE = 'Schedule Pause';

  const closeModal = () => {
    setShowPauseModal(false);
    setShowPauseSuccessModal(false);
    setShowScheduledPauseSuccessModal(false);
    setShowPauseSuccessModal(false);
  };
  const [pauseMethod, setPauseMethod] = useState('Pause Now');
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);
  const [pausePopUpTitle, setPausePopUpTitle] = useState('');

  const pauseMethodChange = (value: any) => {
    setPauseMethod(value);
  };

  const successModal = () => {
    if (pauseMethod === NORMAL_PAUSE) {
      setShowPauseModal(false);
      setShowPauseSuccessModal(true);
    }
    if (pauseMethod === SCHEDULED_PAUSE) {
      setShowPauseModal(false);
      setShowScheduledPauseSuccessModal(true);
    }
  };

  return (
    <Stack sx={{ backgroundColor: colors.bgGrey }}>
      <Box
        className="org-historyLog-container"
        sx={{ margin: '30px 0px 60px 0' }}
      >
        <Stack
          sx={{
            backgroundColor: '#ffffff;',
            padding: '0 20px',
          }}
        >
          <Stack className="header">
            <Stack
              sx={{
                display: 'flex',
                flexDirection: ' row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Stack className="header-content">
                <Stack>
                  <Typography
                    className="back-arrow"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowBackIcon
                      sx={{ color: '#0662B7', marginTop: '10pxs' }}
                    />{' '}
                  </Typography>
                </Stack>

                <Stack sx={{ marginLeft: '10px' }}>
                  <Typography className="heading">
                    AQB - Pause Request
                  </Typography>
                  <Typography className="history-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo dolor.
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    backgroundColor: '#FCE4E5',
                    padding: '5px 8px',
                    color: ' #992D26',
                    fontSize: '12px',
                    borderRadius: '4px',
                  }}
                >
                  Rejected By Approver
                </Typography>
              </Stack>
            </Stack>

            <Stack>
              <Typography
                sx={{
                  color: checkTagStatus(state).color,
                  backgroundColor: checkTagStatus(state).bgColor,
                  fontSize: '12px',
                  fontWeight: 400,
                  padding: '2px 14px',
                  borderRadius: '4px',
                  width: 'max-content',
                }}
              >
                {state}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              backgroundColor: colors.white,
              margin: '20px 0',
              padding: '10px 0px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {orgDetailsData.map((item: any, index: number) => {
              return (
                <Stack sx={{ width: '28%' }}>
                  <Stack>
                    <Stack className="each-info">
                      <Stack className="info-label">{item.detailName}</Stack>
                      <Stack className="info-value">{item.orgDetail}</Stack>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>

        <Divider />

        <Stack className="history-log-details">
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          >
            {orderedData?.details?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={3} sm={3} md={3} lg={3} key={index}>
                  <Stack className="each-info">
                    <Stack className="info-label">
                      {eachItem?.label ?? '--'}
                    </Stack>
                    <Stack className="info-value">
                      {eachItem?.value ?? '--'}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        <Stack
          sx={{
            backgroundColor: colors.white,
            margin: '30px 0 60px 0',
            padding: '15px 20px',
          }}
        >
          <Typography className="reasonStyle">Reason For Rejection</Typography>
          <List>
            {detailedData.rejectionReason?.map((item: any, index: number) => {
              return (
                <>
                  <ListItem
                    className="changes-listitem"
                    sx={{ padding: '8px 0' }}
                  >
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '0',
                      }}
                    >
                      <Stack className="changes">{`${index + 1}. `}</Stack>
                      <Stack className="changes">{item}</Stack>
                    </Stack>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Stack>
      </Box>

      <Box
        sx={{
          marginTop: '10px',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '100%',
          borderTop: '2px solid #f3f3f3 ',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            padding: '25px',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: '5px 25px',
              fontSize: '1vw',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              textTransform: 'capitalize',
              letterSpacing: '0.0025em',
            }}
            onClick={() => navigate(-1)}
          >
            Close
          </Button>
        </Box>
      </Box>

      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={closeModal}
          handleSuccess={successModal}
          title={'Card For Card - Edit Pause'}
          pause_content={'You can pause it or perform a scheduled pause.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled pause.'
          }
          textarea_title={'Add Remarks'}
          radioValuOne={NORMAL_PAUSE}
          radioValuTwo={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={(arg1: string) => pauseMethodChange(arg1)}
          close={'Close'}
          submit={'Submit'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
          pauseStatusKey={'Schedule Pause'}
        />
      )}

      {showPauseSuccessModal && (
        <CustomModal
          openSuccess={showPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Pause'}
          successModalMsg={
            ' Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer'
          }
          btn={' Close'}
        />
      )}

      {showScheduledPauseSuccessModal && (
        <CustomModal
          openSuccess={showScheduledPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Scheduled Pause'}
          successModalMsg={
            'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
          }
          btn={' Close'}
        />
      )}
    </Stack>
  );
};
