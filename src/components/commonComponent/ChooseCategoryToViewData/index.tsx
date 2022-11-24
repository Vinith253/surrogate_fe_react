import React from 'react';
import SalesReportNodata from '../../../assets/images/choose_filters_no_data.svg';
import { Stack, Typography } from '@mui/material';
import './style.scss';

function ChooseCategoryToViewData() {
  return (
    <Stack className="no-data-container">
      <img src={SalesReportNodata} alt="" className="no-data-img" />
      <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
        Choose a preferred category to view more data/options
      </Typography>
    </Stack>
  );
}

export default ChooseCategoryToViewData;
