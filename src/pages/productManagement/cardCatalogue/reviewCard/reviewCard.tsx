import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import CheckBox from '../../../../components/commonComponent/CheckBox/checkBox';
import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CardImage from '../../../../assets/images/image 44.png';
import TypoText from '../../../../components/commonComponent/CustomText/Textfield';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import TypographyHead from '../../../../components/commonComponent/CustomText/Head';

const ReviewCard = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'540px',
    height:'380px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    paddingX:2
  };

  return (
    <Box
      sx={{
        backgroundColor: '#eceff2',
        // backgroundColor: "#898989",
        // margin: 0,
        padding: 0,
        paddingBottom: 11,
      }}
    >
      <Box
        sx={{ backgroundColor: 'white', paddingX: 3, padding: 2, marginTop: 3 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 1,
            }}
          >
            <Box onClick={goBack}>
              <ArrowBackIcon />
            </Box>
            <Box>
              <TypoText title="Eterna - Platinum (ID No. 12345678" />
              <TypographyInfo title="From here you ca add your new card" />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: 'blue' }}>
            <EditIcon />
            <Button>Edit Card</Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ marginTop: 2, display: 'flex' }}>
            <Card
              sx={{
                width: '250px',
                height: '160px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e0e0de',
              }}
            >
              <img width={'250px'} height={'160px'} src={CardImage} onClick={handleOpen} />

              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between',padding:2 }}
                  >
                    <Typography sx={{fontSize:'14px',fontWeight:400}} >
                      Card Photo - Eterna - Platinum
                    </Typography>
                    <Typography sx={{color:'blue',cursor:'pointer'}} onClick={handleClose} >Close</Typography>
                  </Box>
                  <Box sx={{margin:'auto'}}  >
                    <img  width={'500px'} height={'300px'} src={CardImage} />
                  </Box>
                </Box>
              </Modal>
            </Card>
          </Box>

          <Box>
            <Grid container sx={{ paddingY: 2 }} spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TypoText title="Business ID" />
                  <TypoText placeholder="1234567890" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TypoText title="Card Name" />
                  <TypoText placeholder="Yes Bank Credit Card" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TypoText title="Interest Rate (in%)" />
                  <TypoText placeholder="12 %" />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TypoText title="Card Type" />
                  <Select
                    placeholder="Salaried"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TypoText title="Card Mode" />
                  <Select
                    placeholder="General Basic"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TypoText title="Card Category" />
                  <Select
                    placeholder="General"
                    variant="outlined"
                    size="small"
                  />
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
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '92%',
                  }}
                >
                  <TypoText title="Maximum Card Limit" />
                  <TypoText placeholder="2,00,000.00" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
            paddingBottom: 2,
          }}
        >
          <TypoText title=" Surrogate" />
          <InfoIcon />
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
            Surrogate
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
            Payroll,Card for Card,CIBIL,AQB
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
            paddingBottom: 2,
          }}
        >
          <TypoText title=" Channels" />
          <InfoIcon />
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
            Channels
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
            Bank,DSA,Fintech Partner
          </Typography>
        </Box>
      </Box>

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
          <InfoIcon />
        </Box>
        <Divider />

        <Box
          sx={{
            paddingTop: 2,
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              CIBIL Score
            </Typography>
            <Typography sx={{ fontSize: 16 }}>700</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Salary Limit
            </Typography>
            <Typography sx={{ fontSize: 16 }}>40,000.00</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              ITR Limit
            </Typography>
            <Typography sx={{ fontSize: 16 }}>50,000.00</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              C4C Limit
            </Typography>
            <Typography sx={{ fontSize: 16 }}>70,000.00</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
            paddingBottom: 2,
          }}
        >
          <TypoText title=" Extra Cards" />
          <InfoIcon />
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

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
          }}
        >
          <TypoText title="Benifits" />
          <InfoIcon />
        </Box>
        <Divider />

        <Box
          sx={{ paddingY: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Currency Markup Charges
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>2%</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Currency Markup Description
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>
              3.50% of the transaction value as a foreign currency transaction
              fee.
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', paddingY: 2, gap: '20%' }}>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Airmiles
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>100</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
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
            Get 4 Frequent flyer Air miles for every citi prestige reward point
            you transfer to our airline partners
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
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Cashback
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>2%</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Cashback Minimum Spends
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>200</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
                Spend Category
              </Typography>
              <Typography sx={{ fontWeight: '500' }}>
                Online Shopping,Flight Tickets,Fuel
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Cashback Description
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>
              5% cashback will be rewarded to you on purchases on movie tickets,
              bill payments, or on any payments made for utilities done through
              citi Billpay. The maximum cashback you will earn is 100 for each
              category{' '}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: 'white', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
          }}
        >
          <TypoText title="Fee & Fee Wavier Details" />
          <InfoIcon />
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
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Joining Fee
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>2%</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Joining Fee Wavier Limit
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>50,000</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
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
            Spend 30,000 within 90 days of the card's setup and get the joining
            fee waived off
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
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Annual Fee
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>1000</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Annual Fee Wavier Limit
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>50000</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
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
            Spend 50,000 in a year and get a wavier of next year's annual fee
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
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Fuel Surcharge
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>1%</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Fuel Surcharge Wavier Limit
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>250</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Petrol Bunks
            </Typography>
            <Typography sx={{ fontWeight: '500' }}>All Petrol Bunks</Typography>
          </Box>
        </Box>

        <Box sx={{ paddingY: 2 }}>
          <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
            Fuel Surcharge Description
          </Typography>
          <Typography sx={{ fontWeight: '500' }}>
            1% fuel surcharge wavier at all fuel stations across india on
            minimum transaction of 400Max cashback of 250 per statement cycle
          </Typography>
        </Box>
      </Box>

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
          <InfoIcon />
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sunt alias sequi tempora totam et eos sapiente nisi deserunt veniam
            atque voluptas corporis, distinctio soluta quaerat blanditiis neque
            voluptatibus deleniti?
          </Typography>
        </Box>
      </Box>

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
          <InfoIcon />
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sunt alias sequi tempora totam et eos sapiente nisi deserunt veniam
            atque voluptas corporis, distinctio soluta quaerat blanditiis neque
            voluptatibus deleniti?
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sunt alias sequi tempora totam et eos sapiente nisi deserunt veniam
            atque voluptas corporis, distinctio soluta quaerat blanditiis neque
            voluptatibus deleniti?
          </Typography>
        </Box>
      </Box>

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
          <InfoIcon />
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
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Additional Benefits 1
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sunt alias sequi tempora totam et eos sapiente nisi
              deserunt veniam atque voluptas corporis, distinctio soluta quaerat
              blanditiis neque voluptatibus deleniti?
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Additional Benefits 2
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sunt alias sequi tempora totam et eos sapiente nisi
              deserunt veniam atque voluptas corporis, distinctio soluta quaerat
              blanditiis neque voluptatibus deleniti?
            </Typography>
          </Box>
        </Box>
      </Box>

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
          <InfoIcon />
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
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Welcome Benefits 1
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sunt alias sequi tempora totam et eos sapiente nisi
              deserunt veniam atque voluptas corporis, distinctio soluta quaerat
              blanditiis neque voluptatibus deleniti?
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontSize: 14, color: 'grey' }}>
              Welcome Benefits 2
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sunt alias sequi tempora totam et eos sapiente nisi
              deserunt veniam atque voluptas corporis, distinctio soluta quaerat
              blanditiis neque voluptatibus deleniti?
            </Typography>
          </Box>
        </Box>
      </Box>

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
          <BtnOutlined title="close" />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCard;
