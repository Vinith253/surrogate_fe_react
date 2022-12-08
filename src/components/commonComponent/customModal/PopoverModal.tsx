import React, { useState } from 'react';
import '../../../style/Style.scss';
import {
  Button,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { colors } from '../../../style/Color';
import { SearchOutlined } from '@mui/icons-material';

type props = {
  openSuccess?: any;
  handleCloseSuccess: Function;
  title?: String;
  product_label?: Array<any>;
  submit?: string;
  close?: string;
  handleSelectedItem?: (e: any) => void;
  anchorEl?: any;
  id?: any;
  showSearch?: boolean;
  columnNumber: number;
};

function CheckBoxModal({
  openSuccess,
  handleCloseSuccess,
  product_label,
  submit,
  close,
  handleSelectedItem,
  anchorEl,
  id,
  showSearch,
  columnNumber
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
  const e = count >= columnNumber;

  return (
    <Stack className="App">
      <Popover
        id={id}
        open={openSuccess}
        anchorEl={anchorEl}
        onClose={() => console.log('clicked')}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack py={2} sx={{ width: '280px' }}>
          {showSearch && (
            <TextField
              sx={{
                paddingLeft: '16px',
                paddingRight: '16px',
                input: { color: '#AFAEAF', fontSize: '14px', padding: '10px' },
              }}
              id="standard-bare"
              variant="outlined"
              placeholder="Search by..."
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          )}

          {product_label && (
            <Stack
              sx={{
                borderBottom: `1px solid #36363624`,
                marginBottom: '16px',
                paddingLeft: '16px',
                height: '260px',
              }}
            >
              <FormGroup
                sx={{
                  paddingTop: '10px',
                  overflow: 'hidden',
                  overflowY: 'scroll',
                }}
              >
                <Grid>
                  {categories?.map((item: any, index) => {
                    return (
                      <Grid item xs={6} sm={4} key={item.id}>
                        {' '}
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheckboxClick(
                                  index,
                                  item.id,
                                  e.target.checked
                                )
                              }
                              checked={item.defaultChecked === true}
                              color="secondary"
                            />
                          }
                          label={
                            <Typography sx={{ fontSize: '14px' }}>
                              {item.label}
                            </Typography>
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </FormGroup>
            </Stack>
          )}

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
                onClick={handleResetButton}
                variant="outlined"
                sx={{
                  fontSize: '11px',
                  textTransform: 'capitalize',
                  border: `1px solid ${colors.ModallightGrey}`,
                  color: '#363636',
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
                onClick={() => handleCloseSuccess(categories)}
                disabled={!e}
              >
                {submit}{' '}
              </Button>
            )}
          </Stack>
        </Stack>
      </Popover>
    </Stack>
  );
}

export default CheckBoxModal;
