import React from 'react';
import './style.scss';
import DetailsCard from './detailsCard';
import { Stack } from '@mui/material';

function SalesReportDetails() {
  const personalDetails = {
    title: 'Personal Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Application ID',
        value: '1234567890',
      },
      {
        label: 'Name',
        value: 'Ganesh.M',
      },
      {
        label: 'Phone Number',
        value: '987654321',
      },
      {
        label: 'Date Of Birth',
        value: '10 May, 1990',
      },
      {
        label: 'PAN Details',
        value: 'ACDJI2347J',
      },
      {
        label: 'Aadhar Details',
        value: '1234567890',
      },
    ],
  };

  const channelDetails = {
    title: 'Channel Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Channel',
        value: '1234567890',
      },
      {
        label: 'Channel Name',
        value: 'Ganesh.M',
      },
      {
        label: 'DSA ID',
        value: '987654321',
      },
      {
        label: 'DSA Branch',
        value: '10 May, 1990',
      },
      {
        label: 'DSA Lead',
        value: 'ACDJI2347J',
      },
      {
        label: 'DSA Exicutive',
        value: '1234567890',
      },
    ],
  };

  const applicationDetails = {
    title: 'Application Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Applied DAte & Time',
        value: '1234567890',
      },
      {
        label: 'Surrogate',
        value: 'Ganesh.M',
      },
      {
        label: 'Overall status',
        value: '987654321',
      },
      {
        label: 'Status Description',
        value: '10 May, 1990',
      },
      {
        label: 'KYC Status',
        value: 'ACDJI2347J',
      },
      {
        label: 'Visual Card Issuance',
        value: '1234567890',
      },
    ],
  };

  const remarkDetails = {
    title: 'Remarks',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Remarks',
        value:
          'CIBIL 500 unailedcLorem ipusm dolor sit amet, consectetur adipiscing elit',
      },
    ],
  };

  return (
    <Stack
      className="sales-report-details-container"
      sx={{ marginBottom: '20px' }}
    >
      <Stack className="header-container">
        <Stack className="main-header">Customer Details</Stack>
        <Stack className="info-label">
          Lorem ipusm dolor sit amet, consectetur adipiscing elit.integer
          senectus mattis
        </Stack>
      </Stack>
      <Stack sx={{ marginBottom: '20px' }}>
        <Stack sx={{ marginBottom: '20px' }}>
          <DetailsCard data={personalDetails} gridColumn={4} />
        </Stack>
        <DetailsCard data={channelDetails} gridColumn={4} />
        <Stack sx={{ margin: '20px 0' }}>
          <DetailsCard data={applicationDetails} gridColumn={4} />
        </Stack>
        <DetailsCard data={remarkDetails} gridColumn={4} />
      </Stack>
    </Stack>
  );
}

export default SalesReportDetails;
