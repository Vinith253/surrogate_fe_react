import React, { useState } from 'react';
import '../../../style/Style.scss';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { ReactComponent as MoreFilter } from '../../../assets/icons/moreFilter.svg';
import { ReactComponent as BlueCross } from '../../../assets/icons/blueCross.svg';
import { colors } from '../../../style/Color';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';

type props = {
  openSuccess?: any;
  handleCloseSuccess?: Function;
  title?: String;
  product_label?: Array<any>;
  submit?: string;
  close?: string;
  handleSelectedItem?: (e: any) => void;
  showSearch?: boolean;
  day_filter_label?: Array<any>;
  dayFilterValue?: string;
  policies_label?: Array<any>;
  surrogates_label?: Array<any>;
  state_label: Array<object>;
  zonal_label: Array<object>;
};

function MoreFilterModal({
  openSuccess,
  handleCloseSuccess,
  product_label,
  submit,
  close,
  handleSelectedItem,
  showSearch,
  day_filter_label,
  dayFilterValue,
  policies_label,
  surrogates_label,
  state_label,
  zonal_label
}: props) {
  const [categories, setCategories] = useState(product_label);
  const [value, setValue] = useState('');
  var count = 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (value.length >= 3) {
      const filtered: React.SetStateAction<any[] | undefined> = [];
      categories?.map((str) => {
        if (str.label.toLowerCase().includes(value)) {
          filtered.push(str);
        }
      });

      setCategories(filtered);
    } else {
      setCategories(product_label);
    }
  };

  const handleCheckboxClick = (index: number, id: number, checked: boolean) => {
    let updatedList = categories?.map((item) => {
      if (item.id === id) {
        return { ...item, defaultChecked: !item.defaultChecked }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item
    });

    setCategories(updatedList);
  };

  const handleResetButton = () => {
    let updatedList = categories?.map((item) => {
      return { ...item, defaultChecked: false };
    });

    setCategories(updatedList);
  };

  const error = categories?.filter((v) => {
    if (v.defaultChecked === true) {
      count++;
    }
  });
  const e = count >= 7;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-modal' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack className="App">
      <Button
        endIcon={<MoreFilter />}
        sx={{
          fontSize: '0.9vw',
          marginRight: '20px',
          fontWeight: '600',
          color: '#0662B7',
          textTransform: 'none',
        }}
        onClick={handleClick}
      >
        More Filters
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Stack
          pb={3}
          // className={`${
          //   accessLibraryModaBtn ? 'modal_container' : 'modal_container1'
          // }`}
          // px={true ? 3 : 0}
        >
          {/* {product_label && ( */}
          <Stack
            sx={{
              borderBottom: `1px solid #36363624`,
              marginBottom: '16px',
              // paddingLeft: '16px',
            }}
          >
            <FormGroup
              sx={{
                overflow: 'hidden',
                overflowY: 'scroll',
              }}
            >
              <Grid sx={{ width: '450px' }}>
                <Box
                  sx={{
                    backgroundColor: '#F2F9FF',
                    height: '40px',
                    width: '450px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Filters</Typography>
                  <Button onClick={handleClose} endIcon={<BlueCross />} />
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Period</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <InputLabel id="demo-multiple-name-label">
                      {dayFilterValue}
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      size="small"
                      // value={dayFilterValue}
                      // onChange={handleChange}
                      input={<OutlinedInput label={dayFilterValue} />}
                      // inputProps={{ 'aria-label': 'Without label' }}
                    >
                      {day_filter_label?.map((value) => (
                        <MenuItem
                          key={value.id}
                          // value={value.label}
                          onClick={value.onclick}
                        >
                          {value.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Policy</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <InputLabel id="demo-multiple-name-label">
                      All Policies
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      size="small"
                      // value={personName}
                      // onChange={handleChange}
                      input={<OutlinedInput label="All Policies" />}
                    >
                      <Stack px={2}>
                        <FormGroup>
                          {policies_label?.map((item: any) => (
                            <Grid>
                              <FormControlLabel
                                label={
                                  <Typography sx={{ fontSize: '14px' }}>
                                    {item.label}
                                  </Typography>
                                }
                                control={
                                  <Checkbox
                                    //   onChange={(e) =>
                                    //     handleCheckboxClick(index,item.id, e.target.checked)
                                    //   }
                                    //   checked={item.defaultChecked === true}
                                    color="secondary"
                                  />
                                }
                              />
                              {item.data?.map((item: any, index: any) => {
                                return (
                                  <Grid item key={item.id}>
                                    {' '}
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        ml: 3,
                                      }}
                                    >
                                      <FormControlLabel
                                        label={
                                          <Typography sx={{ fontSize: '14px' }}>
                                            {item.label}
                                          </Typography>
                                        }
                                        control={
                                          <Checkbox
                                            //   onChange={(e) =>
                                            //     handleCheckboxClick(index,item.id, e.target.checked)
                                            //   }
                                            //   checked={item.defaultChecked === true}
                                            color="secondary"
                                          />
                                        }
                                      />
                                    </Box>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          ))}
                        </FormGroup>
                      </Stack>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Surrogates</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <InputLabel id="demo-multiple-name-label">
                      All Surrogates
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      size="small"
                      // value={personName}
                      // onChange={handleChange}
                      input={<OutlinedInput label="All Surrogates" />}
                    >
                      {surrogates_label && (
                        <Stack px={2}>
                          <FormGroup>
                            <Grid>
                              <FormControlLabel
                                label={
                                  <Typography sx={{ fontSize: '14px' }}>
                                    All Surrogates
                                  </Typography>
                                }
                                control={<Checkbox color="secondary" />}
                              />
                              {surrogates_label?.map((item: any, index) => {
                                return (
                                  <Grid item key={item.id}>
                                    {' '}
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        ml: 3,
                                      }}
                                    >
                                      <FormControlLabel
                                        label={
                                          <Typography sx={{ fontSize: '14px' }}>
                                            {item.label}
                                          </Typography>
                                        }
                                        control={<Checkbox color="secondary" />}
                                      />
                                    </Box>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </FormGroup>
                        </Stack>
                      )}
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#F2F9FF',
                    height: '40px',
                    width: '450px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>
                    More Filters
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>State</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <SelectDropdown options={state_label} flag='morefilter' />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Zonal</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <SelectDropdown options={zonal_label} flag='morefilter'/>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>District</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <SelectDropdown options={zonal_label} flag='morefilter'/>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>DSA Name(s)</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <SelectDropdown options={zonal_label} flag='morefilter' />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>F. Partner Name(s)</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <SelectDropdown options={zonal_label} flag='morefilter'/>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    height: '70px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Branch Name(s)</Typography>
                  <FormControl sx={{ m: 1, width: 233 }}>
                    <SelectDropdown options={zonal_label} flag='morefilter'/>
                  </FormControl>
                </Box>
              </Grid>
            </FormGroup>
          </Stack>
          <Stack
            className="modal_buttons"
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '16px',
            }}
          >
            {submit && (
              <Button
                // onClick={handleResetButton}
                variant="outlined"
                sx={{
                  fontSize: '11px',
                  textTransform: 'capitalize',
                  border: `1px solid ${colors.Modalblue}`,
                  color: `${colors.Modalblue}`,
                  fontWeight: '600',
                }}
              >
                {close}
              </Button>
            )}
            {submit && (
              <Button
                variant="contained"
                sx={{
                  fontSize: '11px',
                  marginLeft: '16px',
                  textTransform: 'capitalize',
                  backgroundColor: `${colors.Modalblue}`,
                  fontWeight: '600',
                }}
                // onClick={() => handleCloseSuccess(categories)}
                // disabled={!e}
              >
                {submit}{' '}
              </Button>
            )}
          </Stack>
          {/* )} */}
        </Stack>
      </Dialog>
    </Stack>
  );
}

export default MoreFilterModal;
