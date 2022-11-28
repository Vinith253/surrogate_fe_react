import { FormControl, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import './cardAndDropDown.scss';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dropDown_icon from '../../../assets/icons/dropDown_icon.svg';
type dataProps = {
  value: string;
  onChange?: any;
  showDropDown: boolean;
};
export const icon = () => {
  return <img src={dropDown_icon} alt="" />;
};

const CardAndDropDown = ({
  value = '',
  onChange = null,
  showDropDown = false,
}: dataProps) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Stack className="cardAndDropDownContainer">
      {showDropDown ? (
        <Stack className="dropDownContainer">
          <FormControl>
            <Select
              // IconComponent={icon}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>0</em>
              </MenuItem>
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      ) : (
        <Stack className="count">
          <Typography className="modelAccessControlModelnumber">
            {value}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CardAndDropDown;
