import React, { useEffect } from 'react';
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
import './onboarding.scss';
import { OrgReview } from '../OrgReview/OrgReview';
import { useNavigate } from 'react-router-dom';
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
import Upload_Img from '../../../../../assets/images/uploadImg.svg';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnText from '../../../../../components/commonComponent/CustomText/Button/Text';
import TypographySubTitle from '../../../../../components/commonComponent/CustomText/Typography';
import { UploadDetails } from './uploadDetails';
import { Upload } from './upload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '../../../../../assets/images/edit_card.svg';
import Modal from '@mui/material/Modal';
import ViewDoc from '../../../../../assets/images/viewDoc.svg';
import TypographyHead from '../../../../../components/commonComponent/CustomText/Head';

export const Onboarding = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('DD/MM/YYYY'));

  let objValue = {
    supplierCompany: '',
    workAddress: '',
    country: '',
    state: '',
    city: '',
    citiesOfOperations: '',
    telephoneNo: '',
    emailID: '',
    yearOfInc: '',
    natureOfBusiness: '',
    natureOfCompany: '',
    clarityOnCompany: '',
    companyRegistrationNo: '',
    majorProducts: '',
    descriptionOfItems: '',

    rewardDescription: [{ value: ' ' }],
    keyBenefits: [{ value: ' ' }],
    additionalBenefits: [{ value: ' ' }],
    welcomeBenefits: [{ value: '' }],
  };

  let obj = {
    proprietor: [{ value: ' ' }],
    keyContact: [{ value: ' ' }],
  };

  const [data, setData] = useState(obj);
  const [dataObjValue, setDataObjValue] = useState(objValue);
  const [removeClick, setRemoveClick] = useState({
    keyContact: false,
    proprietor: false,
  });
  const [viewMode, setViewMode] = useState<string>('add');

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
  const removeKeyContact = (index: number) => {
    let newData = data.keyContact ?? [];
    newData.splice(index, 1);
    setData((prev) => ({
      ...prev,
      keyContact: newData,
    }));
  };

  const AddProprietor = () => {
    let newVal = { value: '' };
    setData((prev) => ({
      ...prev,
      proprietor: [...prev.proprietor, newVal],
    }));
  };

  const removeProprietor = (index: number) => {
    let newData = data.proprietor ?? [];
    newData.splice(index, 1);
    setData((prev) => ({
      ...prev,
      proprietor: newData,
    }));
  };

  const handleSubmitClick = () => {
    console.log('coming here');
    // let value = 'add';
    setViewMode('edit');
    // navigate('/userManagement/orgStructure/screens/OrgReview/OrgReview');
    // , {
    //   state: { record: dataObjValue },
    // });
  };

  //   const goBack = () => {
  //     navigate(-1);
  //   };

  useEffect(() => {
    console.log('viewMode', viewMode);
  }, [viewMode]);

  const renderEditModeText = (
    textPlaceholder: string,
    textId: string,
    subTitleTitle: string
  ) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ gap: 2 }}>
          <TypographySubTitle title={subTitleTitle} />
          <TypoText placeholder={textPlaceholder} id={textId} />
        </Box>
      </Grid>
    );
  };

  const renderViewModeText = (
    textColor: string,
    textTitle: string,
    subTitleColor: string,
    subTitleTile: string
  ) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ gap: 2 }}>
          <TypographySubTitle color={subTitleColor} title={subTitleTile} />
          <TypoText color={textColor} title={textTitle} />
        </Box>
      </Grid>
    );
  };

  return (
    <Stack>
      <Box sx={{ backgroundColor: '#E6E7E7' }}>
        {viewMode === 'edit' && (
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
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box onClick={() => navigate(-1)}>
                  <ArrowBackIcon sx={{ color: '#0078EF' }} />
                </Box>
                <Box>
                  <TypoText title="View - Anand Agency - DSA" />
                  <TypographyInfo title="Onboard your partners here" />
                </Box>
              </Box>
              <Box>
                <Button sx={{ backgroundColor: '#E6E7E7', height: '30px' }}>
                  ID.NO 123456
                </Button>
                <Button
                  sx={{ textTransform: 'capitalize', backgroundColor: 'white' }}
                  onClick={() => setViewMode('edit')}
                >
                  <IconButton sx={{ heigght: '30px' }}>
                    <img
                      src={EditIcon}
                      style={{
                        filter: '',
                      }}
                    />
                  </IconButton>
                  Edit
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {viewMode === 'add' && (
          <Box
            sx={{
              backgroundColor: 'white',
              marginTop: '25px',
              padding: '20px 30px',
              borderRadius: '5px',
            }}
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
            </Box>
          </Box>
        )}

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TypoText title="Surrogate" />
              <img src={Info_Icon} />
              <TypographyInfo title="Choose a surrogate for your partners here" />
            </Box>
            <Divider sx={{ marginY: '20px' }} />
            {viewMode === 'add' ? (
              <Box sx={{ width: '90%' }}>
                <Typography
                  sx={{
                    marginBottom: '10px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Select Surrogate
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox color="secondary" />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                      Payroll
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox color="secondary" />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                      Card For Card
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox color="secondary" />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                      CIBIL
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox color="secondary" />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                      AQB
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox color="secondary" />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                      Pre-Approved
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox color="secondary" />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                      Secured
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <TypographySubTitle color="#AFAEAF" title="Surrogate" />
                <TypoText color="#151515" title="Card For Card" />
              </Box>
            )}
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
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TypoText title="Supplier Profile" />
            <img src={Info_Icon} />
            <TypographyInfo title="Add company details of your partner here" />
          </Box>
          <Divider sx={{ marginY: '20px' }} />

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            {viewMode === 'add'
              ? renderEditModeText(
                  'Supplier Name',
                  'businessId',
                  'Supplier Name'
                )
              : renderViewModeText(
                  '#151515',
                  'Anand Agency',
                  '#AFAEAF',
                  'Supplier Company'
                )}
            {viewMode === 'add'
              ? renderEditModeText(
                  'Address Line 1',
                  'businessId',
                  'Work Address'
                )
              : renderViewModeText(
                  '#151515',
                  '46, Lakshmi Nagar, Chromepet, chennai - 600040',
                  '#AFAEAF',
                  'Work Address'
                )}

            {viewMode === 'add'
              ? renderEditModeText('City', 'businessId', 'City')
              : renderViewModeText('#151515', 'Trichy', '#AFAEAF', 'City')}

            {viewMode === 'add'
              ? renderEditModeText('State', 'businessId', 'State')
              : renderViewModeText('#151515', 'Tamil Nadu', '#AFAEAF', 'State')}

            {viewMode === 'add'
              ? renderEditModeText('Country', 'businessId', 'Country')
              : renderViewModeText('#151515', 'India', '#AFAEAF', 'Country')}
            {viewMode === 'add'
              ? renderEditModeText(
                  'Enter Operational Cities',
                  'businessId',
                  'Cities of Operations'
                )
              : renderViewModeText(
                  '#151515',
                  'Pan India',
                  '#AFAEAF',
                  'Cities of Operations'
                )}
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            {viewMode === 'add'
              ? renderEditModeText(
                  'Enter Telephone No',
                  'businessId',
                  'Telephone No'
                )
              : renderViewModeText(
                  '#151515',
                  '044 234876',
                  '#AFAEAF',
                  'Telephone No'
                )}

            {viewMode === 'add'
              ? renderEditModeText('Mail ID', 'businessId', 'E-mail ID')
              : renderViewModeText(
                  '#151515',
                  'ABC@gmail.com',
                  '#AFAEAF',
                  'E-Mail ID'
                )}

            {viewMode === 'add' ? (
              <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TypographySubTitle title="Year of inc./ in Business Since" />
                  <DatePicker
                    //   disableFuture
                    toolbarPlaceholder="DD/MM/YYYY"
                    //   label="DD/MM/YYYY"
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
            ) : (
              renderViewModeText(
                '#151515',
                '10/05/2015',
                '#AFAEAF',
                'Year of inc./ in Business Since'
              )
            )}
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            {viewMode === 'add' ? (
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TypographySubTitle title="Nature of Business" />
                  <Select fullWidth sx={{ height: '40px' }} defaultValue={0}>
                    <MenuItem value={0}>Select</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : (
              renderViewModeText(
                '#151515',
                'Trading',
                '#AFAEAF',
                'Nature of Company'
              )
            )}
            {viewMode === 'add' ? (
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TypographySubTitle title="Nature of Company" />
                  <Select sx={{ height: '40px' }} defaultValue={0}>
                    <MenuItem value={0}>Select</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : (
              renderViewModeText(
                '#151515',
                'Pvt.Ltd',
                '#AFAEAF',
                'Nature of Company'
              )
            )}
            {viewMode === 'add' ? (
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TypographySubTitle title="Clarity on Company" />
                  <Select sx={{ height: '40px' }} defaultValue={0}>
                    <MenuItem value={0}>Select</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : (
              renderViewModeText(
                '#151515',
                'Person',
                '#AFAEAF',
                'Clarity on Company'
              )
            )}
          </Grid>

          <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
            {viewMode === 'add'
              ? renderEditModeText(
                  'Enter Company Registration No',
                  'businessId',
                  'Company Registration No'
                )
              : renderViewModeText(
                  '#151515',
                  'U72900TN2020PTC130006',
                  '#AFAEAF',
                  'Company Registration Number'
                )}

            {viewMode === 'add'
              ? renderEditModeText(
                  'Enter Major Products',
                  'businessId',
                  'Major Products'
                )
              : renderViewModeText(
                  '#151515',
                  'Digital Credit card Issurance',
                  '#AFAEAF',
                  'Major Products'
                )}

            {viewMode === 'add'
              ? renderEditModeText(
                  'Digital Credit card insurance',
                  'businessId',
                  'Description of items/services'
                )
              : renderViewModeText(
                  '#151515',
                  'Digital Credit card Insurance',
                  '#AFAEAF',
                  'Description of items/ Services'
                )}
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Proprietor/ All Directors/ All Partners" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key personal information of your partner(s) here." />
            </Box>
            {viewMode === 'add' && (
              <Box>
                <Button
                  color="secondary"
                  sx={{ textTransform: 'capitalize' }}
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={AddProprietor}
                >
                  Add New Person
                </Button>
              </Box>
            )}
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          {data.proprietor.map((item, index) => {
            return (
              <Box>
                {viewMode === 'add' && index !== 0 && (
                  <Box>
                    <Divider sx={{ marginY: '20px' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <TypoText title={`Key Contact Person ${index + 1}`} />
                      <Button
                        color="secondary"
                        onClick={() => removeProprietor(index)}
                        startIcon={<HighlightOffIcon />}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                )}
                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  {viewMode === 'add'
                    ? renderEditModeText('Enter Name', 'businessId', 'Name')
                    : renderViewModeText(
                        '#151515',
                        'Ganesh',
                        '#AFAEAF',
                        'Name'
                      )}
                  {viewMode === 'add'
                    ? renderEditModeText(
                        'Enter Mobile No',
                        'businessId',
                        'Mobile No'
                      )
                    : renderViewModeText(
                        '#151515',
                        '9876543210',
                        '#AFAEAF',
                        'Mobile Number'
                      )}

                  {viewMode === 'add'
                    ? renderEditModeText(
                        'Enter E-mail ID',
                        'businessId',
                        'E-mail ID'
                      )
                    : renderViewModeText(
                        '#151515',
                        'Ganesh@gmail.com',
                        '#AFAEAF',
                        'E-mail ID'
                      )}
                  {viewMode === 'edit' &&
                    renderViewModeText('#151515', 'Male', '#AFAEAF', 'Gender')}
                </Grid>

                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  {viewMode === 'add' && (
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControl fullWidth>
                        <TypographySubTitle title="Gender" />
                        <Select sx={{ height: '40px' }} defaultValue={0}>
                          <MenuItem value={0}>Select Gender</MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  )}
                  {viewMode === 'add' ? (
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControl fullWidth>
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
                              <TextField
                                sx={{ borderColor: 'black' }}
                                size="small"
                                {...params}
                                fullWidth
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </FormControl>
                    </Grid>
                  ) : (
                    renderViewModeText(
                      '#151515',
                      '07/02/1986',
                      '#AFAEAF',
                      'Date of Birth'
                    )
                  )}
                  {viewMode === 'add' ? (
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControl fullWidth>
                        <TypographySubTitle title="User Role" />
                        <Select
                          sx={{ height: '40px' }}
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
                  ) : (
                    renderViewModeText(
                      '#151515',
                      'Super Admin',
                      '#AFAEAF',
                      'User Role'
                    )
                  )}

                  {viewMode === 'edit' &&
                    renderViewModeText(
                      '#151515',
                      'User Admin',
                      '#AFAEAF',
                      'Designation'
                    )}

                  {viewMode === 'edit' &&
                    renderViewModeText(
                      '#151515',
                      '24, Railway colony station road, Koratur, chennai 600101.',
                      '#AFAEAF',
                      'Address'
                    )}
                </Grid>

                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  {viewMode === 'add' &&
                    renderEditModeText(
                      'Enter Company Registration No.',
                      'businessId',
                      'Designation'
                    )}

                  {viewMode === 'add' &&
                    renderEditModeText(
                      'Enter Address',
                      'businessId',
                      'Address'
                    )}
                </Grid>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Key Contact Details" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add your partner's contact information here." />
            </Box>
            {viewMode === 'add' && (
              <Box>
                <Button
                  color="secondary"
                  sx={{ textTransform: 'capitalize' }}
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={AddKeyContact}
                >
                  Add New Person
                </Button>
              </Box>
            )}
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          {data.keyContact.map((item, index) => {
            return (
              <Box>
                {viewMode === 'add' && index !== 0 && (
                  <Box>
                    <Divider sx={{ marginY: '20px' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <TypoText title={`Key Contact Person ${index + 1}`} />
                      <Button
                        color="secondary"
                        onClick={() => removeKeyContact(index)}
                        startIcon={<HighlightOffIcon />}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                )}

                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  {viewMode === 'add'
                    ? renderEditModeText('Enter Name', 'businessId', 'Name')
                    : renderViewModeText(
                        '#151515',
                        'Ganesh',
                        '#AFAEAF',
                        'Name'
                      )}

                  {viewMode === 'add'
                    ? renderEditModeText(
                        'Enter Contact Number',
                        'businessId',
                        'Contact Number'
                      )
                    : renderViewModeText(
                        '#151515',
                        '9876543210',
                        '#AFAEAF',
                        'Mobile Number'
                      )}

                  {viewMode === 'add'
                    ? renderEditModeText('@M2P.com', 'businessId', 'E-mail ID')
                    : renderViewModeText(
                        '#151515',
                        'Ganesh@gmail.com',
                        '#AFAEAF',
                        'E-Mail ID'
                      )}

                  {viewMode === 'edit' &&
                    renderViewModeText(
                      '#151515',
                      'User Role',
                      '#AFAEAF',
                      'User Role'
                    )}
                </Grid>

                <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                  {viewMode === 'add' && (
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControl fullWidth>
                        <TypographySubTitle title="User Role" />
                        <Select sx={{ height: '40px' }} defaultValue={0}>
                          <MenuItem value={0}>Select Role</MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Box
                          sx={{
                            display: 'flex',
                            paddingTop: '8px',
                            gap: 1,
                            width: '400px',
                          }}
                        >
                          <img
                            style={{ width: '13px', height: '13px' }}
                            src={Info_Icon}
                          />
                          <Typography
                            sx={{ fontSize: '9px', fontWeight: '400' }}
                          >
                            Please Assign Super Admin role if needed.
                          </Typography>
                        </Box>
                      </FormControl>
                    </Grid>
                  )}

                  {viewMode === 'add'
                    ? renderEditModeText(
                        'Enter Designation',
                        'businessId',
                        'Designation'
                      )
                    : renderViewModeText(
                        '#151515',
                        'User Admin',
                        '#AFAEAF',
                        'Designation'
                      )}

                  {viewMode === 'add'
                    ? renderEditModeText(
                        'Enter Reporting Head',
                        'businessId',
                        'Reporting Head'
                      )
                    : renderViewModeText(
                        '#151515',
                        'Venkat',
                        '#AFAEAF',
                        'Reporting Head'
                      )}

                  {/* <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ gap: 2 }}>
                      <TypographySubTitle title="Reporting Head" />
                      <TypoText
                        placeholder="Enter Reporting Head"
                        id="businessId"
                      />
                    </Box>
                  </Grid> */}
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

        {viewMode === 'add' && (
          <Box
            sx={{
              backgroundColor: 'white',
              marginTop: '25px',
              padding: '20px 30px',
              borderRadius: '5px',
            }}
          >
            {viewMode === 'add' ? (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <TypoText title="Regulatory Requirement" />
                    <img src={Info_Icon} />
                    <TypographyInfo title="Add key regulatory requirement(s) for your partner here." />
                  </Box>
                </Box>
                <Divider sx={{ marginY: '20px' }} />
                <UploadDetails />
              </Box>
            ) : (
              <OrgReview />
            )}
          </Box>
        )}

        {viewMode === 'edit' && (
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
                    <img className="img" src={ViewDoc} />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle color="#AFAEAF" title="TIN Number" />
                    <TypoText color="#151515" title="U72900TN2020PTC130006" />
                    <img className="img" src={ViewDoc} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle color="#AFAEAF" title="GST Number" />
                    <TypoText color="#151515" title="U72900TN2020PTC130006" />
                    <img className="img" src={ViewDoc} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle color="#AFAEAF" title="PAN Number" />
                    <TypoText color="#151515" title="U72900TN2020PTC130006" />
                    <img className="img" src={ViewDoc} />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="ESIC Registration No"
                    />
                    <TypoText color="#151515" title="U72900TN2020PTC130006" />
                    <img className="img" src={ViewDoc} />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="PF Registration No"
                    />
                    <TypoText color="#151515" title="U72900TN2020PTC130006" />
                    <img className="img" src={ViewDoc} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
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
              {viewMode === 'add'
                ? renderEditModeText(
                    'Enter Payee details',
                    'businessId',
                    'Payment / Cheque in Favor Of - Payee Details'
                  )
                : renderViewModeText(
                    '#151515',
                    '46, Lakshmi Nagar, Chromepet,chennai - 600040',
                    '#AFAEAF',
                    'Payee Address (Pref)'
                  )}
              {viewMode === 'add'
                ? renderEditModeText(
                    'Enter Payee address',
                    'businessId',
                    'Payee Address (Pref)'
                  )
                : renderViewModeText(
                    '#151515',
                    'India',
                    '#AFAEAF',
                    'Default Credit Period (Days)'
                  )}
              {viewMode === 'add'
                ? renderEditModeText(
                    '15',
                    'businessId',
                    'Default Credit Period (Days)'
                  )
                : renderViewModeText(
                    '#151515',
                    '15',
                    '#AFAEAF',
                    'Default Credit Period (Days)' //todo
                  )}
              {viewMode === 'edit' &&
                renderViewModeText(
                  '#151515',
                  'Payee Details',
                  '#AFAEAF',
                  'Payment / Cheque in Favor Of - Payee Details'
                )}
            </Grid>

            {viewMode === 'add' ? (
              <Box sx={{ marginBottom: '20px', width: '100%' }}>
                <TypographySubTitle title="If Payee's name is different, please specify the reason for same. (Optional)" />
                <TextField size="small" fullWidth label="(optional)" />
              </Box>
            ) : (
              renderViewModeText(
                '#151515',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo ac tortor euismod nulla tristique viverra malesuada. Vitae mi id sagittis, dui rhoncus morbi magna senectus. Viverra amet, libero lorem mauris eu. Amet massa tellus hac sed est senectus aliquam proin. Tempus at euismod ut duis. ',
                '#AFAEAF',
                'Key Benefits 1'
              )
            )}
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
              {viewMode === 'add' ? (
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <TypographySubTitle title="Bank Name" />
                    <Select sx={{ height: '40px' }} defaultValue={0}>
                      <MenuItem value={0}>Choose Bank</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              ) : (
                renderViewModeText(
                  '#151515',
                  'YES Bank',
                  '#AFAEAF',
                  'Bank Name'
                )
              )}

              {/* {viewMode === 'add'
                ? renderEditModeText(
                    '15',
                    'businessId',
                    'Default Credit Period (Days)'
                  )
                : renderViewModeText(
                    '#151515',
                    '12345678909876',
                    '#AFAEAF',
                    'Bank Account Number'
                  )} */}

              {viewMode === 'add'
                ? renderEditModeText(
                    'Enter Bank Account Number',
                    'businessId',
                    'Bank Account Number'
                  )
                : renderViewModeText(
                    '#151515',
                    'HDFC0000012',
                    '#AFAEAF',
                    'IFSC Code'
                  )}

              {viewMode === 'add'
                ? renderEditModeText(
                    'Enter IFSC Code',
                    'businessId',
                    'IFSC Code'
                  )
                : renderViewModeText(
                    '#151515',
                    '24, Railway colony station road, Koratur, chennai - 6000101.',
                    '#AFAEAF',
                    'Address Line 1'
                  )}

              {viewMode === 'edit' &&
                renderViewModeText(
                  '#151515',
                  '24, Railway colony station road, Koratur, chennai - 6000101.',
                  '#AFAEAF',
                  'Address Line 2'
                )}
            </Grid>

            <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
              {viewMode === 'add' &&
                renderEditModeText(
                  'Enter Address line 1',
                  'businessId',
                  'Address Line 1'
                )}

              {viewMode === 'add' &&
                renderEditModeText(
                  'Enter Address line 2',
                  'businessId',
                  'Address line 2'
                )}

              {viewMode === 'add'
                ? renderEditModeText('Enter Pincode', 'businessId', 'Pincode')
                : renderViewModeText('#151515', '123456', '#AFAEAF', 'Pincode')}

              {viewMode === 'edit' &&
                renderViewModeText(
                  '#151515',
                  '123456789',
                  '#AFAEAF',
                  'MICR Code (9 digit)'
                )}
            </Grid>

            {viewMode === 'add' && (
              <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
              <Box sx={{ width: '280px' }}>
                <TypographySubTitle title="MICR Code (9 digits)" />
                <TypoText placeholder="Enter MICR Code" id="businessId" />
              </Box>
              <Upload title='Attach Copy of Cancelled Cheque'  />
            </Box>
                
              
            )}
          </Box>
        </Box>

        {viewMode === 'add' && (
          <Box
            sx={{
              backgroundColor: 'white',
              marginTop: '25px',
              padding: '20px 30px',
              marginBottom: '100px',
              borderRadius: '5px',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TypoText title="Declaration" />
              <img src={Info_Icon} />
              <TypographyInfo title="Confirm the information you have provided to proceed." />
            </Box>
            <Divider sx={{ marginY: '20px' }} />
            <Box sx={{ width: '90%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Checkbox color="secondary" />
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    All information I have provided is true and accurate.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {viewMode === 'edit' && (
          <Box
            sx={{
              backgroundColor: 'white',
              marginTop: '25px',
              padding: '20px 30px',
              borderRadius: '5px',
              marginBottom: '100px',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TypographyHead title="Banking details mandatory for Electronic transfer" />
                <img src={Info_Icon} />
                <TypographyInfo title="Add your partner's bank details here " />
              </Box>
              <Divider sx={{ marginY: 2 }} />

              <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle color="#AFAEAF" title="Bank Name" />
                    <TypoText color="#151515" title="YES Bank" />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="Bank Account Number"
                    />
                    <TypoText color="#151515" title="12345678909876" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle color="#AFAEAF" title="IFSC Code" />
                    <TypoText color="#151515" title="India" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="Branch Address"
                    />
                    <TypoText
                      color="#151515"
                      title="24, Railway colony station road,
Koratur, chennai - 6000101."
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="Address Line 2"
                    />
                    <TypoText
                      color="#151515"
                      title="T24, Railway colony station road,
Koratur, chennai - 600100"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle color="#AFAEAF" title="Pincode" />
                    <TypoText color="#151515" title="600100" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="MICR Code (9 digit)"
                    />
                    <TypoText color="#151515" title="123456789" />
                  </Box>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={3}>
             <Box sx={{ gap: 2 }}>
               <TypographySubTitle color="#AFAEAF" title="E-Mail ID" />
               <TypoText color="#151515" title="ABC@gmail.com" />
             </Box>
           </Grid> */}
              </Grid>

              <Grid container sx={{ marginBottom: '20px' }} spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ gap: 2 }}>
                    <TypographySubTitle
                      color="#AFAEAF"
                      title="Cancelled Cheque"
                    />
                    {/* <Typography className='typeText' >File Name : Abcd12345</Typography> */}
                    <TypoText color="#151515" title="File Name : Abcd12345" />
                  </Box>
                  {/* <Card className="card"> */}
                  <Card sx={{ width: '19vw', height: '20vh' }}>
                    <img src={ViewDoc} onClick={handleOpen} />

                    {open && (
                      <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // width: '100vw',
                            height: '100vh',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: 'white',
                              borderRadius: '10px',
                              padding: '20px',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingBottom: '15px',
                              }}
                            >
                              {/* <Typography
                       sx={{
                         fontSize: '14px',
                         fontWeight: 500,
                         lineHeight: '16px',
                         color: '#231F20',
                         letterSpacing: '0.001em',
                       }}
                     >
                       Card Photo - Eterna - Platinum
                     </Typography> */}
                              <Typography
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: 500,
                                  lineHeight: '16px',
                                  color: '#0662B7',
                                  letterSpacing: '0.0125em',
                                }}
                                onClick={handleClose}
                              >
                                Close
                              </Typography>
                            </Box>
                            <Box className="cardImageBox">
                              <img
                                style={{
                                  width: '40vw',
                                  height: '35vh',
                                }}
                                alt=""
                                src={ViewDoc}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Modal>
                    )}
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            marginTop: '20px',
            backgroundColor: 'white',
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '100%',
            borderTop: '1px solid #e9edf5',
          }}
        >
          {viewMode === 'add' ? (
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'flex-end',
                padding: '20px',
              }}
            >
              <BtnOutlined onClick={() => navigate(-1)} title="close" />

              <BtnText title="Save as draft" />

              <BtnContained onClick={handleSubmitClick} title="Submit" />
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'flex-end',
                padding: '20px',
              }}
            >
              <BtnOutlined onClick={() => navigate(-1)} title="close" />
            </Box>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

/* 
945

 <Box
          sx={{
            backgroundColor: 'white',
            marginTop: '25px',
            padding: '20px 30px',
            borderRadius: '5px',
          }}
        >
            {viewMode === 'add' ? 
            (<Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TypoText title="Regulatory Requirement" />
              <img src={Info_Icon} />
              <TypographyInfo title="Add key regulatory requirement(s) for your partner here." />
            </Box>
          </Box>
          <Divider sx={{ marginY: '20px' }} />
          <UploadDetails /></Box>) : (<OrgReview/>)}
        </Box>
*/
