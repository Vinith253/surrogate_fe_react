import './style.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function CurrentDayFilter() {
  return (
    <div className="filters-styles">
      <div className="state-filter">
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
      </div>
    </div>
  );
}

export default CurrentDayFilter;
