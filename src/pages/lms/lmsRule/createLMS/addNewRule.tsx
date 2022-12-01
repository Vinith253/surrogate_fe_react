import {
  Stack,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@mui/material';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import {
  Configuration,
  SurrogateCheckboxList,
  DroppedTypeCheckboxList,
  CommunicationMode,
} from './../lmsRule.const';
import HeaderWithInfo from '../../../../components/commonComponent/HeaderWithInfo';
import './style.scss';

function LMSRule() {
  return (
    <Stack className="create-lms-rule-container">
      <Stack className="create-lms-rule-header">
        <ScreenHeader
          title="Rule Name: C4CNORCKYC (Auto Populate)"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />
      </Stack>

      <Stack className="lms-rule-container">
        <HeaderWithInfo
          header="Role Details"
          isInfoEnabled={true}
          info="From here, you can add the user’s personal details"
          isDownloadEnabled={false}
        />
        <Stack className="lms-rule-form-container">
          <Typography className="each-field-label">Role Access Type</Typography>
          <Grid container spacing={2}>
            <RadioGroup
              defaultValue="initiator"
              name="radio-buttons-group"
              className="radio-group-container"
            >
              {Configuration?.map((eachItem: any, index: number) => {
                return (
                  <Grid item xs={2} key={index} className="checkbox-label">
                    <FormControlLabel
                      value={eachItem?.value}
                      control={<Radio color="secondary" />}
                      label={eachItem?.label}
                    />
                  </Grid>
                );
              })}
            </RadioGroup>
          </Grid>
        </Stack>
      </Stack>
      <Stack className="lms-rule-container">
        <HeaderWithInfo
          header="Rejected"
          isInfoEnabled={true}
          info="From here, you can add the user’s personal details"
          isDownloadEnabled={false}
        />
        <Stack className="lms-rule-form-container">
          <Typography className="each-field-label">Select Surrogate</Typography>
          <Grid container spacing={2}>
            {SurrogateCheckboxList?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={2} key={index} className="checkbox-label">
                  <FormControlLabel
                    control={<Checkbox />}
                    label={eachItem?.label}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
        <Stack className="lms-rule-form-container">
          <Typography className="each-field-label">Dedube</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4} className="checkbox-label">
              <FormControlLabel
                control={<Checkbox />}
                label={'Enable Dedube Configuration'}
              />
            </Grid>
          </Grid>
        </Stack>
        <Stack className="lms-rule-form-container">
          <Typography className="each-field-label">Dropped Type</Typography>
          <Grid container spacing={2}>
            {DroppedTypeCheckboxList?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={3} key={index} className="checkbox-label">
                  <FormControlLabel
                    control={<Checkbox />}
                    label={eachItem?.label}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
        <Stack className="lms-rule-form-container">
          <Typography className="each-field-label">
            Mode Of Communication
          </Typography>
          <Grid container spacing={2}>
            {CommunicationMode?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={2} key={index} className="checkbox-label">
                  <FormControlLabel
                    control={<Checkbox />}
                    label={eachItem?.label}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LMSRule;
