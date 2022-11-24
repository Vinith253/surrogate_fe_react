import React, { useState } from 'react';
import '../../../style/Style.scss';
import {
  Box,
  Button,
  Dialog,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { colors } from '../../../style/Color';

type props = {
  openSuccess?: any;
  handleClose: any;
  title?: String;
  btn?: string;
  handleCloseSuccess?: any
  data: Array<any>
};

function DuplicateRoleModal({ openSuccess, handleClose, btn, handleCloseSuccess, data }: props) {
  const [value, setValue] = useState('');
  return (
    <Stack className="App">
      <Dialog
        open={openSuccess}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Stack
          sx={{
            borderBottom: `1px solid #F3F3F3`,
            marginBottom: '16px',
            mx: '24px',
          }}
        >
          <Grid sx={{ width: '600px' }}>
            <Box
              sx={{
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{ fontSize: '16px', color: '#656769', my: '26px' }}
              >
                Duplicate Role
              </Typography>
              <Button onClick={handleClose}>
                <Typography
                  sx={{ fontSize: '14px', color: '#0662B7', mx: '40px', textTransform:'none' }}
                >
                  Close
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Stack>
        <Stack
          sx={{
            mx: '24px',
            marginTop:'20px'
          }}
        >
          <Typography sx={{fontSize:'12px'}}>Select the Existing Role</Typography>
        <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        // multiple
        // value={personName}
        // onChange={handleChange}
        name="answer"
        renderValue={() => {
          return <em>{value}</em>;
        }}
      >
          {data.map((item:any) => (
            <MenuItem
              value={item.name}
              onClick={()=> setValue(item.name)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
        </Stack>
        {btn && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
              pb={0}
              px={4}
              py={2}
            >
              <Button
                variant="contained"
                onClick={()=> handleCloseSuccess(value)}
                style={{
                  width: '30em',
                  height: '3em',
                  fontSize: '12px',
                  backgroundColor: value.length > 0 ? `${colors.Modalblue}` : `${colors.lightGrey}`,
                  textTransform:'none'
                }}
                disabled={value.length > 0 ? false : true}
              >
                {btn}
              </Button>
            </Box>
          )}
      </Dialog>
    </Stack>
  );
}

export default DuplicateRoleModal;
