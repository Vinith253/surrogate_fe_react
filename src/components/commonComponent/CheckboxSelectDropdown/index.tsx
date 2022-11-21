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
  data: Array<object>;
  gridColumn: number;
};

function CheckboxSelectDropdown({ data, gridColumn }: Props) {
  console.log('data', data);
  // const ITEM_HEIGHT = 40;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
  };

  return (
    <Grid container spacing={2} className="checkbox-select-dropdown">
      {data?.map((eachItem: any, index: number) => {
        return (
          <Grid item xs={gridColumn} key={index}>
            <Typography>{eachItem?.label}</Typography>
            <Select>
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
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="All"
                />
              </FormGroup>
              {eachItem?.option?.map((each: any, index: number) => (
                <MenuItem
                  key={index}
                  value={each?.value}
                  className="checkbox-checked"
                >
                  <Checkbox checked={true} />
                  <ListItemText primary={each?.name} />
                </MenuItem>
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
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CheckboxSelectDropdown;
