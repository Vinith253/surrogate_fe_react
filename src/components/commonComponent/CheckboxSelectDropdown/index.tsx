import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SearchOutlined } from '@mui/icons-material';
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  TextField,
  IconButton,
  Checkbox,
  Button,
  Box,
} from '@mui/material';
import './style.scss';

type Props = {
  options: Array<object>;
  flag?: string;
};

function CheckboxSelectDropdown({ options, flag }: Props) {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    console.log('value', event);

    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Select
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={personName}
      onChange={handleChange}
      size={flag==="morefilter" ? "small" : undefined}
    >
      <TextField
        className="search-text-field"
        placeholder="Search by..."
        InputProps={{
          startAdornment: (
            <IconButton edge="start">
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
      <FormGroup className="all-option-checkbox">
        <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
      </FormGroup>
      {options?.map((each: any, index: number) => (
        <Grid px={3}>
        <FormControlLabel
        label={
          <Typography sx={{ fontSize: '14px' }}>
           {each?.name}
          </Typography>
        }
        control={
          <Checkbox
            color="secondary"
          />
        }
      /></Grid>
        // <MenuItem key={index} value={each?.value} className="checkbox-checked">
          
        //   <Checkbox />
        //   <ListItemText primary={each?.name} />
        // </MenuItem>
      ))}
      <div className="underline"></div>
      <Box className="button-container">
        <Button color="secondary" variant="outlined">
          Reset
        </Button>
        <Button color="secondary" variant="contained">
          Search
        </Button>
      </Box>
    </Select>
  );
}

export default CheckboxSelectDropdown;
