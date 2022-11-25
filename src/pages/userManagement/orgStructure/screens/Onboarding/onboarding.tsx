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
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Info_Icon from '../../../../../assets/images/info_icon.svg';
import TypoText from '../../../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../../../components/commonComponent/CustomText/Info';
import CheckBoxModal from '../../../../../components/commonComponent/customModal/PopoverModal';
import { CheckBox } from '@mui/icons-material';
import Upload_Img from '../../../../../assets/images/uploadImg.png';
import AddIcon from '@mui/icons-material/Add';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnText from '../../../../../components/commonComponent/CustomText/Button/Text';
import TypographySubTitle from '../../../../../components/commonComponent/CustomText/Typography';


export const Onboarding = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('DD/MM/YYYY'));

  let obj = {
    proprietor: [{ value: ' ' }],
    keyContact: [{ value: ' ' }],
  };

  const [data, setData] = useState(obj);
  const [removeClick, setRemoveClick] = useState({
    keyContact: false,
    proprietor: false,
  });

  const AddKeyContact = () => {
    // console.log('add key');
    let newVal = { value: '' };
    setData((prev) => ({
      ...prev,
      keyContact: [...prev.keyContact, newVal],
    }));
    // setRemoveClick((prev) => ({
    //   ...prev,
    //   keyContact: true,
    // }));
  };
   const removeKeyContact = (index:number)=>{
    let newData= data.keyContact ?? [];
    newData.splice(index,1);
    setData((prev)=>({
      ...prev, keyContact:newData,
    }));

   }

   const AddProprietor=()=>{
    let newVal = {value:''}
    setData((prev)=>({
      ...prev,
      proprietor:[...prev.proprietor,newVal]
    }))
   }

   const removeProprietor = (index:number)=>{
    let newData= data.proprietor ?? [];
    newData.splice(index,1);
    setData((prev)=>({
      ...prev, proprietor:newData,
    }));

   }

  return (
    <Stack>
      <Box sx={{ backgroundColor: '#E6E7E7' }}>
        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <TypoText title="DSA Onboarding" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TypographyInfo title="Onboard your partners here" />

            <Button sx={{ backgroundColor: '#E6E7E7' }}>ID.NO 123456</Button>
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <TypoText title="Fintech Partners Onboarding" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TypographyInfo title="Onboard your fintech partners here" />

            <Button sx={{ backgroundColor: '#E6E7E7' }}>ID.NO 123456</Button>
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TypoText title="Surrogate" />
              <img src={Info_Icon} />
              <TypographyInfo title="Choose a surrogate for your partners here" />
            </Box>
            <Divider sx={{ marginY: '20px' }} />
            <Box sx={{ width: '90%' }}>
              <Typography
                sx={{
                  marginBottom: '15px',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                Select Surrogate
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    Payroll
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    Card For Card
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    CIBIL
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    AQB
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    Pre-Approved
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    Secured
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TypoText title="Supplier Profile" />
            <img src={Info_Icon} />
            <TypographyInfo title="Add company details of your partner here" />
          </Box>
          <Divider sx={{ marginY: '20px' }} />

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Supplier Name" />
                <TypoText placeholder="Supplier Name" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Work Address" />
                <TypoText placeholder="Address Line 1" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Country" />
                <TypoText placeholder="State & Country" id="businessId" />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="State" />
                <TypoText placeholder="State & Country" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="City" />
                <TypoText placeholder="City" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Cities of Operations" />
                <TypoText
                  placeholder="Enter Operational Cities"
                  id="businessId"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Telephone No" />
                <TypoText placeholder="Enter Telephone No" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="E-mail ID" />
                <TypoText placeholder="Mail ID" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TypographySubTitle title="Year of inc./ in Business Since" />
                <DatePicker
                  disableFuture
                  // label="Responsive"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField size="small" {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl className="formctrl">
                <TypographySubTitle title="Nature of Business" />
                <Select
                  sx={{ height: '40px', width: '280px' }}
                  defaultValue={0}
                >
                  <MenuItem value={0}>Select</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl className="formctrl">
                <TypographySubTitle title="Nature of Company" />
                <Select
                  sx={{ height: '40px', width: '280px' }}
                  defaultValue={0}
                >
                  <MenuItem value={0}>Select</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl className="formctrl">
                <TypographySubTitle title="Clarity on Company" />
                <Select
                  sx={{ height: '40px', width: '280px' }}
                  defaultValue={0}
                  fullWidth
                >
                  <MenuItem value={0}>Select</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Company Registration No" />
                <TypoText
                  placeholder="Enter Company Registration No"
                  id="businessId"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Major Products" />
                <TypoText placeholder="Enter Major Products" id="businessId" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypographySubTitle title="Description of items/services" />
                <TypoText
                  placeholder="Digital Credit card insurance"
                  id="businessId"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Proprietor/ All Directors/ All Partners" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key personal information of your partner(s) here." />
            </Box>
            <Box>
              <Button
                sx={{ textTransform: 'capitalize' }}
                startIcon={<AddIcon />}
                onClick={AddProprietor}
              >
                Add New Person
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          {data.proprietor.map((item,index)=>{
            return(
              <Box>
          {index !== 0 && (
                  <Box>
                    <Divider sx={{ marginY: '20px' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <TypoText title={`Key Contact Person ${index + 1}`} />
                      <Button onClick={() => removeProprietor(index)} startIcon={<HighlightOffIcon />}>Remove</Button>
                    </Box>
                  </Box>
                )}
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Name" />
                  <TypoText placeholder="Enter Name" id="businessId" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Mobile No" />
                  <TypoText placeholder="Enter Mobile No" id="businessId" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="E-mail ID" />
                  <TypoText placeholder="Enter E-mail ID" id="businessId" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl className="formctrl">
                  <TypographySubTitle title="Gender" />
                  <Select
                    sx={{ height: '40px', width: '280px' }}
                    defaultValue={0}
                  >
                    <MenuItem value={0}>Select Gender</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl className="formctrl">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TypographySubTitle title="Date of Birth" />
                    <DatePicker
                      disableFuture
                      // label="Responsive"
                      openTo="year"
                      views={['year', 'month', 'day']}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField size="small" {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl className="formctrl">
                  <TypographySubTitle title="User Role" />
                  <Select
                    sx={{ height: '40px', width: '280px' }}
                    defaultValue={0}
                    fullWidth
                  >
                    <MenuItem value={0}>Select Role</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Designation" />
                  <TypoText
                    placeholder="Enter Company Registration No."
                    id="businessId"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Address" />
                  <TypoText placeholder="Enter Address" id="businessId" />
                </Box>
              </Grid>
            </Grid>
          </Box>

            )
          })}
          
          
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Key Contact Details" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add your partner's contact information here." />
            </Box>
            <Box>
              <Button
                sx={{ textTransform: 'capitalize' }}
                startIcon={<AddIcon />}
                onClick={AddKeyContact}
              >
                Add New Person
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          {data.keyContact.map((item, index) => {
            return (
              <Box>
                {index !== 0 && (
                  <Box>
                    <Divider sx={{ marginY: '20px' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <TypoText title={`Key Contact Person ${index + 1}`} />
                      <Button onClick={() => removeKeyContact(index)} startIcon={<HighlightOffIcon />}>Remove</Button>
                    </Box>
                  </Box>
                )}
               
                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ gap: 2 }}>
                      <TypographySubTitle title="Name" />
                      <TypoText placeholder="Enter Name" id="businessId" />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ gap: 2 }}>
                      <TypographySubTitle title="Contact Number" />
                      <TypoText
                        placeholder="Enter Contact Number"
                        id="businessId"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ gap: 2 }}>
                      <TypographySubTitle title="E-mail ID" />
                      <TypoText placeholder="@M2P.com" id="businessId" />
                    </Box>
                  </Grid>
                </Grid>

                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormControl className="formctrl">
                      <TypographySubTitle title="User Role" />
                      <Select
                        sx={{ height: '40px', width: '280px' }}
                        defaultValue={0}
                      >
                        <MenuItem value={0}>Select Role</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      <Box sx={{ display: 'flex', paddingTop: '8px', gap: 1 }}>
                        <img
                          style={{ width: '13px', height: '13px' }}
                          src={Info_Icon}
                        />
                        <Typography sx={{ fontSize: '8px', fontWeight: '400' }}>
                          Please Assign Super Admin role if needed.
                        </Typography>
                      </Box>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ gap: 2 }}>
                      <TypographySubTitle title="Designation" />
                      <TypoText
                        placeholder="Enter Designation"
                        id="businessId"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ gap: 2 }}>
                      <TypographySubTitle title="Reporting Head" />
                      <TypoText
                        placeholder="Enter Reporting Head"
                        id="businessId"
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* <Box>
                  {removeClick.keyContact ? (
                    <Box>
                      <Divider sx={{ marginY: '20px' }} />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <TypoText title={`Key Contact Person ${index + 1}`} />
                        <Button startIcon={<HighlightOffIcon />}>Remove</Button>
                      </Box>
                    </Box>
                  ) : (
                    ''
                  )}
                </Box> */}
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Regulatory Requirement" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key regulatory requirement(s) for your partner here." />
            </Box>
            <Box>
              <Button
                sx={{ textTransform: 'capitalize' }}
                startIcon={<AddIcon />}
              >
                Add New Person
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          <Box>
            <Box sx={{ marginBottom: '20px', width: '280px' }}>
              <TypographySubTitle title="Registration Number (MSMED)" />
              <TypoText
                placeholder="Enter Registration Number"
                id="businessId"
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="TIN Number" />
                <TypoText placeholder="Enter TIN Number" id="businessId" />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of TIN Number
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="GST Number" />
                <TypoText placeholder="Enter GST Number" id="businessId" />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of GST Number
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="PAN Number" />
                <TypoText placeholder="Enter PAN Number" id="businessId" />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of PAN Number
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="Shop & Establishment" />
                <TypoText
                  placeholder="Enter Shop & Establishment"
                  id="businessId"
                />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of shop & Establishment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="ESIC Registration No" />
                <TypoText
                  placeholder="Enter ESIC Registration No"
                  id="businessId"
                />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of ESIC Registration No
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="PF Registration No" />
                <TypoText
                  placeholder="Enter PF Registration No"
                  id="businessId"
                />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of PF Registration No
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Regulatory Requirement" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key regulatory requirement(s) for your partner here." />
            </Box>
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          <Box>
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Payment / Cheque in Favor Of - Payee Details" />
                  <TypoText placeholder="Enter Payee details" id="businessId" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Payee Address (Pref)" />
                  <TypoText placeholder="Enter Address" id="businessId" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Default Credit Period (Days)" />
                  <TypoText placeholder="15" id="businessId" />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: '20px', width: '100%' }}>
              <TypographySubTitle title="If Payee's name is different, please specify the reason for same. (Optional)" />
              <TextField size="small" fullWidth label="(optional)" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: 'white', marginTop: '25px', padding: '20px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Banking details mandatory for Electronic transfer" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add your partner's bank details here." />
            </Box>
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          <Box>
            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl className="formctrl">
                  <TypographySubTitle title="Bank Name" />
                  <Select
                    sx={{ height: '40px', width: '280px' }}
                    defaultValue={0}
                  >
                    <MenuItem value={0}>Choose Bank</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Bank Account Number" />
                  <TypoText
                    placeholder="Enter Bank Account Number"
                    id="businessId"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="IFSC Code" />
                  <TypoText placeholder="Enter IFSC Code" id="businessId" />
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Branch Address" />
                  <TypoText
                    placeholder="Enter Branch Address"
                    id="businessId"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Address line 2" />
                  <TypoText
                    placeholder="Enter Address line 2"
                    id="businessId"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ gap: 2 }}>
                  <TypographySubTitle title="Pincode" />
                  <TypoText placeholder="Enter Pincode" id="businessId" />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="MICR Code (9 digits)" />
                <TypoText placeholder="Enter MICR Code" id="businessId" />
              </Box>
              <Box
                sx={{
                  width: '423px',
                  display: 'flex',
                  border: '2px dashed ',
                  borderColor: '#D2D2D3',
                  backgroundColor: '#F3F3F3',
                  borderRadius: '4px',
                  height: '45px',
                  marginTop: '14px',
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Button>
                    <img src={Upload_Img} />
                  </Button>
                </Box>
                <Box sx={{ paddingY: '3px' }}>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#0662B7',
                    }}
                  >
                    Attach Copy Of PF Registration No
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      letterSpacing: '0.004em',
                      color: 'grey',
                    }}
                  >
                    Upload file in PDF/JPEG/PNG formats with a maximum file size
                    2MB
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px',
            marginBottom: '100px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TypoText title="Declaration" />
              <img src={Info_Icon} />
              <TypographyInfo title="Confirm the information you have provided to proceed." />
            </Box>
            <Divider sx={{ marginY: '20px' }} />
            <Box sx={{ width: '90%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <CheckBox />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    All information I have provided is true and accurate.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: '20px',
            backgroundColor: 'white',
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '100%',
            borderTop: '1px solid black',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'flex-end',
              padding: '20px',
            }}
          >
            <BtnOutlined title="close" />

            <BtnText title="Save as draft" />

            <BtnContained title="Submit" />
          </Box>
        </Box>
      </Box>
    </Stack>
    )
}