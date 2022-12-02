import React, { useState } from 'react';
import './style.scss';
import {
  Typography,
  Stack,
  Box,
  Grid,
  Button,
  Checkbox,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  InputLabel,
  Input,
} from '@mui/material';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../../../components/commonComponent/CheckboxSelectDropdown';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import ChooseCategoryToViewData from '../../../../../components/commonComponent/ChooseCategoryToViewData';
import download_icon from '../../../../../assets/icons/download_icon.svg';
import mail_icon from '../../../../../assets/icons/mail_icon.svg';
import filter_icon from '../../../../../assets/icons/filter.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableComp from '../../../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
  product_label,
  state_label,
} from '../../../../sales/dashboard/dashboard.const';
import { reTargetingText } from './reTargeting.const';
import { colors } from '../../../../../style/Color';
import MoreFilterModal from '../../../../../components/commonComponent/customModal/MoreFilterModal';
import ListLMSTable from '../../../../../components/commonComponent/listLmstable/listlmsTable';
import { useNavigate } from 'react-router-dom';

export const retargetingData = [
  {
    id: '1',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
  },
  {
    id: '2',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
  },
  {
    id: '3',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
  },
];

function ReTargeting() {
  const navigate = useNavigate();
  const [isFiltered, setIsFiltered] = useState(false);
  const [dayFilterValue, setDayFilter] = useState<string>('Current Day');
  const [value, setValue] = React.useState('10');

  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };
  const reTargetingDetailsNavigate = () => {
    navigate('/lms/retargeting/reTargetingDetails');
  };
  const day_filter_label = [
    {
      id: 1,
      label: 'Current Day',
      // onclick: () => {
      //   setDayFilter('Current Day');
      // },
    },
    {
      id: 2,
      label: 'Current Week',
      // onclick: () => {
      //   setDayFilter('Current Week');
      // },
    },
    {
      id: 3,
      label: 'Current Month',
      // onclick: () => {
      //   setDayFilter('Current Month');
      // },
    },
    {
      id: 4,
      label: 'Current Quarter',
      // onclick: () => {
      //   setDayFilter('Current Quarter');
      // },
    },
    {
      id: 5,
      label: 'Current Year',
      // onclick: () => {
      //   setDayFilter('Current Year');
      // },
    },
    {
      id: 6,
      label: 'Custom Period',
      // onclick: () => {
      //   setDayFilter('Custom Period');
      // },
    },
  ];

  const surrogates_label = [
    {
      id: 1,
      label: 'Payroll',
      // onclick: (() => {setDayFilter("Current Day");})
    },
    {
      id: 2,
      label: 'Card on Card',
      // onclick: (() => {setDayFilter("Current Week");})
    },
    {
      id: 3,
      label: 'CIBIL',
      // onclick: (() => {setDayFilter("Current Month");})
    },
    {
      id: 4,
      label: 'AQB',
      // onclick: (() => {setDayFilter("Current Quarter");})
    },
    {
      id: 5,
      label: 'RC',
      // onclick: (() => {setDayFilter("Current Year");})
    },
  ];
  const channels_label = [
    {
      id: 1,
      label: 'Bank',
    },
    {
      id: 2,
      label: 'DSA',
    },
    {
      id: 3,
      label: 'Fintech Partners',
    },
  ];
  const column1: any = [
    {
      title: '',
      dataIndex: 'id',
      key: 'checkBox',
      width: '70px',
      headerRender: () => {
        return <Checkbox />;
      },
      render: (_: string, row: any, index: number) => {
        return <Checkbox />;
      },
    },
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
      },
    },
    {
      title: 'Application #',
      dataIndex: 'application',
      key: 'application',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    { title: 'Mobile Number', dataIndex: 'mobileNumber', key: 'mobileNumber' },
    { title: 'CIBIL', dataIndex: 'cibil', key: 'cibil' },
    { title: 'Income', dataIndex: 'income', key: 'income' },
  ];
  const column2: any = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'more',
    },
  ];
  return (
    <Stack className="retargetingMainContainer">
      <Stack className="retargetingcontainer">
        <Grid container spacing={2} className="retargeting-filters-container">
          {reTargetingText?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography className="retargeting-dropdown-label">
                  {eachItem?.label}
                </Typography>

                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
        </Grid>

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '8px 0',
          }}
        >
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <Typography className="retargetingDropDownText">
                Period
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
                sx={{
                  '& legend': { display: 'none' },
                  '& fieldset': { top: 0 },
                }}
                style={{ height: 46 }}
              >
                <MenuItem value={10}>Current Day</MenuItem>
                <MenuItem value={20}>Current Week</MenuItem>
                <MenuItem value={30}>Current Month</MenuItem>
                <MenuItem value={40}>Current Quarter</MenuItem>
                <MenuItem value={50}>Current Year</MenuItem>
                <MenuItem value={60}>Custom Period</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Stack>
            <Stack
              sx={{
                width: '180px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginTop: '30px',
              }}
            >
              <Stack
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                <MoreFilterModal
                  product_label={product_label}
                  day_filter_label={day_filter_label}
                  dayFilterValue={dayFilterValue}
                  submit={'Apply'}
                  close={'Reset'}
                  policies_label={channels_label}
                  surrogates_label={surrogates_label}
                  state_label={state_label}
                  // zonal_label={zonal_label}
                  flag="reTargeting"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Box className="retargeting-button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>

      {isFiltered ? (
        <Stack sx={{ marginBottom: '30px' }}>
          <Stack
            className="retargetingOrgDetails"
            sx={{
              padding: '0 30px',
            }}
          >
            <Stack className="retargetingOrgDetailsHeaderTable">
              <Stack>
                <Typography>Organisation Details</Typography>
              </Stack>
              <Stack>
                <Box>
                  <Button onClick={reTargetingDetailsNavigate}>
                    <img
                      src={download_icon}
                      alt="download_icon"
                      width="70%"
                      height="70%"
                    />
                  </Button>
                  <Button>
                    <img
                      src={mail_icon}
                      alt="mail_icon"
                      width="70%"
                      height="70%"
                    />
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <ListLMSTable
            data={retargetingData}
            listColumn={column1}
            statusColumn={column2}
          />
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
    </Stack>
  );
}

export default ReTargeting;
