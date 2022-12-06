import React from 'react';
import './style.scss';
import DetailsCard from './../../../components/commonComponent/DetailsCard';
import { Stack, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { FooterButton } from '../../../components/commonComponent/FooterButton/FooterButton';

function SalesReportDetails() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
    <Stack className="sales-report-details-container">
      <ScreenHeader
        title="Customer Details"
        info="From here you can create access presets to assign with users in Users Creation."
        showBackButton={true}
      />
      <DetailsCard data={personalDetails} gridColumn={4} />
      <DetailsCard data={channelDetails} gridColumn={4} />
      <DetailsCard data={applicationDetails} gridColumn={4} />
      <DetailsCard data={remarkDetails} gridColumn={4} />
      <FooterButton submit="Close" handleSubmitClick={goBack} />
    </Stack>
  );
}
export default SalesReportDetails;
