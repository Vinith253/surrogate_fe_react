import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import './style.scss';

export default function SelectLabels(props: { data: any }) {
  console.log('props', props);
  const [selectedValue, setSelectedValue] = useState(props?.data?.defaultName);
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
        <TextField
          className="search-dropdown-text-field"
          placeholder="Search by..."
          style={{ width: '90%', margin: '5px 18px', height: '46px' }}
          InputProps={{
            startAdornment: (
              <IconButton edge="start">
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
        {props?.data?.options?.map((eachOption: any, index: number) => {
          return (
            <MenuItem
              value={eachOption.value}
              key={index}
              style={{ height: '45px', margin: '0px 18px' }}
            >
              {eachOption?.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
