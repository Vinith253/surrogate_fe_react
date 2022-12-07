import React, { useState } from 'react';
import '../../../style/Style.scss';
import { Box, Button, Popover, Stack } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import { ReactComponent as DownArrow } from '../../../assets/icons/downArrow.svg';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

type props = {
  day_filter_label?: Array<any>;
  dayFilterValue?: string;
};

function DateTimePopOver({ day_filter_label, dayFilterValue }: props) {
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
        {dayFilterValue}
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
        <Stack sx={{ width: '280px' }}>
          {day_filter_label && (
            <Stack>
              <FormGroup>
                <Grid>
                  {day_filter_label?.map((item: any, index) => {
                    return (
                      <Grid item key={item.id}>
                        {' '}
                        {item.label !== 'Custom Period' && (
                          <Button
                            onClick={() => {
                              item.onclick();
                              handleClose();
                            }}
                            sx={{
                              fontSize: '0.9vw',
                              fontWeight: '600',
                              textTransform: 'none',
                              width: '100%',
                              justifyContent: 'flex-start',
                              paddingTop: '16px',
                              paddingBottom: '16px',
                              paddingLeft: '12px',
                            }}
                          >
                            {item.label}
                          </Button>
                        )}
                        {item.label === 'Custom Period' && (
                          <Button
                            onClick={() => {
                              item.onclick();
                              handleClose();
                            }}
                            sx={{
                              fontSize: '0.9vw',
                              fontWeight: '600',
                              textTransform: 'none',
                              width: '100%',
                              justifyContent: 'flex-start',
                              paddingTop: '16px',
                              paddingBottom: '16px',
                              paddingLeft: '12px',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Box>{item.label}</Box>
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <CalendarTodayOutlinedIcon />
                              </Box>
                            </Box>
                          </Button>
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              </FormGroup>
            </Stack>
          )}
        </Stack>
      </Popover>
    </Stack>
  );
}

export default DateTimePopOver;
