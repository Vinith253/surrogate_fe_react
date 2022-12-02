import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import './style.scss';

export default function SearchDropdown(props: { data: any }) {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        style={{ height: '45px' }}
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
