import React, { useState } from 'react';
import '../../../../style/Style.scss';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import { ReactComponent as DownArrow } from '../../../../assets/icons/downArrow.svg';
import { SearchOutlined } from '@mui/icons-material';
import { colors } from '../../../../style/Color';

type props = {
  submit?: string;
  close?: string;
  showSearch?: boolean;
  surrogates_label?: Array<any>;
  displayText?: string;
};

function CheckBoxPopOver({
  surrogates_label,
  displayText,
  showSearch,
  submit,
  close,
}: props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack className="App">
      <Button
        endIcon={<DownArrow />}
        sx={{
          fontSize: '0.9vw',
          marginRight: '20px',
          fontWeight: '600',
          color: '#0662B7',
          textTransform: 'none',
        }}
        onClick={handleClick}
      >
        {displayText}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
              // onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          )}
          {surrogates_label && (
            <Stack
              px={2}
              sx={{
                borderBottom: `1px solid #36363624`,
                marginBottom: '16px',
              }}
            >
              <FormGroup>
                <Grid>
                  <FormControlLabel
                    label={
                      <Typography sx={{ fontSize: '14px' }}>
                        {displayText}
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
        </Stack>
      </Popover>
    </Stack>
  );
}

export default CheckBoxPopOver;
