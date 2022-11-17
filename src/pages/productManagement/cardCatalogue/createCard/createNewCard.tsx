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

import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnText from '../../../../components/commonComponent/CustomText/Button/Text';
// import Checkbox from "@mui/material/Checkbox";
// import InfoIcon from '@mui/icons-material/Info';
import Info_Icon from '../../../../assets/images/info_icon.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { Divider } from "@material-ui/core";
// import CadActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CheckBox from '../../../../components/commonComponent/CheckBox/checkBox';
import TypoText from '../../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import { useNavigate } from 'react-router-dom';

const CreateNewCard = () => {
  // const uploadRef = useRef<any>();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // const saveFun = () => {
  //   navigate("/productManagement/cardCatalogue/singleupload/o");
  //   console.log("clicked");
  // };
  // const [data, setData] = useState<any>();
  let obj = {
    businessId: '',
    cardName: '',
    interestRate: '',
    maximumCardLimit: '',
    cibilScore: '',
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
    rewardDescription: [{ value: ' ' }],
    keyBenefits: [{ value: ' ' }],
    additionalBenefits: [{ value: ' ' }],
    welcomeBenefits: [{ value: '' }],
  };
  const [dataObj, setDataObj] = useState(obj);
  const [removeClick, setRemoveClick] = useState({
    reward: false,
    keyBenefits: false,
    additionalBenefits: false,
    welcomeBenefits: false,
  });
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

  const handleSubmitClick = (record: any) => {
    navigate('/productManagement/cardCatalogue/singleupload/reviewCard', {
      state: { record: dataObj },
    });
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

  return (
    <Box
      sx={{
        backgroundColor: '#eceff2',
        // margin: 0,
        padding: 0,
        paddingBottom: 15,
      }}
    >
      <Box sx={{ backgroundColor: 'white', paddingX: 3, padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 1,
            }}
          >
            <Box onClick={goBack}>
              <ArrowBackIcon sx={{ color: '#0078EF' }} />
            </Box>
            <Box>
              <TypoText title="Add New Card" />
              <TypographyInfo title="From here you ca add your new card" />
            </Box>
          </Box>

          <Box>
            <Button sx={{ backgroundColor: '#E6E7E7', borderRadius: '4px' }}>
              ID.No. 123456
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', padding: 3, marginTop: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          <TypoText title="Upload Photo" />
          <img style={{ marginBottom: '14px' }} src={Info_Icon} />
          <TypographyInfo title="Upload the image of the card" />
        </Box>
        <Divider />
        <Box sx={{ marginTop: 2 }}>
          <Card
            sx={{
              width: 350,
              height: 150,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e0e0de',
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              {/* <input hidden accept="image/*" type="file" /> */}
              <FileUploadIcon />
            </IconButton>

            <Button color="secondary">
              Upload
              {/* <input hidden accept="image/*" multiple type="file" /> */}
            </Button>
          </Card>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          <TypoText title="Enter Card Details " />
          <img style={{ marginBottom: '14px' }} src={Info_Icon} />
          <TypographyInfo title="From here you can can add the card information" />
        </Box>
        <Divider />

        <Grid container sx={{ paddingY: 2 }} spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Interest Rate (in%)" />
              <TypoText
                placeholder="Interest Rate (in%)"
                handleChange={handleValueChange}
                id="interestRate"
                value={dataObj?.interestRate}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Card Type" />
              <Select
                placeholder="Card type"
                // onChange={handleValueChange}
                id="interestRate"
                // value={dataObj?.interestRate}
                variant="outlined"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Card Mode" />
              <Select placeholder="Card type" variant="outlined" size="small" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Card Category" />
              <Select placeholder="Card type" variant="outlined" size="small" />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: 2,
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', width: '92%' }}
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

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          <TypoText title="Choose Surrogate" />
          <img style={{ marginBottom: '14px' }} src={Info_Icon} />
          <TypographyInfo title="From here, you can choose the type of surrogate for the card" />
        </Box>
        <Divider />

        <Grid container sx={{ display: 'flex', marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>Payroll</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>Card For Card</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>CIBIL</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>AQB</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>Pre-Approved</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>Secured</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
          }}
        >
          <TypoText title="Select Channels" />

          <img style={{ marginBottom: '14px' }} src={Info_Icon} />

          <TypographyInfo title="From here, you can choose the channel of the card" />
        </Box>
        <Divider />

        <Grid container sx={{ display: 'flex', gap: 12, marginTop: 2 }}>
          <Grid item>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>Bank</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>DSA</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex' }}>
              <CheckBox />
              <Typography sx={{ paddingTop: 1 }}>Fintech Partner</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          <TypoText title="Eligibility Criteria " />
          <img style={{ marginBottom: '14px' }} src={Info_Icon} />
          <TypographyInfo title="You can add the customer's eligibility here" />
        </Box>
        <Divider />

        <Grid container sx={{ paddingY: 2 }} spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="CIBIL Score" />
              <TypoText
                placeholder="CIBIL Score"
                handleChange={handleValueChange}
                id="cibilScore"
                value={dataObj?.cibilScore}
              />
              {/* <TextField sx={{ width: "350px" }} size="small" placeholder="0" /> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="ITR Limit" />
              <TypoText
                placeholder="$ 00.00"
                handleChange={handleValueChange}
                id="itrLimit"
                value={dataObj?.itrLimit}
              />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: 2,
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', width: '92%' }}
            >
              <TypoText title="C4C Limit" />
              <TypoText
                placeholder="00.00"
                handleChange={handleValueChange}
                id="c4climit"
                value={dataObj?.c4cLimit}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
          }}
        >
          <TypoText title="Benifits" />
          <img style={{ marginBottom: '14px' }} src={Info_Icon} />
          <TypographyInfo title="From here you can add the card information" />
        </Box>
        <Divider />

        <Box sx={{ marginTop: 2 }}>
          <Box sx={{ display: 'flex' }}>
            <CheckBox />
            <Typography sx={{ paddingTop: 1 }}>
              Currency Markup Charges
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <CheckBox />
            <Typography sx={{ paddingTop: 1 }}>Airmiles</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <CheckBox />
            <Typography sx={{ paddingTop: 1 }}>Cashbacks</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 2,
            }}
          >
            <TypoText title="Fee & Fee Wavier Details" />
            <img style={{ marginBottom: '14px' }} src={Info_Icon} />
            <TypographyInfo title="From here you can add fee wavier details" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button color="secondary">
              <ControlPointIcon />
              <Typography sx={{ textTransform: 'capitalize' }}>
                Add Additional Benefits
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px 0',
          }}
        >
          <TypoText title="Joining Fee " />
          <TypoText
            title=" (optional)"
            style={{ marginLeft: '3px', color: 'grey' }}
          />
        </Box>

        <Grid container sx={{ paddingY: 2 }} spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Joining Fee" />
              <TypoText
                placeholder="$ 00.00"
                handleChange={handleValueChange}
                id="joiningFee"
                value={dataObj?.joiningFee}
              />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: 13,
                  marginTop: 1,
                }}
              >
                Enter $0 for No Joining Fee
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Joining Fee Wavier SpendLimit" />
              <TypoText
                placeholder="$ 00.00"
                handleChange={handleValueChange}
                id="joiningFeewavier"
                value={dataObj?.joiningFeeWavier}
              />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Select Period" />
              <Select
                placeholder="choose period"
                sx={{ height: '40px' }}
              ></Select>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TypoText title="Joining Fee Description" />
          <Box
            sx={{
              // width: 1200,
              width: '100%',
            }}
          >
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
          <TypoText
            title=" (optional)"
            style={{ marginLeft: '3px', color: 'grey' }}
          />
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Enter Annual Fee" />
              <TypoText
                placeholder="Enter Currency Markup Charges (in %)"
                handleChange={handleValueChange}
                id="annualFee"
                value={dataObj?.annualFee}
              />
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: 13,
                  marginTop: 1,
                }}
              >
                Enter $0 for No Joining Fee
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Select Period" />
              <Select placeholder="choose category" sx={{ height: '40px' }}>
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 1 }}>
          <TypoText title="Currency Markup Description" />
          <Box
            sx={{
              // width: 1200,
              maxWidth: '100%',
            }}
          >
            <TypoText
              placeholder="Enter Currency Markup Charges (in %)"
              handleChange={handleValueChange}
              id="currencyMarkup"
              value={dataObj?.currencyMarkup}
            />
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
          <TypoText title="Fuel Surcharge" />
          <TypoText
            title=" (optional)"
            style={{ marginLeft: '3px', color: 'grey' }}
          />
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Fuel Surcharge (in %)" />
              <TypoText
                placeholder="Enter fuel surcharge in %"
                handleChange={handleValueChange}
                id="fuelSurcharge"
                value={dataObj?.fuelSurcharge}
              />
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: 13,
                  marginTop: 1,
                }}
              >
                Enter $0 to cancel Fuel Surcharge wavier
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TypoText title="Select Period" />
              <Select placeholder="choose category" sx={{ height: '40px' }}>
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 1 }}>
          <TypoText title="Fuel Surcharge Description" />
          <Box
            sx={{
              width: '100%',
            }}
          >
            <TypoText
              placeholder="Enter Fuel Surcharge Description"
              handleChange={handleValueChange}
              id="fuelSurchargeDescription"
              value={dataObj?.fuelSurchargeDescription}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 2,
            }}
          >
            <TypoText title="Rewards" />
            <img style={{ marginBottom: '14px' }} src={Info_Icon} />
            <TypographyInfo title="Add your reward contents here" />
          </Box>
          <Box>
            <Button sx={{ gap: 1 }} color="secondary" onClick={AddRewardList}>
              <ControlPointIcon />
              <Typography sx={{ textTransform: 'capitalize' }}>
                Add description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        {dataObj.rewardDescription.map((item: any, index: number) => {
          return (
            <Box sx={{ marginTop: 3 }}>
              <TypoText title={`Reward Description ${index + 1} `} />
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <TypoText
                  placeholder="Enter Description for the Rewards"
                  handleChange={(e: any) => rewardDescriptionOnChange(e, index)}
                  id="rewardDescription"
                  value={item?.value ?? ''}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingTop: 1,
                }}
              >
                {removeClick.reward ? (
                  <Button color="secondary" startIcon={<ControlPointIcon />}>
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

      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 2,
            }}
          >
            <TypoText title="Key Benifits" />
            <img style={{ marginBottom: '14px' }} src={Info_Icon} />
            <TypographyInfo title="Add your key benifits from here" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button color="secondary" onClick={AddKeyList}>
              <ControlPointIcon />
              <Typography sx={{ textTransform: 'capitalize' }}>
                Add description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        {dataObj.keyBenefits.map((item: any, index: number) => {
          return (
            <Box sx={{ marginTop: 3 }}>
              <TypoText title={`Key Benefits Description ${index + 1}`} />
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <TypoText
                  placeholder="Enter Description for the key benefits "
                  handleChange={(e: any) => keyBenefitsOnChange(e, index)}
                  id="keyBenefits"
                  value={item?.value ?? ''}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingTop: 1,
                }}
              >
                {removeClick.keyBenefits ? (
                  <Button color="secondary" startIcon={<ControlPointIcon />}>
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

      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 2,
            }}
          >
            <TypoText title="Additional Benifits" />
            <img style={{ marginBottom: '14px' }} src={Info_Icon} />
            <TypographyInfo title="Add your additional benifits here" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button color="secondary" onClick={AddAdditionalList}>
              <ControlPointIcon />
              <Typography sx={{ textTransform: 'capitalize' }}>
                Add description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        {dataObj.additionalBenefits.map((item: any, index: number) => (
          <Box sx={{ marginTop: 3 }}>
            <TypoText title={`Additional Benefits Description ${index + 1}`} />
            <Box
              sx={{
                width: '100%',
              }}
            >
              <TypoText
                placeholder="Enter Description for the Additional benefits"
                handleChange={(e: any) => additionalBenefitsOnChange(e, index)}
                id="additionalBenefits"
                value={item?.value ?? ''}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingTop: 1,
              }}
            >
              {removeClick.additionalBenefits ? (
                <Button color="secondary" startIcon={<ControlPointIcon />}>
                  Remove
                </Button>
              ) : (
                ''
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ backgroundColor: 'white', marginTop: 3, padding: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 2,
            }}
          >
            <TypoText title="Welcome Benifits" />
            <img style={{ marginBottom: '14px' }} src={Info_Icon} />
            <TypographyInfo title="Add your additional benifits here" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button color="secondary" onClick={AddWelcomeList}>
              <ControlPointIcon />
              <Typography sx={{ textTransform: 'capitalize' }}>
                Add Description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />

        {dataObj.welcomeBenefits.map((item: any, index: number) => {
          return (
            <Box sx={{ marginTop: 3 }}>
              <TypoText title={`Welcome Benefits Description ${index + 1}`} />
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <TypoText
                  placeholder="Enter Description for the welcome benefits "
                  handleChange={(e: any) => welcomeBenefitsOnChange(e, index)}
                  id="welcomeBenefits"
                  value={item?.value ?? ''}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingTop: 1,
                }}
              >
                {removeClick.welcomeBenefits ? (
                  <Button color="secondary" startIcon={<ControlPointIcon />}>
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

      <Box
        sx={{
          backgroundColor: 'white',
          marginTop: 3,
          padding: 4,
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <BtnOutlined title="close" />

          <BtnText title="Save as draft" />

          <BtnContained title="Submit" onClick={handleSubmitClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewCard;
