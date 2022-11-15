import * as React from "react";
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
} from "@mui/material";

import BtnContained from "../../../../components/commonComponent/CustomText/Button/Contained";
import BtnOutlined from "../../../../components/commonComponent/CustomText/Button/Outlined";
import BtnText from "../../../../components/commonComponent/CustomText/Button/Text";
import Checkbox from "@mui/material/Checkbox";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
// import { Divider } from "@material-ui/core";
// import CadActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import TypoText from "../../../../components/commonComponent/CustomText/Textfield";
import TypographyInfo from "../../../../components/commonComponent/CustomText/Info";
import { useNavigate } from "react-router-dom";

export const CreateNewCard = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/productManagement/cardCatalogue");
  };
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        backgroundColor: "#eceff2",
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ backgroundColor: "white", paddingX: 3, padding: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <Box onClick={goBack}>
              <ArrowBackIcon />
            </Box>
            <Box>
              <TypoText title="Add New Card" />
              <TypographyInfo title="From here you ca add your new card" />
            </Box>
          </Box>

          <Box>
            <Button>ID.No. 123456</Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", padding: 3, marginTop: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <TypoText title="Upload Photo" />
          <InfoIcon />
          <TypographyInfo title="Upload the image of the card" />
        </Box>
        <Divider />
        <Box sx={{ marginTop: 2 }}>
          <Card
            sx={{
              width: 350,
              height: 150,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e0e0de",
            }}
          >
            <FileUploadIcon />
            <Button color="secondary">Upload</Button>
          </Card>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <TypoText title="Enter Card Details " />
          <InfoIcon />
          <TypographyInfo title="From here you can can add the card information" />
        </Box>
        <Divider />

        <Grid container sx={{ paddingY: 2 }} spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Business ID" />
              <TypoText placeholder="Business ID" />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="Business ID"
              /> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Card Name" />
              <TypoText placeholder="Card Name" />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="card name"
              /> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Interest Rate (in%)" />
              <TypoText placeholder="Interest Rate (in%)" />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="interest rate"
              /> */}
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Card Type" />
              <Select placeholder="Card type" variant="outlined" size="small" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Card Mode" />
              <Select placeholder="Card type" variant="outlined" size="small" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Card Category" />
              <Select placeholder="Card type" variant="outlined" size="small" />
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TypoText title="Maximum Card Limit" />
                <TypoText placeholder="Maximum Card Limit" />
                {/* <TextField
                  sx={{ width: "350px" }}
                  size="small"
                  placeholder="Enter maximum card limit"
                /> */}
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: "white", padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <TypoText title="Choose Surrogate" />
          <InfoIcon />
          <TypographyInfo title="From here, you can choose the type of surrogate for the card" />
        </Box>
        <Divider />

        <Grid container sx={{ display: "flex", marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>Payroll</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>Card For Card</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>CIBIL</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>AQB</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>Pre-Approved</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>Secured</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: "white", padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          <TypoText title="Select Channels" />

          <InfoIcon />

          <TypographyInfo title="From here, you can choose the channel of the card" />
        </Box>
        <Divider />

        <Grid container sx={{ display: "flex", gap: 12, marginTop: 2 }}>
          <Grid item>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>Bank</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>DSA</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography sx={{ paddingTop: 1 }}>Fintech Partner</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <TypoText title="Eligibility Criteria " />
          <InfoIcon />
          <TypographyInfo title="You can add the customer's eligibility here" />
        </Box>
        <Divider />

        <Grid container sx={{ paddingY: 2 }} spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="CIBIL Score" />
              <TypoText placeholder="CIBIL Score" />
              {/* <TextField sx={{ width: "350px" }} size="small" placeholder="0" /> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Salary Limit" />
              <TypoText placeholder="$ 00.00" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="ITR Limit" />
              <TypoText placeholder="$ 00.00" />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TypoText title="C4C Limit" />
                <TypoText placeholder="$ 00.00" />
                {/* <TextField
                  sx={{ width: "350px" }}
                  size="small"
                  placeholder="$ 00.00"
                /> */}
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 3, backgroundColor: "white", padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          <TypoText title="Benifits" />
          <InfoIcon />
          <TypographyInfo title="From here you can add the card information" />
        </Box>
        <Divider />

        <Box sx={{ marginTop: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Checkbox />
            <Typography sx={{ paddingTop: 1 }}>
              Currency Markup Charges
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Checkbox />
            <Typography sx={{ paddingTop: 1 }}>Airmiles</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Checkbox />
            <Typography sx={{ paddingTop: 1 }}>Cashbacks</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <TypoText title="Fee & Fee Wavier Details" />
            <InfoIcon />
            <TypographyInfo title="From here you can add fee wavier details" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button color="secondary">
              <ControlPointIcon />
              <Typography sx={{ textTransform: "capitalize" }}>
                Add Additional Benefits
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px 0",
          }}
        >
          <TypoText title="Joining Fee " />
          <TypoText
            title=" (optional)"
            style={{ marginLeft: "3px", color: "grey" }}
          />
        </Box>

        <Grid container sx={{ paddingY: 2 }} spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Joining Fee" />
              <TypoText placeholder="$ 00.00" />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 13,
                  marginTop: 1,
                }}
              >
                Enter $0 for No Joining Fee
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Joining Fee Wavier SpendLimit" />
              <TypoText placeholder="$ 00.00" />
              {/* <TextField
                sx={{ width: "350px" }}
                size="small"
                placeholder="$ 00.00"
              /> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Select Period" />
              <Select
                placeholder="choose period"
                sx={{ height: "40px" }}
              ></Select>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TypoText title="Joining Fee Description" />
          <Box
            sx={{
              // width: 1200,
              width: "100%",
            }}
          >
            <TypoText placeholder="Enter Joining Fee Description" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px 0 20px 0",
            marginTop: "20px",
          }}
        >
          <TypoText title="Annual Fee " />
          <TypoText
            title=" (optional)"
            style={{ marginLeft: "3px", color: "grey" }}
          />
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Enter Annual Fee" />
              <TypoText placeholder="Enter Currency Markup Charges (in %)" />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 13,
                  marginTop: 1,
                }}
              >
                Enter $0 for No Joining Fee
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title=" Annual Fee Wavier SpendLimit" />
              <TypoText placeholder="$ 00.00" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Select Period" />
              <Select placeholder="choose category" sx={{ height: "40px" }}>
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 1 }}>
          <TypoText title="Currency Markup Description" />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TypoText placeholder="Enter Currency Markup Charges (in %)" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px 0 20px 0",
            marginTop: "20px",
          }}
        >
          <TypoText title="Fuel Surcharge" />
          <TypoText
            title=" (optional)"
            style={{ marginLeft: "3px", color: "grey" }}
          />
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Fuel Surcharge (in %)" />
              <TypoText placeholder="Enter fuel surcharge in %" />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 13,
                  marginTop: 1,
                }}
              >
                Enter $0 to cancel Fuel Surcharge wavier
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Fuel Surcharge Wavier Spend Limit" />
              <TypoText placeholder="$ 00.00" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TypoText title="Select Period" />
              <Select placeholder="choose category" sx={{ height: "40px" }}>
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 1 }}>
          <TypoText title="Currency Markup Description" />
          <Box
            sx={{
              // width: 1200,
              maxWidth: "100%",
            }}
          >
            <TypoText placeholder="Enter Currency Markup Charges (in %)" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <TypoText title="Rewards" />
            <InfoIcon />
            <TypographyInfo title="Add your reward contents here" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button color="secondary">
              <ControlPointIcon />
              <Typography sx={{ textTransform: "capitalize" }}>
                Add description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginTop: 3 }}>
          <TypoText title="Reward Description 1" />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TypoText placeholder="Enter Key Description for the Reward npnp" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <TypoText title="Key Benifits" />
            <InfoIcon />
            <TypographyInfo title="Add your key benifits from here" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button color="secondary">
              <ControlPointIcon />
              <Typography sx={{ textTransform: "capitalize" }}>
                Add description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginTop: 3 }}>
          <TypoText title="Key Benefits Description 1" />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TypoText placeholder="Enter Key Description for the Reward npnp" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <TypoText title="Additional Benifits" />
            <InfoIcon />
            <TypographyInfo title="Add your additional benifits here" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button color="secondary">
              <ControlPointIcon />
              <Typography sx={{ textTransform: "capitalize" }}>
                Add description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginTop: 3 }}>
          <TypoText title="Additional Benefits Description 1" />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TypoText placeholder="Enter Key Description for the Reward npnp" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", marginTop: 3, padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <TypoText title="Welcome Benifits" />
            <InfoIcon />
            <TypographyInfo title="Add your additional benifits here" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button color="secondary">
              <ControlPointIcon />
              <Typography sx={{ textTransform: "capitalize" }}>
                Add Description
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginTop: 3 }}>
          <TypoText title="Additional Benefits Description 1" />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TypoText placeholder="Enter Key Description for the Reward " />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          marginTop: 3,
          padding: 4,
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <BtnOutlined title="close" />

          <BtnText title="Save as draft" />

          <BtnContained title="Submit" />
        </Box>
      </Box>
    </Box>
  );
};
