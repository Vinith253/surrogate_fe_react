import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
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

export const HistoryLogDetailScreen = () => {
  const navigate = useNavigate();
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
      <Box className="box1">
        <Box className="head">
          <Box className="headFull">
            <Box onClick={() => navigate(-1)}>
              <ArrowBackIcon className="headback" />
            </Box>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Box>
              <TypoText title="Role - Manager - Pause Request History Log" />
              <TypographyInfo title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dolor." />
            </Box>
            <Box>
              <Typography>{detailedData.rejectedBy}</Typography>
            </Box>
            </Box>
          </Box>

          {/* <Box className="headIconBox">
            <Box>
              <Typography>{detailedData.rejectedBy}</Typography>
            </Box>
          </Box> */}
        </Box>

        <Divider />

        <Stack
          sx={{ backgroundColor: colors.white, margin: '30px 0', padding: '40px 20px' }}
          className="profile-details-container"
        >
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
      </Box>
    </Stack>
  );
};
