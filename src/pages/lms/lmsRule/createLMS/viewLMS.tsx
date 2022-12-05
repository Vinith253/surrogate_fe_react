import React, { useState } from 'react';
import { Box, Stack, Grid, Button } from '@mui/material';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { FooterButton } from '../../../../components/commonComponent/FooterButton/FooterButton';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { ReactComponent as EditRole } from '../../../../assets/icons/edit_role.svg';
import DetailsCard from '../../../../components/commonComponent/DetailsCard';
import HeaderWithInfo from '../../../../components/commonComponent/HeaderWithInfo';

function ViewUser() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const selectedConfiguration = {
    title: 'Select Configuration',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Type',
        value: 'Rejected',
      },
    ],
  };

  const rejectedRuleConfiguration = {
    title: 'Rejected Rule Configuration',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Surrogate Categories',
        value: 'Payroll, Card For Card, CIBIL',
      },
      {
        label: 'Dedube',
        value: 'Enable Dedube Configuration',
      },
      {
        label: 'Rejection Type',
        value: 'Score, CIBIL...Show More',
      },
      {
        label: 'Mode Of Communication',
        value: 'SMS, Whatsapp, Mail',
      },
    ],
  };

  const FrequencyData = [
    {
      header: '1.Select Date - Daily',
      details: [
        {
          label: 'Start Date',
          value: '10 Aug, 2022',
        },
        {
          label: 'End Date',
          value: '10 Aug, 2022',
        },
        {
          label: 'Every',
          value: '10 Aug, 2022',
        },
      ],
    },
    {
      header: '1.Select Date - Daily',
      details: [
        {
          label: 'Start Date',
          value: '10 Aug, 2022',
        },
        {
          label: 'End Date',
          value: '10 Aug, 2022',
        },
        {
          label: 'Every',
          value: '10 Aug, 2022',
        },
      ],
    },
  ];

  return (
    <Stack className="view-rule-main-container">
      <Box className="lms-rule-container">
        <Box style={{ display: 'flex' }}>
          <ScreenHeader
            title="View - Main config_D_FBI - V1.1.3"
            info="From here you can create access presets to assign with users in Users Creation."
            showBackButton={true}
          />
          <Box style={{ marginLeft: 'auto' }}>
            <Button
              sx={{ textTransform: 'capitalize' }}
              color="secondary"
              startIcon={<EditRole />}
              aria-haspopup="true"
              onClick={() => navigate('/userManagement/userCreation/editUser')}
              id="basic-button"
            >
              Edit Rule
            </Button>
          </Box>
        </Box>
      </Box>
      <Stack>
        <DetailsCard data={selectedConfiguration} gridColumn={3} />
        <DetailsCard data={rejectedRuleConfiguration} gridColumn={3} />

        <Stack className="lms-rule-container">
          <HeaderWithInfo
            header={'Channel'}
            isInfoEnabled={true}
            info="From here, you can add the user’s personal details"
            isDownloadEnabled={false}
          />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: '0px' }}
          >
            <Grid item xs={4}>
              <Stack className="each-info">
                <Stack className="info-label">DSA</Stack>
                <Stack className="info-value">Applicable</Stack>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Stack className="each-info">
                <Stack className="info-label">Type</Stack>
                <Stack className="info-value">
                  4 DSAs Selected...Show DSAs
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack className="each-info">
                <Stack className="info-label">Bank Divisions</Stack>
                <Stack className="info-value">Applicable</Stack>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Stack className="each-info">
                <Stack className="info-label">Type</Stack>
                <Stack className="info-value">
                  4 DSAs Selected...Show Divisions
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack className="each-info">
                <Stack className="info-label">Fintech Partner</Stack>
                <Stack className="info-value">Applicable</Stack>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Stack className="each-info">
                <Stack className="info-label">Type</Stack>
                <Stack className="info-value">
                  4 DSAs Selected...Show Fintech Partners
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack className="lms-rule-container">
          <HeaderWithInfo
            header={'Frequency'}
            isInfoEnabled={true}
            info="From here, you can add the user’s personal details"
            isDownloadEnabled={false}
          />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: '0px' }}
          >
            <Grid item xs={12}>
              1.Select Date - Daily
            </Grid>
            <Grid item xs={4}>
              <Stack className="each-info">
                <Stack className="info-label">Start Date</Stack>
                <Stack className="info-value">10 Aug, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack className="each-info">
                <Stack className="info-label">End Date</Stack>
                <Stack className="info-value">30 Sep, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack className="each-info">
                <Stack className="info-label">Every</Stack>
                <Stack className="info-value">12 Days once</Stack>
              </Stack>
            </Grid>
            <Stack className="underline"></Stack>
            <Grid item xs={12}>
              2.Select Date - Weekly
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Start Date</Stack>
                <Stack className="info-value">10 Aug, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">End Date</Stack>
                <Stack className="info-value">30 Sep, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Every</Stack>
                <Stack className="info-value">12 Days once</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Day</Stack>
                <Stack className="info-value">Monday</Stack>
              </Stack>
            </Grid>
            <Stack className="underline"></Stack>
            <Grid item xs={12}>
              3.Select Date - Monthly
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Start Date</Stack>
                <Stack className="info-value">10 Aug, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">End Date</Stack>
                <Stack className="info-value">30 Sep, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Every</Stack>
                <Stack className="info-value">12 Days once</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">On</Stack>
                <Stack className="info-value">For Day - First, Monday</Stack>
              </Stack>
            </Grid>
            <Stack className="underline"></Stack>
            <Grid item xs={12}>
              4.Select Date - Yearly
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Start Date</Stack>
                <Stack className="info-value">10 Aug, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">End Date</Stack>
                <Stack className="info-value">30 Sep, 2022</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Every</Stack>
                <Stack className="info-value">12 Days once</Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">On</Stack>
                <Stack className="info-value">For Day - First, Monday</Stack>
              </Stack>
            </Grid>
            <Stack className="underline"></Stack>
          </Grid>
        </Stack>
      </Stack>
      <FooterButton
        cancel="Close"
        handleCancelClick={goBack}
        // handleSaveasDraftClick={handleSaveasDraftClick}
      />
    </Stack>
  );
}

export default ViewUser;
