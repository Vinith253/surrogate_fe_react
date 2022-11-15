import React, { useState } from 'react';
import './cardCateloge.scss';
// import useStyles from "./cardStyle";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TabContext } from '@mui/lab';
import { TabList } from '@mui/lab';
import { TabPanel } from '@mui/lab';
import TypographyHead from '../../../../components/commonComponent/CustomText/Head';
import { useNavigate } from 'react-router-dom';
import {
  MenuItem,
  TextField,
  Typography,
  Box,
  Tab,
  Stack,
  Button,
  Icon,
  IconButton,
  Divider,
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Menu,
} from '@mui/material';
import Surrogate_icon from '../../../../assets/icons/surrogates_selection_icon.svg';
import Pause_icon from '../../../../assets/icons/pause_card_icon.svg';
import Edit_icon from '../../../../assets/icons/edit_scheduled_pause_icon.svg';
import Resume_icon from '../../../../assets/icons/resume_card_icon.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Card Name', width: 130 },
  { field: 'productID', headerName: 'Product ID', width: 130 },
  { field: 'businessID', headerName: 'Business ID', width: 130 },
  { field: 'cardMode', headerName: 'Card Mode', width: 130 },
  { field: 'cardCategory', headerName: 'Card Category', width: 130 },
  { field: 'cardStatus', headerName: 'Card Status', width: 120 },
  { field: 'more', headerName: 'More', type: 'number', width: 20 },
];

const rows = [
  {
    id: 1,
    productID: 'Snow',
    firstName: 'Jon',
    age: 35,
    businessID: 123456789,
    cardMode: 'Business',
    cardCategory: 'Basic',
    cardStatus: 'Active',
  },
  {
    id: 2,
    productID: 'Snow',
    firstName: 'Jon',
    age: 35,
    businessID: 123456789,
    cardMode: 'Business',
    cardCategory: 'Basic',
    cardStatus: 'Active',
  },
  {
    id: 3,
    productID: 'Snow',
    firstName: 'Jon',
    age: 35,
    businessID: 123456789,
    cardMode: 'Business',
    cardCategory: 'Basic',
    cardStatus: 'Active',
  },
  {
    id: 4,
    productID: 'Snow',
    firstName: 'Jon',
    age: 35,
    businessID: 123456789,
    cardMode: 'Business',
    cardCategory: 'Basic',
    cardStatus: 'Active',
  },
];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 0, 2),
  },
}));

export const CardCatalogue = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);
  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  const singleCardOpen = () => {
    navigate('/productManagement/cardCatalogue/singleupload');
  };
  const bulkCardOpen = () => {
    navigate('/productManagement/cardCatalogue/bulkupload');
  };
  const handleAdd = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack>
      <Stack>
        <Box
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 30px 0 30px',
          }}
        >
          <Box>
            <Typography
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
              variant="body1"
              color="textPrimary"
            >
              Card Catelogue
            </Typography>
            <TypographyInfo title="From here you can manage all your card's information" />
            {/* <Typography sx={{ margin: 0 }} color="textSecondary" paragraph>
                From here you can manage all your card's information
              </Typography> */}
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ExpandMoreIcon />}
              aria-controls={openCardMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openCardMenu ? 'true' : undefined}
              onClick={handleCardMenuClick}
              id="basic-button"
            >
              + Add New Card{' '}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openCardMenu}
              onClose={handleCardMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={singleCardOpen}>Single card upload</MenuItem>
              <MenuItem onClick={bulkCardOpen}>Bulk card Upload</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: 'white', marginTop: 3, paddingX: '30px' }}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              backgroundColor: 'white',
              paddingTop: 2,
            }}
          >
            <TypographyHead title="Card List" />
            <InfoIcon />
            <TypographyInfo
              title="From here, you filter the card by its mode, status, category and
                surrogate"
            />
          </Box>
          <Divider />

          <Box
            sx={{
              minWidth: 500,
              marginTop: 2,
              display: 'flex',
              gap: '3%',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            }}
          >
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Card Mode" />
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                //   labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleAdd}
                sx={{ height: '30px', textAlign: 'left' }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Card Category" />
              <Select sx={{ height: '30px', textAlign: 'left' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Card Status" />

              <Select sx={{ height: '30px', textAlign: 'left' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Choose Surrogate" />

              <Select sx={{ height: '30px', textAlign: 'left' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
              paddingTop: 3,
              backgroundColor: 'white',
            }}
          >
            <Button
              sx={{ color: 'black' }}
              variant="outlined"
              color="secondary"
            >
              Reset
            </Button>
            <Button color="secondary" variant="contained">
              Search
            </Button>
          </Box>
          <Divider sx={{ padding: 1 }} />
        </Box>
        <Box>
          <Box
            sx={{
              paddingX: '30px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack direction="row" spacing={2} sx={{ margin: '30px 0px' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                  <img
                    src={Resume_icon}
                    alt="resumeIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                Resume card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                  <img
                    src={Pause_icon}
                    alt="pauseIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                pause card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                  <img
                    src={Edit_icon}
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                edit card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                  <img
                    src={Surrogate_icon}
                    alt="surrogateIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                surrogate card selection
              </Button>
            </Stack>
            <Stack>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid grey',
                  borderRadius: 1,
                  paddingY: '5px',
                }}
              >
                <StyledInputBase placeholder="Search" />
                <SearchIcon sx={{ marginRight: '15px', color: 'grey' }} />
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              height: 400,
              // width: "100%",
              backgroundColor: '#ffffff',
              paddingX: 4,
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
