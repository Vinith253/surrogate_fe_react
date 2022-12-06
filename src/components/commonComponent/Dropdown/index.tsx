import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.scss';

export default function SearchDropdown(props: {
  data: any;
  handleChange?: Function;
}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    // props.handleChange();
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        className="single-select-dropdown"
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {props?.data?.map((eachOption: any, index: number) => {
          return (
            <MenuItem value={eachOption.value} key={index}>
              {eachOption?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
