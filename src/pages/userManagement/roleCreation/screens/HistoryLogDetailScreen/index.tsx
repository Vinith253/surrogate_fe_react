import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  Stack,
  Typography,
  ListItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../../../style/Color';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TypoText from '../../../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../../../components/commonComponent/CustomText/Info';
import EditIcon from '../../../../../assets/images/edit_card.svg';
import './style.scss';
import {
  historyLogDetailData,
  historyLogDetailInterface,
} from './historyLogDetail.const';
import DetailsCard from '../../../../../components/commonComponent/DetailsCard';
import { ScreenHeader } from '../../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';

export const HistoryLogDetailScreen = () => {
  const navigate = useNavigate();
  const [detailedData, setDetailedData] =
    useState<historyLogDetailInterface>(historyLogDetailData);
  const [orderedData, setOrderData] = useState<any>(null);

  useEffect(() => {
    updateOrderedData();
  }, [detailedData]);

  console.log('detaildata', detailedData);

  const updateOrderedData = () => {
    let value = {
      details: [
        {
          label: 'Initiator',
          value: detailedData?.initiator || '',
        },
        {
          label: 'Initiated Date & Time',
          value: detailedData?.initiatedDateTime || '',
        },
        {
          label: 'Reviewer',
          value: detailedData?.reviewer || '',
        },
        {
          label: 'Reviewed Date & Time',
          value: detailedData?.reviewedDateTime || '',
        },
        {
          label: 'Approver',
          value: detailedData?.approver || '',
        },
        {
          label: 'Rejected  date & Time',
          value: detailedData?.approvedDateTime || '',
        },
      ],
    };
    setOrderData(value);
  };

  return (
    <Stack sx={{ backgroundColor: colors.bgGrey }}>
      <Box className="historyLog-container">
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
                  Authorization Level - History Log
                </Typography>
                <Typography className="history-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Commodo dolor.
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography className="history-status">
                Rejected By Approver
              </Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              backgroundColor: colors.white,
              margin: '30px 0',
              padding: '10px 0px',
            }}
            className="profile-details-container"
          >
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 3, sm: 3, md: 3 }}
            >
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className="each-info">
                  <div className="info-label">Version Number</div>
                  <div className="info-value">{detailedData.version}</div>
                </div>
              </Grid>
            </Grid>
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
                  <div className="each-info">
                    <div className="info-label">{eachItem?.label ?? '--'}</div>
                    <div className="info-value">{eachItem?.value ?? '--'}</div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        <Stack
          sx={{
            backgroundColor: colors.white,
            margin: '30px 0',
            padding: '15px 20px',
          }}
        >
          <Typography
            sx={{ fontSize: '16px', color: '#151515', fontWeight: '500' }}
          >
            Reason For Rejection
          </Typography>
          <List>
            {detailedData.rejectionReason?.map((item: any, index: number) => {
              return (
                <>
                  <ListItem className="changes-listitem">
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
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
          // position: 'fixed',
          // bottom: 0,
          // right: 0,
          width: '100%',
          borderTop: '2px solid #f3f3f3 ',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            padding: '15px',
          }}
        >
          <BtnContained title="Close" />
        </Box>
      </Box>
    </Stack>
  );
};
