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
} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnText from '../../../../components/commonComponent/CustomText/Button/Text';
// import Checkbox from "@mui/material/Checkbox";
// import InfoIcon from '@mui/icons-material/Info';
import Info_Icon from '../../../../assets/images/info_icon.svg';
import Upload_Img from '../../../../assets/images/uploadImg.png'
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
  const close = () => {
    navigate('/productManagement/cardCatalogue');
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

  // const removeReward = (e , index) => {
  //   setRemoveClick((prev) => ({
  //     ...prev,
  //     reward: false,
  //   }))
  //   const value = e?.target?.value ?? '';
  //   setDataObj((prev: any) => {
  //     let newValue = prev.rewardDescription;
  //     newValue[index-1].value = value;
  //     const result = { ...prev, rewardDescription: newValue };
  //     return result;
  //   });
  // }

  

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

  const removeWelcome = (index: number) => {
    let newData = dataObj?.welcomeBenefits ?? [];
    newData.splice(index, 1);
    setDataObj((prev) => ({
      ...prev,
      welcomeBenefits: newData,
    }));
  };

  const removeReward = (index:number) => {
    let newData = dataObj?.rewardDescription ?? [];
    newData.splice(index, 1);
    setDataObj((prev)=>({
      ...prev, rewardDescription:newData,
    }));

  };
  const removeKeyBenefits = (index:number) => {
    let newData = dataObj?.keyBenefits ?? [];
    newData.splice(index, 1);
    setDataObj((prev)=>({
      ...prev, keyBenefits:newData,
    }));

  };

  const removeAdditionalBenefits = (index:number) => {
    let newData = dataObj?.additionalBenefits ?? [];
    newData.splice(index, 1);
    setDataObj((prev)=>({
      ...prev, additionalBenefits:newData,
    }));
  };







  return (
    <Box className="singleCard">
      <Box className="box1">
        <Box className="head">
          <Box className="headFull">
            <Box onClick={goBack}>
              <ArrowBackIcon className="headIcon" />
            </Box>
            <Box>
              <TypoText title="Add New Card" />
              <TypographyInfo title="From here you ca add your new card" />
            </Box>
          </Box>

          <Box>
            <Button className="headId">ID.No. 123456</Button>
          </Box>
        </Box>
      </Box>

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
              {/* <input hidden accept="image/*" type="file" /> */}
              {/* <FileUploadIcon /> */}
              <img src={Upload_Img} />
            </IconButton>

            <Button color="secondary">
              Upload
              {/* <input hidden accept="image/*" multiple type="file" /> */}
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

        <Grid container className="cardDetailGrid1" spacing={5}>
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
            <Box className="cardDetailSelect">
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
            <Box className="cardDetailSelect">
              <TypoText title="Card Mode" />
              <Select placeholder="Card type" variant="outlined" size="small" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="cardDetailSelect">
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

      <Box className="box4">
        <Box className="surrogateTitle">
          <TypoText title="Choose Surrogate" />
          <img className="img" src={Info_Icon} />
          <TypographyInfo title="From here, you can choose the type of surrogate for the card" />
        </Box>
        <Divider />

        <Grid container className="chooseSurrogateGrid">
          <Grid item xs={12} sm={6} md={2}>
            <Box className="box">
              <CheckBox />
              <Typography className="text">Payroll</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className="box">
              <CheckBox />
              <Typography className="text">Card For Card</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className="box">
              <CheckBox />
              <Typography className="text">CIBIL</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className="box">
              <CheckBox />
              <Typography className="text">AQB</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className="box">
              <CheckBox />
              <Typography className="text">Pre-Approved</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className="box">
              <CheckBox />
              <Typography className="text">Secured</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

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
              <CheckBox />
              <Typography className="text">Bank</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box className="box">
              <CheckBox />
              <Typography className="text">DSA</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box className="box">
              <CheckBox />
              <Typography className="text">Fintech Partner</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

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
              {/* <TextField sx={{ width: "350px" }} size="small" placeholder="0" /> */}
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
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
            </Box>
          </Grid>
        </Grid>

        <Grid container className="eligibilityGrid2">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              className="c4c"
              // sx={{ display: 'flex', flexDirection: 'column', width: '92%' }}
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

      <Box className="box7">
        <Box className="benefitsTitle">
          <TypoText title="Benifits" />
          <img className="img" src={Info_Icon} />
          <TypographyInfo title="From here you can add the card information" />
        </Box>
        <Divider />

        <Box className="benefitsBox">
          <Box className="box">
            <CheckBox />
            <Typography className="text">Currency Markup Charges</Typography>
          </Box>
          <Box className="box">
            <CheckBox />
            <Typography className="text">Airmiles</Typography>
          </Box>
          <Box className="box">
            <CheckBox />
            <Typography className="text">Cashbacks</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="box8">
        <Box className="feeWavier">
          <Box className="feeWavierHead">
            <TypoText title="Fee & Fee Wavier Details" />
            <img className="img" src={Info_Icon} />
            <TypographyInfo title="From here you can add fee wavier details" />
          </Box>
          <Box className="btn">
            <Button color="secondary">
              <ControlPointIcon />
              <Typography className="text">Add Additional Benefits</Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box className="joiningFeeBox">
          <TypoText title="Joining Fee " />
          <TypoText title=" (optional)" className="text" />
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
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
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
            <Box className="joiningFeeSelect">
              <TypoText title="Select Period" />
              <Select placeholder="choose period" className="field"></Select>
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
          <TypoText title=" (optional)" className="text" />
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
              <Typography
                className="annualFeeGrid"
                // sx={{
                //   display: 'flex',
                //   justifyContent: 'flex-end',
                //   fontSize: 13,
                //   marginTop: 1,
                // }}
              >
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
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
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
          <TypoText title=" (optional)" className="text" />
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
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
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
                  handleChange={(e: any) => rewardDescriptionOnChange(e, index)}
                  id="rewardDescription"
                  value={item?.value ?? ''}
                />
              </Box>
              <Box className="newText">
                {dataObj.rewardDescription.length > 1 &&
                removeClick.reward ? (
                  <Button
                    onClick={()=>removeReward(index)}
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

      <Box className="box10">
        <Box className="keyBenefitsHeader">
          <Box className="headerBox">
            <TypoText title="Key Benifits" />
            <img className="img" src={Info_Icon} />
            <TypographyInfo title="Add your key benifits from here" />
          </Box>
          <Box className="headerbtn">
            <Button color="secondary" onClick={AddKeyList}>
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

      <Box className="box11">
        <Box className="additionalBenefitsHeader">
          <Box className="headerBox">
            <TypoText title="Additional Benifits" />
            <img className="img" src={Info_Icon} />
            <TypographyInfo title="Add your additional benifits here" />
          </Box>
          <Box className="headerbtn">
            <Button color="secondary" onClick={AddAdditionalList}>
              <ControlPointIcon />
              <Typography className="btnText">Add description</Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        {dataObj.additionalBenefits.map((item: any, index: number) => (
          <Box className="additionalBenefitsDescriptionBox">
            <TypoText title={`Additional Benefits Description ${index + 1}`} />
            <Box className="fullText">
              <TypoText
                placeholder="Enter Description for the Additional benefits"
                handleChange={(e: any) => additionalBenefitsOnChange(e, index)}
                id="additionalBenefits"
                value={item?.value ?? ''}
              />
            </Box>
            <Box className="newText">
              { dataObj.additionalBenefits.length > 1 &&
               removeClick.additionalBenefits ? (
                <Button
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

      <Box className="box12">
        <Box className="welcomeBenefitsHeader">
          <Box className="headerBox">
            <TypoText title="Welcome Benifits" />
            <img className="img" src={Info_Icon} />
            <TypographyInfo title="Add your additional benifits here" />
          </Box>
          <Box className="headerbtn">
            <Button color="secondary" onClick={AddWelcomeList}>
              <ControlPointIcon />
              <Typography className="btnTex">Add Description</Typography>
            </Button>
          </Box>
        </Box>
        <Divider />

        {dataObj.welcomeBenefits.map((item: any, index: number) => {
          return (
            <Box className="welcomeBenefitsDescriptionBox">
              <TypoText title={`Welcome Benefits Description ${index + 1}`} />
              <Box className="fullText">
                <TypoText
                  placeholder="Enter Description for the welcome benefits "
                  handleChange={(e: any) => welcomeBenefitsOnChange(e, index)}
                  id="welcomeBenefits"
                  value={item?.value ?? ''}
                />
              </Box>
              <Box className="newText">
                {dataObj.welcomeBenefits.length > 1 &&
                removeClick.welcomeBenefits ? (
                  <Button
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

      <Box className="footer">
        <Box className="box">
          <BtnOutlined onClick={close} title="close" />

          <BtnText title="Save as draft" />

          <BtnContained title="Submit" onClick={handleSubmitClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewCard;
