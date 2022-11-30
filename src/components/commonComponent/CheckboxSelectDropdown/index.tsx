import React, { useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { SearchOutlined } from '@mui/icons-material';
import {
  FormControlLabel,
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
  const [selectedValues, setSelectedValues] = useState<string[]>(['All']);
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [listOptions, setListOptions] = useState(options);
  const [isSelectLayoutOpen, setIsSelectLayoutOpen] = useState(false);

  useEffect(() => {
    prepareOptions();
  }, [isAllSelected]);

  const prepareOptions = async () => {
    let array = [] as any;
    listOptions?.map((eachOption: any) => {
      if (isAllSelected) eachOption.isSelected = true;
      else eachOption.isSelected = false;
      array.push(eachOption);
    });
    await setListOptions(array);
  };

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;
    setSelectedValues(typeof value === 'string' ? value.split(',') : value);
  };

  const checkboxHandleChange = (each: any) => {
    if (each?.value === 'All') {
      setIsAllSelected(!isAllSelected);
    } else {
      let array = [] as any;
      listOptions?.map((eachItem: any, index: number) => {
        if (each.value === eachItem.value) {
          eachItem.isSelected = !eachItem.isSelected;
        }
        if (!eachItem.isSelected) {
          setIsAllSelected(false);
        }
        array.push(eachItem);
      });
      setListOptions(array);
    }
  };

  const resetAllOptions = () => {
    let array = [] as any;
    listOptions?.map((eachOption: any) => {
      eachOption.isSelected = true;
      array.push(eachOption);
    });
    setListOptions(array);
    setIsAllSelected(true);
  };

  const submitSelectedOptions = () => {
    let array = [] as any;
    listOptions?.map((eachOption: any) => {
      if (isAllSelected) {
        setSelectedValues(['All']);
      } else if (eachOption.isSelected) {
        array.push(eachOption.value);
        setSelectedValues(array);
      }
    });
    setIsSelectLayoutOpen(false);
  };

  return (
    <Stack className="checkbox-select-dropdown">
      <Select
        open={isSelectLayoutOpen}
        onOpen={() => setIsSelectLayoutOpen(true)}
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedValues}
        onChange={handleChange}
        renderValue={(selected) => selected.join(', ')}
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
          {listOptions?.map((each: any, index: number) => (
            <Grid px={3} key={index}>
              <FormControlLabel
                label={
                  <Typography sx={{ fontSize: '14px' }}>
                    {each?.name}
                  </Typography>
                }
                control={
                  <Checkbox
                    color="secondary"
                    className="each-option"
                    checked={each.isSelected}
                    onChange={() => checkboxHandleChange(each)}
                  />
                }
              />
            </Grid>
          ))}
          <div className="underline"></div>
          <Box className="button-container">
            <BtnOutlined
              title="Reset"
              BtnHeight={32}
              BtnWidth={70}
              onClick={resetAllOptions}
            />
            <BtnContained
              title="Select"
              BtnHeight={32}
              BtnWidth={70}
              disabled={!isAllSelected && selectedValues.length === 0}
              onClick={submitSelectedOptions}
            />
          </Box>
        </Stack>
      </Select>
    </Stack>
  );
}

export default CheckboxSelectDropdown;
