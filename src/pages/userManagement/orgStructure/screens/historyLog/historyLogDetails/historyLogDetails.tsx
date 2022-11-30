import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import BtnContained from '../../../../../../components/commonComponent/CustomText/Button/Contained';
import { colors } from '../../../../../../style/Color';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  historyLogDetailData,
  historyLogDetailInterface,
} from './historyLogDetail.const';
import './style.scss';
import { checkTagStatus } from '../../../../../../utils/tagBasedIndicator/tagStatus';
import { ListTagStatus } from '../../../../../../utils/tagBasedIndicator/listTagStatus';

export const orgDetailsData = [
  {
    detailName: 'Org. Name',
    orgDetail: 'XYZ',
  },
  {
    detailName: 'Version Number',
    orgDetail: 'V0.02',
  },
  {
    detailName: 'Current Status',
    orgDetail: 'Active',
  },
];

export const OrgHistoryLogDetails = () => {
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
          label: 'Request',
          value: detailedData?.request || '',
        },
        {
          label: 'Request Status',
          value: detailedData?.requestStatus || '',
        },
        {
          label: 'Initiater',
          value: detailedData?.initiator || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.reviewedDateTime || '',
        },
        {
          label: 'Reviewer',
          value: detailedData?.reviewer || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.approvedDateTime || '',
        },
        {
          label: 'Approvar',
          value: detailedData?.approver || '',
        },
        {
          label: 'Date & Time',
          value: detailedData?.approvedDateTime || '',
        },
      ],
    };
    setOrderData(value);
  };

  return (
    <Stack sx={{ backgroundColor: colors.bgGrey }}>
      <Box className="org-historyLog-container">
        <Stack
          sx={{
            backgroundColor: '#ffffff;',
            padding: '0 20px',
          }}
        >
          <Stack className="header">
            <Stack className="header-content">
              <Stack>
                <Typography className="back-arrow" onClick={() => navigate(-1)}>
                  <ArrowBackIcon
                    sx={{ color: '#0662B7', marginTop: '10pxs' }}
                  />{' '}
                </Typography>
              </Stack>

              <Stack sx={{ marginLeft: '10px' }}>
                <Typography className="heading">
                  XYZ - Organisation Details
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
                  color: checkTagStatus(state).color,
                  backgroundColor: checkTagStatus(state).bgColor,
                  fontSize: '12px',
                  fontWeight: 400,
                  padding: '2px 14px',
                  borderRadius: '4px',
                  // textAlign: "center",
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
            padding: '10px 30px',
          }}
        >
          <BtnContained title="Close" onClick={() => navigate(-1)} />
        </Box>
      </Box>
    </Stack>
  );
};
