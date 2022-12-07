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
  sendSelectedValue?: Function;
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
      else {
        if (selectedValues.find((value: string) => value === eachOption.value))
          eachOption.isSelected = true;
        else eachOption.isSelected = false;
      }
      array.push(eachOption);
    });
    await setListOptions(array);
  };

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;
    // console.log('value', value);
    setSelectedValues(typeof value === 'string' ? value.split(',') : value);
  };

  const checkboxHandleChange = (each: any, event: any) => {
    if (each?.value === 'All') {
      if (event?.target?.checked) {
        setIsAllSelected(true);
        setSelectedValues(['All']);
      } else {
        setIsAllSelected(false);
        setSelectedValues([]);
      }
    } else {
      let array = [] as any;
      let selectedItems = [] as any;
      listOptions?.map((eachItem: any, index: number) => {
        if (!event?.target?.checked && eachItem.value === 'All') {
          eachItem.isSelected = false;
        }
        if (each.value === eachItem.value) {
          eachItem.isSelected = !eachItem.isSelected;
        }
        if (!eachItem.isSelected) {
          setIsAllSelected(false);
        } else selectedItems.push(eachItem.value);
        array.push(eachItem);
      });
      setListOptions(array);
      setSelectedValues(selectedItems);
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
    setSelectedValues(['All']);
  };

  const submitSelectedOptions = () => {
    let array = [] as any;
    setIsSelectLayoutOpen(false);
    console.log('selectedValues', selectedValues);
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
          <Stack className="dropdown-option-container">
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
                      style={
                        each?.value === 'All'
                          ? { marginLeft: '0px' }
                          : { marginLeft: '20px' }
                      }
                      color="secondary"
                      className="each-option"
                      checked={each.isSelected}
                      onChange={(event) => checkboxHandleChange(each, event)}
                    />
                  }
                />
              </Grid>
            ))}
          </Stack>

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
