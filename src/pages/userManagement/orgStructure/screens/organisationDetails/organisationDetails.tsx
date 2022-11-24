import {
  Box,
  Button,
  IconButton,
  Typography,
  ToggleButton,
  Stack,
  InputBase,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import React, { useState } from 'react';
import { colors } from '../../../../../style/Color';
import './style.scss';
import plus from '../../../../../assets/icons/plusIcon.svg';
import Info_Icon from '../../../../../assets/images/info_icon.svg';
import CheckboxSelectDropdown from '../../../../../components/commonComponent/CheckboxSelectDropdown';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import download_icon from '../../../../../assets/icons/download_icon.svg';
import mail_icon from '../../../../../assets/icons/mail_icon.svg';
import active_icon from '../../../../../assets/icons/active.svg';
import DeActive_icon from '../../../../../assets/icons/DeActive.svg';
import SearchIcon from '@mui/icons-material/Search';
import StackButton from '../../../../../components/commonComponent/StackButton/stackButton';
import { Onboarding } from '../Onboarding/onboarding';
export const organisationFilterDropdown: salesReportFilterInterface[] = [
  {
    label: 'Org Type',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Org Status',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Surrogate',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
];

export interface salesReportFilterInterface {
  label?: string;
  option?: Array<object>;
}

export const stackButtonData = [
  {
    title: 'All',
  },
  {
    title: 'Activate',
  },
  {
    title: 'Deactivated',
  },
  {
    title: 'Saved',
  },
];

export const OrganisationDetails = () => {
  const navigate = useNavigate();

  const [alignment, setAlignment] = useState('All');
  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: ' rgb(240, 240, 240)',
    border: ' rgb(240, 240, 240) 1px ',
    color: 'black',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1976d2',
    },
  }));
  // const [selectedStatus, setSeletedStatus] = React.useState(data[0]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };

  const moveto=()=>{
    navigate("/userManagement/orgStructure/screens/Onboarding/onboarding")
  }



  return (
    <Box className="organisationContainer">
      <Box className="organisationHeader">
        <Box>
          <Typography className="organizationTitle">
            Organisation Details
          </Typography>
          <Typography className="organizationPara">
            Manage all organisations in the system from here.
          </Typography>
        </Box>
        <Box>
          <Button onClick={moveto} variant="contained" className="organizationBtn">
            <IconButton className="icon">
              <img src={plus} alt="resumeIcon" />
            </IconButton>
            Add Organisation
          </Button>
        </Box>
      </Box>

      <Box className="organisationListHeader">
        <Box className="organisationList">
          <Box
            className="organisationContent"
            sx={{
              borderBottom: `2px solid ${colors.lightGrey}`,
              paddingBottom: '12px',
            }}
          >
            <Typography className="organizationTitle">
              Organisation List
            </Typography>
            <img className="Info-Icon" src={Info_Icon} alt="" />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '400',
              }}
              color="textSecondary"
            >
              Filter by org type/state/status/surrogate from here.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className="organisation-checkbox-select-dropdown">
            {organisationFilterDropdown?.map((eachItem: any, index: number) => {
              return (
                <Box key={index} className="select-dropdown">
                  <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                    {eachItem?.label}
                  </Typography>
                  <CheckboxSelectDropdown options={eachItem?.option} />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="organisationResetBtn">
          <BtnOutlined title="Reset" />
          <BtnContained title="Search" />
        </Box>
      </Box>

      <Box className="organisationTableContainer">
        <Stack
          className="organisationHeaderContainer"
          sx={{
            borderBottom: `2px solid ${colors.lightGrey}`,
            paddingBottom: '12px',
          }}
        >
          <Stack className="organisationHeaderTable">
            <Stack>
              <Typography>Organisation Details</Typography>
            </Stack>
            <Stack>
              <Box>
                <Button>
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

        <Stack className="tableNavbar">
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              width: '30%',
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                padding: '0px 10px',
                fontSize: '14px',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                textTransform: 'capitalize',
                letterSpacing: '0.0025em',
              }}
            >
              <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                <img src={active_icon} alt="resumeIcon" />
              </IconButton>
              Active Org
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                padding: '0px 10px',
                fontSize: '14px',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                textTransform: 'capitalize',
                letterSpacing: '0.0025em',
                marginLeft: '15px',
              }}
            >
              <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                <img src={DeActive_icon} alt="resumeIcon" />
              </IconButton>
              Deactivate Org
            </Button>
          </Stack>
          <Box className="organisation-search-container">
            <Box className="organisation-search-box">
              <SearchIcon className="organisation-search-icon" />
              <InputBase placeholder="Search" />
            </Box>
            <Box>
              <StackButton data={stackButtonData} />
            </Box>
            {/* <Box>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{
                  height: '45px',
                  // padding: '0px 8px',
                }}
              >
                <ColorButton
                  value="All"
                  sx={{
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    padding: '0px 8px',
                  }}
                >
                  All
                </ColorButton>
                <ColorButton
                  value="Activate"
                  sx={{
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    padding: '0px 8px',
                  }}
                >
                  Activate
                </ColorButton>
                <ColorButton
                  value="Deactivated"
                  sx={{
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    padding: '0px 8px',
                  }}
                >
                  Deactivated
                </ColorButton>
                <ColorButton
                  value="Saved"
                  sx={{
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    padding: '0px 8px',
                  }}
                >
                  Saved
                </ColorButton>
              </ToggleButtonGroup>
            </Box> */}
          </Box>
        </Stack>
        {/* <TableComp
          // viewPath="/sales/salesReportDetails"
          rows={reviewerLogDashboardList}
          statusRowsHeading={reviewrStatusRowHeading}
          listRowHeading={reviewerListRowHeading}
          flag="orgStructure"
        /> */}
      </Box>

      {/* <Stack className="tableOrganisation">fr</Stack> */}
    </Box>
  );
};
