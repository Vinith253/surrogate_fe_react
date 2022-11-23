import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { SearchOutlined } from '@mui/icons-material';
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  TextField,
  IconButton,
  Checkbox,
  Box,
} from '@mui/material';
import './style.scss';
import { Stack } from '@mui/system';

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
    <Stack className="checkbox-select-dropdown">
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        size={flag === 'morefilter' ? 'small' : undefined}
      >
        <Stack className="checkbox-dropdown-options">
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
          <Stack className="all-option-checkbox">
            <FormControlLabel
              label={<Typography sx={{ fontSize: '14px' }}>All</Typography>}
              control={<Checkbox color="secondary" />}
            />
          </Stack>

          {options?.map((each: any, index: number) => (
            <Grid px={3} key={index}>
              <FormControlLabel
                label={
                  <Typography sx={{ fontSize: '14px' }}>
                    {each?.name}
                  </Typography>
                }
                control={<Checkbox color="secondary" className="each-option" />}
              />
            </Grid>
          ))}
          <div className="underline"></div>
          <Box className="button-container">
            <BtnOutlined title="Reset" BtnHeight={32} BtnWidth={70} />
            <BtnContained title="Select" BtnHeight={32} BtnWidth={70} />
          </Box>
        </Stack>
      </Select>
    </Stack>
  );
}

export default CheckboxSelectDropdown;
