import React from 'react';
import { useState } from 'react';
import './createNewCard.scss';
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
import SelectDropdown from '../../../../components/commonComponent/CheckboxSelectDropdown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnText from '../../../../components/commonComponent/CustomText/Button/Text';

import Info_Icon from '../../../../assets/images/info_icon.svg';
import Upload_Img from '../../../../assets/images/uploadImg.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import TypoText from '../../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import { useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
import TypographySubTitle from '../../../../components/commonComponent/CustomText/Typography';
import Modal from '@mui/material/Modal';
import CardImage from '../../../../assets/images/image 44.png';
import EditIcon from '../../../../assets/images/edit_card.svg';
import { useLocation } from 'react-router-dom';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';

export interface singleCardFilterInterface {
  label?: string;
  option?: Array<object>;
}

export const SingleCardFilterDropdown: singleCardFilterInterface[] = [
  {
    label: 'Card Mode',
    option: [
      { value: 'All', name: 'All Mode' },
      { value: 'Salaried', name: 'Salaried' },
      { value: 'Business', name: 'Business' },
      { value: 'Doctor', name: 'Doctor' },
      { value: 'Teacher', name: 'Teacher' },
      { value: 'Defence', name: 'Defence' },
      { value: 'Chartered Accountant', name: 'Chartered Accountant' },
      { value: 'FD Based', name: 'FD Based' },
    ],
  },
  {
    label: 'Card Type',
    option: [
      { value: 'All', name: 'All Type' },
      { value: 'General Basic', name: 'General Basic' },
      { value: 'General Premium', name: 'General Premium' },
      { value: 'General Super Premium', name: 'General Super Premium' },
      { value: 'Co-Brands', name: 'Co-Brands' },
      { value: 'Business Basic', name: 'Business Basic' },
      { value: 'Business Premium', name: 'Business Premium' },
      { value: 'Business Super Premium', name: 'Business Super Premium' },
    ],
  },

  {
    label: 'Spend Period',
    option: [
      { value: '1', name: '1 Month' },
      { value: '1', name: '2 Month' },
      { value: '1', name: '3 Month' },
      { value: '1', name: '4 Month' },
      { value: '1', name: '5 Month' },
      { value: '1', name: '6 Month' },
      { value: '1', name: '7 Month' },
      { value: '1', name: '10 Month' },
      { value: '1', name: '11 Month' },
      { value: '1', name: '12 Month' },
    ],
  },
];

const CreateNewCard = () => {
  const [review, setReview] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const { state } = useLocation();
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const close = () => {
    navigate('/productManagement/cardCatalogue');
  };
  const draftNavigate = () => {
    navigate('/productManagement/cardCatalogue');
  };

  let obj = {
    businessId: '',
    cardName: '',
    interestRate: '',
    maximumCardLimit: '',
    cibilScore: '',
    aqbLimit: '',
    rcValue: '',
    itrLimit: '',
    salaryLimit: '',
    c4cLimit: '',
    joiningFee: '',
    joiningFeeWavier: '',
    fuelSurchargeWavier: '',
    currencyMarkup: '',
    fuelSurcharge: '',
    fuelSurchargeDescription: '',
    annualFee: '',
    annualFeeWavier: '',
    currencyMarkupCharges: '',
    currencyMarkupMaximum: '',
    airmiles: '',
    airmilesMinimum: '',
    cashback: '',
    cashbackMinimum: '',
    rewardDescription: [{ value: ' ' }],
    keyBenefits: [{ value: ' ' }],
    additionalBenefits: [{ value: ' ' }],
    welcomeBenefits: [{ value: '' }],
  };

  const [benefits1, setBenefits1] = useState(false);
  const [benefits2, setBenefits2] = useState(false);
  const [benefits3, setBenefits3] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataObj, setDataObj] = useState(obj);
  const [removeClick, setRemoveClick] = useState({
    reward: false,
    keyBenefits: false,
    additionalBenefits: false,
    welcomeBenefits: false,
  });
  const currencyBox = () => {
    setBenefits1(!benefits1);
  };
  const airmilesBox = () => {
    setBenefits2(!benefits2);
  };
  const cashbacksBox = () => {
    setBenefits3(!benefits3);
  };

  const handleValueChange = (e: any, id: string) => {
    const value = e?.target?.value ?? '';
    setDataObj((prev: any) => ({ ...prev, [id]: value }));
  };

  const welcomeBenefitsOnChange = (e: any, index: number) => {
    const value = e?.target?.value ?? '';
    setDataObj((prev: any) => {
      let newValue = prev.welcomeBenefits;
      newValue[index].value = value;
      const result = { ...prev, welcomeBenefits: newValue };
      return result;
    });
  };

  const additionalBenefitsOnChange = (e: any, index: number) => {
    const value = e?.target?.value ?? '';
    setDataObj((prev: any) => {
      let newValue = prev.additionalBenefits;
      newValue[index].value = value;
      const result = { ...prev, additionalBenefits: newValue };
      return result;
    });
  };

  const keyBenefitsOnChange = (e: any, index: number) => {
    const value = e?.target?.value ?? '';
    setDataObj((prev: any) => {
      let newValue = prev.keyBenefits;
      newValue[index].value = value;
      const result = { ...prev, keyBenefits: newValue };
      return result;
    });
  };

  const rewardDescriptionOnChange = (e: any, index: number) => {
    const value = e?.target?.value ?? '';
    setDataObj((prev: any) => {
      let newValue = prev.rewardDescription;
      newValue[index].value = value;
      const result = { ...prev, rewardDescription: newValue };
      return result;
    });
  };

  const handleSubmitClick = () => {
    setReview(true);
  };
  const AddRewardList = () => {
    let newVal = { value: '' };
    setDataObj((prev) => ({
      ...prev,
      rewardDescription: [...prev.rewardDescription, newVal],
    }));
    setRemoveClick((prev) => ({
      ...prev,
      reward: true,
    }));
  };

  const AddKeyList = () => {
    let newVal = { value: '' };
    setDataObj((prev) => ({
      ...prev,
      keyBenefits: [...prev.keyBenefits, newVal],
    }));
    setRemoveClick((prev) => ({
      ...prev,
      keyBenefits: true,
    }));
  };

  const AddAdditionalList = () => {
    let newVal = { value: '' };
    setDataObj((prev) => ({
      ...prev,
      additionalBenefits: [...prev.additionalBenefits, newVal],
    }));
    setRemoveClick((prev) => ({
      ...prev,
      additionalBenefits: true,
    }));
  };

  const AddWelcomeList = () => {
    let newVal = { value: '' };
    setDataObj((prev) => ({
      ...prev,
      welcomeBenefits: [...prev.welcomeBenefits, newVal],
    }));
    setRemoveClick((prev) => ({
      ...prev,
      welcomeBenefits: true,
    }));
  };

  const removeWelcome = (index: number) => {
    let newData = dataObj?.welcomeBenefits ?? [];
    newData.splice(index, 1);
    setDataObj((prev) => ({
      ...prev,
      welcomeBenefits: newData,
    }));
  };

  const removeReward = (index: number) => {
    let newData = dataObj?.rewardDescription ?? [];
    newData.splice(index, 1);
    setDataObj((prev) => ({
      ...prev,
      rewardDescription: newData,
    }));
  };
  const removeKeyBenefits = (index: number) => {
    let newData = dataObj?.keyBenefits ?? [];
    newData.splice(index, 1);
    setDataObj((prev) => ({
      ...prev,
      keyBenefits: newData,
    }));
  };

  const removeAdditionalBenefits = (index: number) => {
    let newData = dataObj?.additionalBenefits ?? [];
    newData.splice(index, 1);
    setDataObj((prev) => ({
      ...prev,
      additionalBenefits: newData,
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const editNewPage = () => {
    setReview(false)
    console.log('setEditPage', editPage);
    setEditPage(true);
  };

  return (
    <Stack>
      <Box className="singleCard">
        {review ? (
          <Box className="reviewbox1">
            <Box className="head">
              <Box className="headFull">
                <Box onClick={goBack}>
                  <ArrowBackIcon className="headback" />
                </Box>
                <Box>
                  <TypoText title="Eterna - Platinum (ID No. 12345678)" />
                  <TypographyInfo title="From here you can add your new card" />
                </Box>
              </Box>

              <Box className="headIconBox">
                <Button onClick={editNewPage} className="btn">
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
            <Divider />

            <Box className="body">
              <Box className="bodyBox">
                <Card className="card" sx={{ cursor: 'pointer' }}>
                  <img className="img" src={CardImage} onClick={handleOpen} />

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
                          width: '100vw',
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
                            <Typography
                              sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '16px',
                                color: '#231F20',
                                letterSpacing: '0.001em',
                              }}
                            >
                              Card Photo - Eterna - Platinum
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '16px',
                                color: '#0662B7',
                                letterSpacing: '0.0125em',
                                cursor: 'pointer',
                              }}
                              onClick={handleClose}
                            >
                              Close
                            </Typography>
                          </Box>
                          <Box className="cardImageBox">
                            <img
                              style={{
                                width: '35vw',
                                objectFit: 'contain',
                              }}
                              alt=""
                              src={CardImage}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Modal>
                  )}
                </Card>
              </Box>

              <Box>
                <Grid container className="textGrid" spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box className="businessText">
                      <TypoText color="grey" title="Business ID" />
                      <TypoText
                        handleChange={handleValueChange}
                        id={'businessId'}
                        title={data?.businessId}
                        // disableUnderline={true}
                        // value={data?.businessId}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box>
                      <TypoText color="grey" title="Card Name" />
                      <TypoText
                        handleChange={handleValueChange}
                        id={'cardName'}
                        title={data?.cardName}
                        // value={data?.cardName}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box>
                      <TypoText color="grey" title="Interest Rate (in%)" />
                      <TypoText
                        handleChange={handleValueChange}
                        id={'interestRate'}
                        title={data?.interestRate}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box>
                      <TypoText color="grey" title="Card Type" />
                      <Typography>Salaried</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box>
                      <TypoText color="grey" title="Card Mode" />
                      <Typography>General Basic</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box>
                      <TypoText color="grey" title="Card Category" />
                      <Typography>General</Typography>
                      {/* <Select
                        placeholder="General"
                        variant="outlined"
                        size="small"
                      /> */}
                    </Box>
                  </Grid>
                </Grid>

                <Grid container className="maximumCardGrid">
                  <Grid item xs={12} sm={6} md={4}>
                    <Box className="textField">
                      <TypoText color="grey" title="Maximum Card Limit" />
                      <TypoText title={data?.maximumCardLimit} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="box1">
            <Box className="head">
              <Box className="headFull">
                <Box onClick={goBack}>
                  <ArrowBackIcon className="headIcon" />
                </Box>
                {editPage ? (
                  <Box>
                    <TypoText title="Edit New Card" />
                    <TypographyInfo title="Edit your new card here." />
                  </Box>
                ) : (
                  <Box>
                    <TypoText title="Add New Card" />
                    <TypographyInfo title="Add your new card here." />
                  </Box>
                )}
              </Box>

              <Box>
                <Button className="headId">ID.No. 123456</Button>
              </Box>
            </Box>
          </Box>
        )}

        {/* {review ? () : ()} */}

        {review ? (
          ''
        ) : (
          <>
            <Box className="box2">
              <Box className="uploadTitle">
                <TypoText title="Upload Photo" />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="Upload the image of the card" />
              </Box>
              <Divider />
              <Box className="ImgUploadBox">
                <Card className="imgCard">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <img src={Upload_Img} />
                  </IconButton>

                  <Button
                    sx={{ textTransform: 'capitalize' }}
                    color="secondary"
                  >
                    Upload
                  </Button>
                </Card>
              </Box>
            </Box>
            <Box className="box3">
              <Box className="cardDetail">
                <TypoText title="Enter Card Details " />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="From here you can can add the card information" />
              </Box>
              <Divider />

              <Grid container className="cardDetailGrid1" spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ gap: 2 }}>
                    <TypoText title="Business ID" />
                    <TypoText
                      placeholder="Business ID"
                      handleChange={handleValueChange}
                      id="businessId"
                      value={dataObj?.businessId}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box>
                    <TypoText title="Card Name" />
                    <TypoText
                      placeholder="Card Name"
                      handleChange={handleValueChange}
                      id="cardName"
                      value={dataObj?.cardName}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box>
                    <TypoText title="Interest Rate (in%)" />
                    <TypoText
                      placeholder="Interest Rate in%"
                      handleChange={handleValueChange}
                      id="interestRate"
                      value={dataObj?.interestRate}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                {SingleCardFilterDropdown?.map(
                  (eachItem: any, index: number) => {
                    return (
                      <Grid
                        sx={{ width: '250px' }}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                      >
                        <Typography className="dropdown-label">
                          {eachItem?.label}
                        </Typography>
                        <SelectDropdown options={eachItem?.option} />
                      </Grid>
                    );
                  }
                )}
              </Grid>

              <Grid
                container
                sx={{
                  marginTop: 2,
                }}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '97%',
                    }}
                  >
                    <TypoText title="Maximum Card Limit" />
                    <TypoText
                      placeholder="Enter maximum card limit"
                      handleChange={handleValueChange}
                      id="maximumCardLimit"
                      value={dataObj?.maximumCardLimit}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        )}

        {/* {review ? () : ()} */}

        {/* //  {review ? () : ()} */}

        {/* <Box className="box2">
          <Box className="uploadTitle">
            <TypoText title="Upload Photo" />
            <img className="img" src={Info_Icon} />
            <TypographyInfo title="Upload the image of the card" />
          </Box>
          <Divider />
          <Box className="ImgUploadBox">
            <Card className="imgCard">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <img src={Upload_Img} />
              </IconButton>

              <Button sx={{ textTransform: 'capitalize' }} color="secondary">
                Upload
               
              </Button>
            </Card>
          </Box>
        </Box>
        <Box className="box3">
          <Box className="cardDetail">
            <TypoText title="Enter Card Details " />
            <img className="img" src={Info_Icon} />
            <TypographyInfo title="From here you can can add the card information" />
          </Box>
          <Divider />

          <Grid container className="cardDetailGrid1" spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ gap: 2 }}>
                <TypoText title="Business ID" />
                <TypoText
                  placeholder="Business ID"
                  handleChange={handleValueChange}
                  id="businessId"
                  value={dataObj?.businessId}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <TypoText title="Card Name" />
                <TypoText
                  placeholder="Card Name"
                  handleChange={handleValueChange}
                  id="cardName"
                  value={dataObj?.cardName}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <TypoText title="Interest Rate (in%)" />
                <TypoText
                  placeholder="Interest Rate in%"
                  handleChange={handleValueChange}
                  id="interestRate"
                  value={dataObj?.interestRate}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {SingleCardFilterDropdown?.map((eachItem: any, index: number) => {
              return (
                <Grid
                  sx={{ width: '250px' }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                >
                  <Typography className="dropdown-label">
                    {eachItem?.label}
                  </Typography>
                  <SelectDropdown options={eachItem?.option} />
                </Grid>
              );
            })}
          </Grid>

         

          <Grid
            container
            sx={{
              marginTop: 2,
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '97%',
                }}
              >
                <TypoText title="Maximum Card Limit" />
                <TypoText
                  placeholder="Enter maximum card limit"
                  handleChange={handleValueChange}
                  id="maximumCardLimit"
                  value={dataObj?.maximumCardLimit}
                />
              </Box>
            </Grid>
          </Grid>
        </Box> */}

        {review ? (
          <Box className="reviewbox2">
            <Box className="surrogateHead">
              <TypoText title=" Surrogate" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna. " />
            </Box>
            <Divider />

            <Box className="surrogateBody">
              <Typography variant="body2" className="title">
                Choose Surrogate
              </Typography>
              <Typography className="text">
                Payroll, Card for Card, CIBIL, AQB
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="box4">
            <Box className="surrogateTitle">
              <TypoText title=" Surrogate" />
              <img className="img" src={Info_Icon} />
              <TypographyInfo title="From here, you can choose the type of surrogate for the card" />
            </Box>
            <Divider />

            <Grid container className="chooseSurrogateGrid">
              <Grid item xs={12} sm={6} md={2}>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Payroll</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Card For Card</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">CIBIL</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">AQB</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Pre-Approved</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Secured</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {review ? (
          <Box className="reviewbox3">
            <Box className="channelHead">
              <TypoText title=" Channels" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box className="channelBody">
              <Typography variant="body2" className="title">
                Channels
              </Typography>
              <Typography className="text">
                Bank, DSA, Fintech Partner
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="box5">
            <Box className="channelTitle">
              <TypoText title="Select Channels" />

              <img
                className="img"
                style={{ marginBottom: '14px' }}
                src={Info_Icon}
              />

              <TypographyInfo title="From here, you can choose the channel of the card" />
            </Box>
            <Divider />

            <Grid container className="chooseChannelGrid">
              <Grid item>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Bank</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">DSA</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Fintech Partner</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {review ? (
          <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <TypoText title="Eligibility Criteria " />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Grid container sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  CIBIL Score
                </Typography>
                <Typography sx={{ fontSize: 16 }}>700</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Salary Limit
                </Typography>
                <Typography sx={{ fontSize: 16 }}>40,000.00</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  ITR Limit
                </Typography>
                <Typography sx={{ fontSize: 16 }}>50,000.00</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  C4C Limit
                </Typography>
                <Typography sx={{ fontSize: 16 }}>70,000.00</Typography>
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  AQB Limit (6 Month)
                </Typography>
                <Typography sx={{ fontSize: 16 }}>70,000.00</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  RC (Vehicle Value)
                </Typography>
                <Typography sx={{ fontSize: 16 }}>70,000.00</Typography>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box className="box6">
            <Box className="eligibilityTitle">
              <TypoText title="Eligibility Criteria " />
              <img
                className="img"
                style={{ marginBottom: '14px' }}
                src={Info_Icon}
              />
              <TypographyInfo title="You can add the customer's eligibility here" />
            </Box>
            <Divider />

            <Grid container className="eligibilityGrid " spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="CIBIL Score" />
                  <TypoText
                    placeholder="CIBIL Score"
                    handleChange={handleValueChange}
                    id="cibilScore"
                    value={dataObj?.cibilScore}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="Salary Limit" />
                  <TypoText
                    placeholder="$ 00.00"
                    handleChange={handleValueChange}
                    id="salaryLimit"
                    value={dataObj?.salaryLimit}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="ITR Limit" />
                  <TypoText
                    placeholder="$ 00.00"
                    handleChange={handleValueChange}
                    id="itrLimit"
                    value={dataObj?.itrLimit}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container className="eligibilityGrid " spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="C4C Limit" />
                  <TypoText
                    placeholder=" 00.00"
                    handleChange={handleValueChange}
                    id="c4cLimit"
                    value={dataObj?.c4cLimit}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="AQB Limit (6 Month)" />
                  <TypoText
                    placeholder=" 00.00"
                    handleChange={handleValueChange}
                    id="aqbLimit"
                    value={dataObj?.aqbLimit}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="RC (Vehicle Value)" />
                  <TypoText
                    placeholder="00.00"
                    handleChange={handleValueChange}
                    id="rcValue"
                    value={dataObj?.rcValue}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <TypoText title=" Add on Card Availability" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box
              sx={{
                paddingTop: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Add On Card
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                Applicable
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="box5">
            <Box className="channelTitle">
              <TypoText title="Add On Card Availability" />

              <img
                className="img"
                style={{ marginBottom: '14px' }}
                src={Info_Icon}
              />

              <TypographyInfo title="From here, you can choose extra card for same card details" />
            </Box>
            <Divider />

            <Grid container className="chooseChannelGrid">
              <Grid item>
                <Box className="box">
                  <Checkbox color="secondary" />
                  <Typography className="text">Add On Card</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 2,
                paddingBottom: 2,
              }}
            >
              <TypoText title="Benifits" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box
              sx={{
                paddingY: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Currency Markup Charges
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>2%</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Currency Markup Description
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>
                  3.50% of the transaction value as a foreign currency
                  transaction fee.
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', paddingY: 2, gap: '20%' }}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Airmiles
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>100</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Airmiles Minimum Spends
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>200000</Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Air miles Description
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>
                Get 4 Frequent flyer Air miles for every citi prestige reward
                point you transfer to our airline partners
              </Typography>
            </Box>
            <Divider sx={{ padding: 2 }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                paddingTop: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '80%',
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 14, color: 'grey' }}
                  >
                    Cashback
                  </Typography>
                  <Typography sx={{ fontWeight: '500' }}>2%</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 14, color: 'grey' }}
                  >
                    Cashback Minimum Spends
                  </Typography>
                  <Typography sx={{ fontWeight: '500' }}>200</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 14, color: 'grey' }}
                  >
                    Spend Category
                  </Typography>
                  <Typography sx={{ fontWeight: '500' }}>
                    Online Shopping,Flight Tickets,Fuel
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Cashback Description
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>
                  5% cashback will be rewarded to you on purchases on movie
                  tickets, bill payments, or on any payments made for utilities
                  done through citi Billpay. The maximum cashback you will earn
                  is 100 for each category{' '}
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="box7">
            <Box className="benefitsTitle">
              <TypoText title="Benefits" />
              <img className="img" src={Info_Icon} />
              <TypographyInfo title="From here you can add the card information" />
            </Box>
            <Divider />

            <Box className="benefitsBox">
              <Box className="box">
                <Checkbox onClick={currencyBox} color="secondary" />
                <Typography className="text">
                  Currency Markup Charges
                </Typography>
              </Box>
              {benefits1 && (
                <Box sx={{ paddingX: 2, marginTop: 2 }}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <TypographySubTitle title="Currency Markup Charges (in %)" />
                        <TypoText
                          placeholder="$ 00.00"
                          handleChange={handleValueChange}
                          id="currencyMarkupCharges"
                          value={dataObj?.currencyMarkupCharges}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <TypographySubTitle title="Maximum Spent Limit Per Transaction" />
                        <TypoText
                          placeholder="$ 00.00"
                          handleChange={handleValueChange}
                          id="currencyMarkupMaximum"
                          value={dataObj?.currencyMarkupMaximum}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ marginY: 3 }} className="joiningFeeFull">
                    <TypographySubTitle title="Currency Markup Descripition" />
                    <Box className="textField">
                      <TypoText placeholder="3.50% of the transaction value as a foreign currency transaction fee." />
                    </Box>
                  </Box>
                </Box>
              )}
              <Box className="box">
                <Checkbox onClick={airmilesBox} color="secondary" />
                <Typography className="text">Airmiles</Typography>
              </Box>
              {benefits2 && (
                <Box sx={{ paddingX: 2, marginTop: 2 }}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <TypographySubTitle title="Airmiles" />
                        <TypoText
                          placeholder="$ 00.00"
                          handleChange={handleValueChange}
                          id="airmiles"
                          value={dataObj?.airmiles}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <TypographySubTitle title="Airmiles - Minmum Spends" />
                        <TypoText
                          placeholder="$ 00.00"
                          handleChange={handleValueChange}
                          id="airmilesMinimum"
                          value={dataObj?.airmilesMinimum}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ marginY: 3 }} className="joiningFeeFull">
                    <TypographySubTitle title="Airmiles Description" />
                    <Box className="textField">
                      <TypoText placeholder="Get 4 Frequent Flyer Air miles for every Citi Prestige reward point you transfer to our airline partners" />
                    </Box>
                  </Box>
                </Box>
              )}
              <Box className="box">
                <Checkbox onClick={cashbacksBox} color="secondary" />
                <Typography className="text">Cashbacks</Typography>
              </Box>
              {benefits3 && (
                <Box sx={{ paddingX: 2, marginTop: 2 }}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <TypographySubTitle title="Cashback (in %)" />
                        <TypoText
                          placeholder="$ 00.00"
                          handleChange={handleValueChange}
                          id="cashback"
                          value={dataObj?.cashback}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <TypographySubTitle title="Cashback - Minmum Spends" />
                        <TypoText
                          placeholder="$ 00.00"
                          handleChange={handleValueChange}
                          id="cashbackMinimum"
                          value={dataObj?.cashbackMinimum}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box className="joiningFeeSelect">
                        <TypographySubTitle title="Select Spend Category" />
                        <Select
                          fullWidth
                          sx={{ height: '40px' }}
                          placeholder="choose period"
                          className="field"
                        >
                          <MenuItem value={10}>All</MenuItem>
                          <MenuItem value={20}>General</MenuItem>
                          <MenuItem value={30}>Travel</MenuItem>
                          <MenuItem value={30}>Fuel</MenuItem>
                          <MenuItem value={30}>Online Shopping</MenuItem>
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ marginY: 2 }} className="joiningFeeFull">
                    <TypographySubTitle title="Cashback Description" />
                    <Box className="textField">
                      <TypoText placeholder="W5% cashback will be rewarded to you on purchases of movie tickets, bill payments, or on any payments made for utilities done through Citi Billpay." />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 2,
              }}
            >
              <TypoText title="Fee & Fee Wavier Details" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider sx={{ paddingTop: 2 }} />

            <Box
              sx={{
                paddingY: 2,
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Joining Fee
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>2%</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Joining Fee Wavier Limit
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>50,000</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Period
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>6 Months</Typography>
              </Box>
            </Box>
            <Box sx={{ paddingY: 2 }}>
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Joining Fee Description
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>
                Spend 30,000 within 90 days of the card's setup and get the
                joining fee waived off
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                paddingY: 2,
                width: '80%',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Annual Fee
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>1000</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Annual Fee Wavier Limit
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>50000</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Period
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>6 Months</Typography>
              </Box>
            </Box>

            <Box sx={{ paddingY: 2 }}>
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Annual Fee Description
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>
                Spend 50,000 in a year and get a wavier of next year's annual
                fee
              </Typography>
            </Box>
            <Divider sx={{ padding: 2 }} />

            <Box
              sx={{
                display: 'flex',
                paddingY: 2,
                width: '80%',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Fuel Surcharge
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>1%</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Fuel Surcharge Wavier Limit
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>250</Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Petrol Bunks
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>
                  All Petrol Bunks
                </Typography>
              </Box>
            </Box>

            <Box sx={{ paddingY: 2 }}>
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Fuel Surcharge Description
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>
                1% fuel surcharge wavier at all fuel stations across india on
                minimum transaction of 400Max cashback of 250 per statement
                cycle
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="box8">
            <Box className="feeWavier">
              <Box className="feeWavierHead">
                <TypoText title="Fee & Fee Wavier Details" />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="From here you can add fee wavier details" />
              </Box>
            </Box>
            <Divider />
            <Box className="joiningFeeBox">
              <TypoText title="Joining Fee " />
              <TypoText title=" (optional)" color="grey" className="text" />
            </Box>

            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="Joining Fee" />
                  <TypoText
                    placeholder="$ 00.00"
                    handleChange={handleValueChange}
                    id="joiningFee"
                    value={dataObj?.joiningFee}
                  />

                  <Typography className="joiningFeeGrid">
                    Enter $0 for No Joining Fee
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="Joining Fee Wavier SpendLimit" />
                  <TypoText
                    placeholder="$ 00.00"
                    handleChange={handleValueChange}
                    id="joiningFeeWavier"
                    value={dataObj?.joiningFeeWavier}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="joiningFeeSelect">
                  <TypoText title="Select Period" />
                  <Select placeholder="choose period" className="field">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>

            <Box className="joiningFeeFull">
              <TypoText title="Joining Fee Description" />
              <Box className="textField">
                <TypoText placeholder="Enter Joining Fee Description" />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                padding: '15px 0 20px 0',
                marginTop: '20px',
              }}
            >
              <TypoText title="Annual Fee " />
              <TypoText title=" (optional)" color="grey" className="text" />
            </Box>

            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="Enter Annual Fee" />
                  <TypoText
                    placeholder="Enter Currency Markup Charges (in %)"
                    handleChange={handleValueChange}
                    id="annualFee"
                    value={dataObj?.annualFee}
                  />
                  <Typography className="annualFeeGrid">
                    Enter $0 for No Joining Fee
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title=" Annual Fee Wavier SpendLimit" />
                  <TypoText
                    placeholder="$ 00.00"
                    handleChange={handleValueChange}
                    id="annualFeeWavier"
                    value={dataObj?.annualFeeWavier}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="annualFeeSelect">
                  <TypoText title="Select Period" />
                  <Select placeholder="choose category" className="select">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
            <Box className="currencyMarkupDescription">
              <TypoText title="Currency Markup Description" />
              <Box className="fullText">
                <TypoText
                  placeholder="Enter Currency Markup Charges (in %)"
                  handleChange={handleValueChange}
                  id="currencyMarkup"
                  value={dataObj?.currencyMarkup}
                />
              </Box>
            </Box>

            <Box className="fuelSurchargeBox">
              <TypoText title="Fuel Surcharge" />
              <TypoText title=" (optional)" color="grey" className="text" />
            </Box>

            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText
                    className="fuelSurchargeTextBox"
                    title="Fuel Surcharge (in %)"
                  />
                  <TypoText
                    placeholder="Enter fuel surcharge in %"
                    handleChange={handleValueChange}
                    id="fuelSurcharge"
                    value={dataObj?.fuelSurcharge}
                  />
                  <Typography className="fuelSurchargeGrid">
                    Enter $0 to cancel Fuel Surcharge wavier
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <TypoText title="Fuel Surcharge Wavier Spend Limit" />
                  <TypoText
                    placeholder="$ 00.00"
                    handleChange={handleValueChange}
                    id="fuelSurchargeWavier"
                    value={dataObj?.fuelSurchargeWavier}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="fuelSurchargeSelect">
                  <TypoText title="Select Period" />
                  <Select placeholder="choose category" className="select">
                    <MenuItem value={1}>1 Month</MenuItem>
                    <MenuItem value={2}>2 Month</MenuItem>
                    <MenuItem value={3}>3 Month</MenuItem>
                    <MenuItem value={4}>4 Month</MenuItem>
                    <MenuItem value={5}>5 Month</MenuItem>
                    <MenuItem value={6}>6 Month</MenuItem>
                    <MenuItem value={7}>7 Month</MenuItem>
                    <MenuItem value={8}>10 Month</MenuItem>
                    <MenuItem value={9}>11 Month</MenuItem>
                    <MenuItem value={10}>12 Month</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>

            <Box className="fuelSurchargeDescription">
              <TypoText title="Fuel Surcharge Description" />
              <Box className="fullText">
                <TypoText
                  placeholder="Enter Fuel Surcharge Description"
                  handleChange={handleValueChange}
                  id="fuelSurchargeDescription"
                  value={dataObj?.fuelSurchargeDescription}
                />
              </Box>
            </Box>
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <TypoText title=" Rewards" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box
              sx={{
                paddingTop: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Reward Description 1
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                deserunt veniam atque voluptas corporis, distinctio soluta
                quaerat blanditiis neque voluptatibus deleniti?
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="box9">
            <Box className="rewardHeader">
              <Box className="headerBox">
                <TypoText title="Rewards" />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="Add your reward contents here" />
              </Box>
              <Box>
                <Button
                  className="headerbtn"
                  color="secondary"
                  onClick={AddRewardList}
                >
                  <ControlPointIcon />
                  <Typography className="btnText">Add description</Typography>
                </Button>
              </Box>
            </Box>
            <Divider />
            {dataObj.rewardDescription.map((item: any, index: number) => {
              return (
                <Box className="rewardDescriptionBox">
                  <TypoText title={`Reward Description ${index + 1} `} />
                  <Box className="fullText">
                    <TypoText
                      placeholder="Enter Description for the Rewards"
                      handleChange={(e: any) =>
                        rewardDescriptionOnChange(e, index)
                      }
                      id="rewardDescription"
                      value={item?.value ?? ''}
                    />
                  </Box>
                  <Box className="newText">
                    {dataObj.rewardDescription.length > 1 &&
                    removeClick.reward ? (
                      <Button
                        sx={{ textTransform: 'capitalize' }}
                        onClick={() => removeReward(index)}
                        color="secondary"
                        startIcon={<RemoveCircleOutlineIcon />}
                      >
                        Remove
                      </Button>
                    ) : (
                      ''
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <TypoText title=" Key Benefits" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box
              sx={{
                paddingTop: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Key Benefits 1
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                deserunt veniam atque voluptas corporis, distinctio soluta
                quaerat blanditiis neque voluptatibus deleniti?
              </Typography>
            </Box>
            <Box
              sx={{
                paddingTop: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Key Benefits 2
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                deserunt veniam atque voluptas corporis, distinctio soluta
                quaerat blanditiis neque voluptatibus deleniti?
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="box10">
            <Box className="keyBenefitsHeader">
              <Box className="headerBox">
                <TypoText title="Key Benefits" />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="Add your key benefits from here" />
              </Box>
              <Box className="headerbtn">
                <Button sx={{ gap: 1 }} color="secondary" onClick={AddKeyList}>
                  <ControlPointIcon />
                  <Typography className="btnText">Add description</Typography>
                </Button>
              </Box>
            </Box>
            <Divider />
            {dataObj.keyBenefits.map((item: any, index: number) => {
              return (
                <Box className="keyBenefitsDescriptionBox">
                  <TypoText title={`Key Benefits Description ${index + 1}`} />
                  <Box className="fullText">
                    <TypoText
                      placeholder="Enter Description for the key benefits "
                      handleChange={(e: any) => keyBenefitsOnChange(e, index)}
                      id="keyBenefits"
                      value={item?.value ?? ''}
                    />
                  </Box>
                  <Box className="newText">
                    {dataObj.keyBenefits.length > 1 &&
                    removeClick.keyBenefits ? (
                      <Button
                        sx={{ textTransform: 'capitalize' }}
                        onClick={() => removeKeyBenefits(index)}
                        color="secondary"
                        startIcon={<RemoveCircleOutlineIcon />}
                      >
                        Remove
                      </Button>
                    ) : (
                      ''
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <TypoText title=" Additional Benefits" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box
              sx={{
                paddingTop: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Additional Benefits 1
                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                  deserunt veniam atque voluptas corporis, distinctio soluta
                  quaerat blanditiis neque voluptatibus deleniti?
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Additional Benefits 2
                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                  deserunt veniam atque voluptas corporis, distinctio soluta
                  quaerat blanditiis neque voluptatibus deleniti?
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="box11">
            <Box className="additionalBenefitsHeader">
              <Box className="headerBox">
                <TypoText title="Additional Benefits" />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="Add your additional benefits here" />
              </Box>
              <Box className="headerbtn">
                <Button
                  sx={{ gap: 1 }}
                  color="secondary"
                  onClick={AddAdditionalList}
                >
                  <ControlPointIcon />
                  <Typography className="btnText">Add description</Typography>
                </Button>
              </Box>
            </Box>
            <Divider />
            {dataObj.additionalBenefits.map((item: any, index: number) => (
              <Box className="additionalBenefitsDescriptionBox">
                <TypoText
                  title={`Additional Benefits Description ${index + 1}`}
                />
                <Box className="fullText">
                  <TypoText
                    placeholder="Enter Description for the Additional benefits"
                    handleChange={(e: any) =>
                      additionalBenefitsOnChange(e, index)
                    }
                    id="additionalBenefits"
                    value={item?.value ?? ''}
                  />
                </Box>
                <Box className="newText">
                  {dataObj.additionalBenefits.length > 1 &&
                  removeClick.additionalBenefits ? (
                    <Button
                      sx={{ textTransform: 'capitalize' }}
                      onClick={() => removeAdditionalBenefits(index)}
                      color="secondary"
                      startIcon={<RemoveCircleOutlineIcon />}
                    >
                      Remove
                    </Button>
                  ) : (
                    ''
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {review ? (
          <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <TypoText title=" Welcome Benefits" />
              <img src={Info_Icon} />
              <TypographyInfo title="Lorem ipsum dolor sit amet consectetur. Urna." />
            </Box>
            <Divider />

            <Box
              sx={{
                paddingTop: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Welcome Benefits 1
                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                  deserunt veniam atque voluptas corporis, distinctio soluta
                  quaerat blanditiis neque voluptatibus deleniti?
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 14, color: 'grey' }}
                >
                  Welcome Benefits 2
                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sunt alias sequi tempora totam et eos sapiente nisi
                  deserunt veniam atque voluptas corporis, distinctio soluta
                  quaerat blanditiis neque voluptatibus deleniti?
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="box12">
            <Box className="welcomeBenefitsHeader">
              <Box className="headerBox">
                <TypoText title="Welcome Benefits" />
                <img className="img" src={Info_Icon} />
                <TypographyInfo title="Add your additional benefits here" />
              </Box>
              <Box className="headerbtn">
                <Button
                  sx={{ textTransform: 'capitalize', gap: 1 }}
                  color="secondary"
                  onClick={AddWelcomeList}
                >
                  <ControlPointIcon />
                  <Typography className="btnTex">Add Description</Typography>
                </Button>
              </Box>
            </Box>
            <Divider />

            {dataObj.welcomeBenefits.map((item: any, index: number) => {
              return (
                <Box className="welcomeBenefitsDescriptionBox">
                  <TypoText
                    title={`Welcome Benefits Description ${index + 1}`}
                  />
                  <Box className="fullText">
                    <TypoText
                      placeholder="Enter Description for the welcome benefits "
                      handleChange={(e: any) =>
                        welcomeBenefitsOnChange(e, index)
                      }
                      id="welcomeBenefits"
                      value={item?.value ?? ''}
                    />
                  </Box>
                  <Box className="newText">
                    {dataObj.welcomeBenefits.length > 1 &&
                    removeClick.welcomeBenefits ? (
                      <Button
                        sx={{ textTransform: 'capitalize' }}
                        onClick={() => removeWelcome(index)}
                        color="secondary"
                        startIcon={<RemoveCircleOutlineIcon />}
                      >
                        Remove
                      </Button>
                    ) : (
                      ''
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}

        {review ? (
          <Box
            sx={{
              backgroundColor: 'white',
              marginTop: 2,
              padding: 2,
              position: 'fixed',
              bottom: 0,
              right: 0,
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <BtnContained onClick={close} title="close" />
            </Box>
          </Box>
        ) : (
          <Box className="footer">
            <Box className="box">
              <BtnOutlined onClick={close} title="close" />

              <BtnText
                onClick={() => navigate('/productManagement/cardCatalogue')}
                title="Save as draft"
              />

              <BtnContained title="Submit" onClick={handleSubmitClick} />
            </Box>
          </Box>
        )}
      </Box>

      {showModal && (
        <CustomModal
          openSuccess={showModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Do you want to Close?'}
          discardModalMsg={
            'Want to discard corrections for error entires in the excel sheet and continue upload cards'
          }
          yesContinueBtn={'Back to Form'}
          closeBtn={'Yes, Close'}
        />
      )}
    </Stack>
  );
};

export default CreateNewCard;
