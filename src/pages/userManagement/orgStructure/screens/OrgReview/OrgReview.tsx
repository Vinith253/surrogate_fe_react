import React from 'react';
import { useState } from 'react';
import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Card,
  Grid,
  Divider,
  Checkbox,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../../../assets/images/edit_card.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Info_Icon from '../../../../../assets/images/info_icon.svg';
import TypoText from '../../../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../../../components/commonComponent/CustomText/Info';
import TypographyHead from '../../../../../components/commonComponent/CustomText/Head';
import TypographySubTitle from '../../../../../components/commonComponent/CustomText/Typography';

export const OrgReview = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const close = () => {
    navigate('/productManagement/cardCatalogue');
  };
  return (
    <Stack>
      <Box sx={{ backgroundColor: '#E6E7E7' }}>
        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box onClick={goBack}>
                <ArrowBackIcon className="headback" />
              </Box>
              <Box>
                <TypoText title="View - Anand Agency - DSA" />
                <TypographyInfo title="Onboard your partners here" />
              </Box>
            </Box>
            <Box>
              {/* <Button sx={{ backgroundColor: '#E6E7E7' }}>ID.NO 123456</Button> */}
              <Button className="btn">
                <IconButton className="icon">
                  <img
                    src={EditIcon}
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                Edit Card
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TypographyHead title="Surrogate" />
              <img src={Info_Icon} />
              <TypographyInfo title="Choose a Surrogate for your partners here " />
            </Box>
            <Divider sx={{ marginY: 2 }} />
            <Box>
              <TypographySubTitle color="#AFAEAF" title="Surrogate" />
              <TypoText color="#151515" title="Card For Card" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TypographyHead title="Supplier Profile" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add Company Details of your partner here " />
            </Box>
            <Divider sx={{ marginY: 2 }} />
           
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Supplier Company"
                  />
                  <TypoText color="#151515" title="Anand Agency" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Work Address" />
                  <TypoText
                    color="#151515"
                    title="46, Lakshmi Nagar, Chromepet,
                               chennai - 600040"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Country" />
                  <TypoText color="#151515" title="India" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="State" />
                  <TypoText color="#151515" title="Tamil Nadu" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="City" />
                  <TypoText color="#151515" title="Trichy" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Cities of operations"
                  />
                  <TypoText color="#151515" title="Pan India" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Telephone no" />
                  <TypoText color="#151515" title="044 234876" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
                  <TypoText color="#151515" title="ABC@gmail.com" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Year of inc./ in Business Since"
                  />
                  <TypoText color="#151515" title="10/05/2015" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Nature of Business"
                  />
                  <TypoText color="#151515" title="Trading" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Nature of Company"
                  />
                  <TypoText color="#151515" title="Pvt.Ltd" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Clarity on Company"
                  />
                  <TypoText color="#151515" title="Person" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Company Registration Number"
                  />
                  <TypoText color="#151515" title="U72900TN2020PTC130006" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Major Products" />
                  <TypoText
                    color="#151515"
                    title="Digital Credit card Issurance"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Description of items/ Services"
                  />
                  <TypoText
                    color="#151515"
                    title="Digital Credit card issuance"
                  />
                </Box>
              </Grid>
              
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TypographyHead title="Proprietor/ All Directors/ All Partners" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key personal information of your partner(s) here. " />
            </Box>
            <Divider sx={{ marginY: 2 }} />
            
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Name" />
                  <TypoText color="#151515" title="Ganesh" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Mobile Number" />
                  <TypoText color="#151515" title="9876543210" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
                  <TypoText color="#151515" title="Ganesh@gmail.com" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Gender" />
                  <TypoText color="#151515" title="Male" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Date of Birth" />
                  <TypoText color="#151515" title="07/02/1986" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="User Role" />
                  <TypoText color="#151515" title="Super Admin" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Designation" />
                  <TypoText color="#151515" title="User Admin" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Address" />
                  <TypoText
                    color="#151515"
                    title="24, Railway colony station road,
Koratur, chennai 600101."
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ marginY: 2 }} />

          <Box>
            <Box sx={{ display: 'flex', gap: 2, marginY: 3 }}>
              <TypographyHead title="Proprietor/ All Directors/ All Partners - 2" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key personal information of your partner(s) here. " />
            </Box>

            {/* <Box>
                <TypographySubTitle color='#AFAEAF' title='Supplier Company' />
                <TypoText color='#151515'  title='Anand Agency' />
            </Box> */}
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Name" />
                  <TypoText color="#151515" title="Ganesh" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Mobile Number" />
                  <TypoText color="#151515" title="9876543210" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
                  <TypoText color="#151515" title="Ganesh@gmail.com" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Gender" />
                  <TypoText color="#151515" title="Male" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Date of Birth" />
                  <TypoText color="#151515" title="07/02/1986" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="User Role" />
                  <TypoText color="#151515" title="Super Admin" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Designation" />
                  <TypoText color="#151515" title="User Admin" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Address" />
                  <TypoText
                    color="#151515"
                    title="24, Railway colony station road,
Koratur, chennai 600101."
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TypographyHead title="Key Contact Details" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add your partner’s contact information here." />
            </Box>
            <Divider sx={{ marginY: 2 }} />
            {/* <Box>
                <TypographySubTitle color='#AFAEAF' title='Supplier Company' />
                <TypoText color='#151515'  title='Anand Agency' />
            </Box> */}
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Name" />
                  <TypoText color="#151515" title="Ganesh" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Mobile Number" />
                  <TypoText color="#151515" title="9876543210" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
                  <TypoText color="#151515" title="Ganesh@gmail.com" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="User Role" />
                  <TypoText color="#151515" title="Super Admin" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Designation" />
                  <TypoText color="#151515" title="User Admin" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Reporting Head" />
                  <TypoText color="#151515" title="Venket" />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ marginY: 2 }} />

          <Box>
            <Box sx={{ display: 'flex', gap: 2, marginY: 3 }}>
              <TypographyHead title="Key Contact Details - 2" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add your partner’s contact information here." />
            </Box>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Name" />
                  <TypoText color="#151515" title="Ganesh" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Mobile Number" />
                  <TypoText color="#151515" title="9876543210" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
                  <TypoText color="#151515" title="Ganesh@gmail.com" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="User Role" />
                  <TypoText color="#151515" title="Super Admin" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Designation" />
                  <TypoText color="#151515" title="User Admin" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Reporting Head" />
                  <TypoText color="#151515" title="Venket" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TypographyHead title="Regulatory Requirement" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key regulatory requirement(s) for your partner here. " />
            </Box>
            <Divider sx={{ marginY: 2 }} />
           
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Registration Number (MSMED)"
                  />
                  <TypoText color="#151515" title="U72900TN2020PTC130006" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="TIN Number" />
                  <TypoText
                    color="#151515"
                    title="U72900TN2020PTC130006"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Country" />
                  <TypoText color="#151515" title="U72900TN2020PTC130006" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="State" />
                  <TypoText color="#151515" title="U72900TN2020PTC130006" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="City" />
                  <TypoText color="#151515" title="Trichy" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Cities of operations"
                  />
                  <TypoText color="#151515" title="Pan India" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Telephone no" />
                  <TypoText color="#151515" title="044 234876" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
                  <TypoText color="#151515" title="ABC@gmail.com" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Year of inc./ in Business Since"
                  />
                  <TypoText color="#151515" title="10/05/2015" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Nature of Business"
                  />
                  <TypoText color="#151515" title="Trading" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Nature of Company"
                  />
                  <TypoText color="#151515" title="Pvt.Ltd" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Clarity on Company"
                  />
                  <TypoText color="#151515" title="Person" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Company Registration Number"
                  />
                  <TypoText color="#151515" title="U72900TN2020PTC130006" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle color="#AFAEAF" title="Major Products" />
                  <TypoText
                    color="#151515"
                    title="Digital Credit card Issurance"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle
                    color="#AFAEAF"
                    title="Description of items/ Services"
                  />
                  <TypoText
                    color="#151515"
                    title="Digital Credit card issuance"
                  />
                </Box>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
