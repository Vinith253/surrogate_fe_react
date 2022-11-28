import {
  Box,
  Divider,
  Typography,
  InputBase,
  ToggleButtonGroup,
  ToggleButton,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import './userDetail.scss';
import SearchIcon from '@mui/icons-material/Search';
import UserDetailsTable from './UserDetailsTable';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { authorisation_user_data } from '../screens/AuthorisationLevel/authorisation.const';
function ProductManagement() {
  const [alignment, setAlignment] = useState('org');
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };

  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: ' rgb(240, 240, 240)',
    border: ' rgb(240, 240, 240) 1px ',
    color: 'black',

    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1976d2',
    },
  }));

  //  let filterData= authorisation_user_data.filter((item))
  const column = [
    { title: '#', dataIndex: 'id', key: 'id', sortColumn: false },
    {
      title: 'Initiater',
      dataIndex: 'initiaterName',
      key: 'initiaterName',
      sortColumn: false,
      render: () => {
        return <div>Hello</div>;
      },
    },
    {
      title: 'Reviewer',
      dataIndex: 'reviewerName',
      key: 'reviewerName',
      sortColumn: false,
    },
    {
      title: 'Approver',
      dataIndex: 'approverName',
      key: 'approverName',
      sortColumn: false,
    },
  ];

  const data = [
    {
      id: 1,
      initiaterName: 'Parithi',
      reviewerName: 'Ashwin',
      approverName: ['Ganesh', 'Ganesh'],
    },
    {
      id: 2,
      initiaterName: 'Maha',
      reviewerName: 'Vivek ',
      approverName: ['Ganesh', 'Ganesh'],
    },
    {
      id: 3,
      initiaterName: 'Parithi',
      reviewerName: 'Ashwin',
      approverName: ['Ganesh', 'Ganesh'],
    },
    {
      id: 4,
      initiaterName: 'Maha',
      reviewerName: 'Vivek',
      approverName: ['Ganesh', 'Ganesh'],
    },
    {
      id: 5,
      initiaterName: 'Parithi',
      reviewerName: 'Ashwin',
      approverName: ['Ganesh', 'Ganesh'],
    },
    {
      id: 6,
      initiaterName: 'Maha',
      reviewerName: 'Ganesh M',
      approverName: ['Ganesh', 'Ganesh'],
    },
  ];
  const [columnItems, setColumnItems] = useState(column);
  const [dataItems, setDataItems] = useState(data);

  let filterdata = authorisation_user_data.filter(
    (item) => item.module_name === 'Product Management'
  );
  console.log('filterdata', filterdata);
  return (
    <Box className="user-details-container ">
      <Box>
        <Box
          sx={{
            paddingX: 4,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingY: 1,
          }}
        ></Box>
      </Box>

      <Box className="search-container">
        <Box className="search-box">
          <SearchIcon className="search-icon" />
          <InputBase placeholder="Search by name,and emp ID" fullWidth={true} />
        </Box>
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{ padding: '5px !important', height: '45px' }}
          >
            <ColorButton value="org" className="filter-btn">
              Org.Structure
            </ColorButton>
            ;
            <ColorButton value="branch" className="filter-btn">
              Branch Details
            </ColorButton>
            <ColorButton value="role" className="filter-btn">
              Role Creation
            </ColorButton>
            <ColorButton value="user" className="filter-btn">
              User Creation
            </ColorButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <UserDetailsTable
        column={columnItems}
        data={dataItems}
        filterdata={filterdata}
      />
    </Box>
  );
}

export default ProductManagement;
