import {
  Box,
  InputBase,
  ToggleButtonGroup,
  ToggleButton,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import './userDetail.scss';
import SearchIcon from '@mui/icons-material/Search';
import UserDetailsTable from './UserDetailsTable';
import { authorisation_user_data } from '../screens/AuthorisationLevel/authorisation.const';
function UserManagement() {
  const [alignment, setAlignment] = useState('Org.Structure');
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

  const column = [
    { title: '#', dataIndex: 'id', key: 'id', sortColumn: false },
    {
      title: 'Initiater',
      dataIndex: 'initiaterName',
      key: 'initiaterName',
      sortColumn: false,
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

  const [columnItems, setColumnItems] = useState(column);

  let filterdata = authorisation_user_data.filter(
    (item) => item.module_name === 'User Management'
  );

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
            {filterdata.map((item) => {
              return item.sub_module.map((data) => {
                return (
                  <ColorButton
                    value={data.sub_module_name}
                    className="filter-btn"
                  >
                    {data.sub_module_name}
                  </ColorButton>
                );
              });
            })}
          </ToggleButtonGroup>
        </Box>
      </Box>
      <UserDetailsTable column={columnItems} filterdata={filterdata} />
    </Box>
  );
}

export default UserManagement;
