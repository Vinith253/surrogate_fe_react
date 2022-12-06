import React, { useState } from 'react';
import { Box, Stack, Grid, Button } from '@mui/material';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { FooterButton } from '../../../../components/commonComponent/FooterButton/FooterButton';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { ReactComponent as EditRole } from '../../../../assets/icons/edit_role.svg';
import DetailsCard from '../../../../components/commonComponent/DetailsCard';
import HeaderWithInfo from '../../../../components/commonComponent/HeaderWithInfo';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';

function ViewUser() {
  const [isRejectedTypeModalOpen, setIsRejectedTypeModalOpen] = useState(false);
  const [isDSAListModalOpen, setIsDSAListModalOpen] = useState(false);
  const [isDivisionListModalOpen, setIsDivisionListModalOpen] = useState(false);
  const [isFintechPartnerListModalOpen, setIsFintechPartnerListModalOpen] =
    useState(false);

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

  const tableDataLMSRule = [
    {
      sNo: '1',
      typeAndDSA: 'Score',
    },
    {
      sNo: '2',
      typeAndDSA: 'CIBIL',
    },
    {
      sNo: '3',
      typeAndDSA: 'DPD',
    },
    {
      sNo: '4',
      typeAndDSA: 'Income',
    },
    {
      sNo: '5',
      typeAndDSA: 'C4C',
    },
    {
      sNo: '6',
      typeAndDSA: 'Pincode',
    },
    {
      sNo: '7',
      typeAndDSA: 'KYC',
    },
    {
      sNo: '8',
      typeAndDSA: 'Others',
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
              onClick={() => navigate('/lms/lmsRule/editRule')}
              id="basic-button"
            >
              Edit Rule
            </Button>
          </Box>
        </Box>
      </Box>
      <Stack>
        <DetailsCard data={selectedConfiguration} gridColumn={3} />
        <Stack className="lms-rule-container">
          <HeaderWithInfo
            header={'Rejected Rule Configuration'}
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
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Surrogate Categories</Stack>
                <Stack className="info-value">
                  Payroll, Card For Card, CIBIL
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Dedube</Stack>
                <Stack className="info-value">
                  Enable Dedube Configuration
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Rejection Type</Stack>
                <Stack className="info-value display-flex">
                  <Stack>Score, CIBIL...</Stack>
                  <Stack
                    className="show-more"
                    onClick={() => setIsRejectedTypeModalOpen(true)}
                  >
                    Show More
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack className="each-info">
                <Stack className="info-label">Mode Of Communication</Stack>
                <Stack className="info-value">SMS, Whatsapp, Mail</Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

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
                <Stack className="info-value display-flex">
                  <Stack>4 DSAs Selected...</Stack>
                  <Stack
                    className="show-more"
                    onClick={() => setIsDSAListModalOpen(true)}
                  >
                    Show DSAs
                  </Stack>
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
                <Stack className="info-value display-flex">
                  <Stack>4 Divisions Selected...</Stack>
                  <Stack
                    className="show-more"
                    onClick={() => setIsDivisionListModalOpen(true)}
                  >
                    Show Divisions
                  </Stack>
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
                <Stack className="info-value display-flex">
                  <Stack>4 Fintech Partner Selected...</Stack>
                  <Stack
                    className="show-more"
                    onClick={() => setIsFintechPartnerListModalOpen(true)}
                  >
                    Show Fintech Partners
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack className="lms-rule-container" style={{ marginBottom: '50px' }}>
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
            <Grid item xs={12}>
              <Stack className="underline"></Stack>
            </Grid>
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
            <Grid item xs={12}>
              <Stack className="underline"></Stack>
            </Grid>
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
            <Grid item xs={12}>
              <Stack className="underline"></Stack>
            </Grid>
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
          </Grid>
        </Stack>
      </Stack>
      <FooterButton
        cancel="Close"
        handleCancelClick={goBack}
        // handleSaveasDraftClick={handleSaveasDraftClick}
      />
      {isRejectedTypeModalOpen && (
        <CustomModal
          openSuccess={isRejectedTypeModalOpen}
          handleCloseSuccess={() => setIsRejectedTypeModalOpen(false)}
          title={'Rejection Type'}
          duplicateRoleCloseBtn={'Close'}
          tableDataLMSRule={tableDataLMSRule}
        />
      )}
      {isDSAListModalOpen && (
        <CustomModal
          openSuccess={isDSAListModalOpen}
          handleCloseSuccess={() => setIsDSAListModalOpen(false)}
          title={`Selected DSA's`}
          duplicateRoleCloseBtn={'Close'}
          tableDataLMSRule={tableDataLMSRule}
        />
      )}
      {isDivisionListModalOpen && (
        <CustomModal
          openSuccess={isDivisionListModalOpen}
          handleCloseSuccess={() => setIsDivisionListModalOpen(false)}
          title={`Selected Division's`}
          duplicateRoleCloseBtn={'Close'}
          tableDataLMSRule={tableDataLMSRule}
        />
      )}
      {isFintechPartnerListModalOpen && (
        <CustomModal
          openSuccess={isFintechPartnerListModalOpen}
          handleCloseSuccess={() => setIsFintechPartnerListModalOpen(false)}
          title={`Selected Fintech Partner's`}
          duplicateRoleCloseBtn={'Close'}
          tableDataLMSRule={tableDataLMSRule}
        />
      )}
    </Stack>
  );
}

export default ViewUser;
