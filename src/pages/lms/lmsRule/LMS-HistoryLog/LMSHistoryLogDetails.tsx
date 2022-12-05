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

import { colors } from '../../../../style/Color';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  historyLogDetailData,
  historyLogDetailInterface,
} from './LMSHistoryLogDetails.conts';
// import './style.scss';

import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';

export const orgDetailsData = [
  {
    detailName: 'Rule Name',
    orgDetail: 'Main config_D_FBI',
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

export const LMSHistoryLogDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [detailedData, setDetailedData] =
    useState<historyLogDetailInterface>(historyLogDetailData);
  const [orderedData, setOrderData] = useState<any>(null);

  useEffect(() => {
    updateOrderedData();
  }, [detailedData]);

  const updateOrderedData = () => {
    let value = {
      details: [
        {
          label: 'Initiater',
          value: detailedData?.initiator || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.initiatedDateTime || '',
        },
        {
          label: 'Reviewer',
          value: detailedData?.reviewer || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.reviewedDateTime || '',
        },

        {
          label: 'Request',
          value: detailedData?.request || '',
        },
        {
          label: 'Scheduled Period',
          value: detailedData?.ScheduledPeriod || '',
        },
      ],
    };
    setOrderData(value);
  };

  return (
    <Stack sx={{ backgroundColor: colors.bgGrey }}>
      <Box className="LMS-historyLog-container">
        <Stack className="LMS-historyLog">
          <Stack className="header-container">
            <Stack className="header">
              <Stack className="header-content">
                <Stack>
                  <Typography
                    className="back-arrow"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowBackIcon className="back-arrow" />{' '}
                  </Typography>
                </Stack>

                <Stack className="title">
                  <Typography className="heading">
                    Main config_D_FBI - V1.1.3
                  </Typography>
                  <Typography className="history-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo dolor.
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Typography className="status">Rejected By Approver</Typography>
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

          <Stack className="historylog-label">
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

        <Stack className="reasonFor-rejection">
          <Typography className="reasonStyle">Reason For Rejection</Typography>
          <List>
            {detailedData.rejectionReason?.map((item: any, index: number) => {
              return (
                <>
                  <ListItem className="changes-listitem">
                    <Stack className="rejection-content">
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

      <Box className="historylog-footer">
        <Box className="historylog-button-container">
          <Button
            variant="outlined"
            color="secondary"
            className="history-close-button"
            onClick={() => navigate('/lms/lmsRule')}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};
