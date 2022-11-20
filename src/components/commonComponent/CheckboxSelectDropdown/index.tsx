import './style.scss';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Box, Grid, Typography } from '@mui/material';

function CheckboxSelectDropdown(data: any) {
  console.log('data', data);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
  };

  return (
    <div className="checkbox-select-dropdown">
      <Grid item xs={4}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
        <Typography>State</Typography>
        <Select
          value={1}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          //   onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={MenuProps}
        >
          {names.map((name: any) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={true} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {/* </Box> */}
      </Grid>
    </div>

    // <div>
    //   <FormControl sx={{ m: 1, width: 300 }}>
    //     <Select
    //       labelId="demo-multiple-checkbox-label"
    //       id="demo-multiple-checkbox"
    //       multiple
    //       // value={personName}
    //       // onChange={handleChange}
    //       input={<OutlinedInput label="Tag" />}
    //       // renderValue={(selected: any) => selected.join(', ')}
    //       // MenuProps={MenuProps}
    //     >
    //       {names.map((name: any) => (
    //         <MenuItem key={name} value={name}>
    //           <Checkbox checked={true} />
    //           <ListItemText primary={name} />
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    // </div>
  );
}

export default CheckboxSelectDropdown;
