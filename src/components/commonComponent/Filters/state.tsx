import './style.scss';
import MenuItem from '@mui/material/MenuItem';
import TypoText from '../../../components/commonComponent/CustomText/Textfield';
import { Select, Box, Typography, Grid } from '@mui/material';

function CurrentDayFilter() {
  return (
    <div className="filters-styles">
      <div className="state-filter">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TypoText color="grey" title="Card Mode" />
            <Typography>General Basic</Typography>
            <Select
              value={1}
              //   onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export default CurrentDayFilter;
