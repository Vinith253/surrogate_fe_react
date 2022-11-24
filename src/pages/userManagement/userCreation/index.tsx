import { useState } from 'react';
import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import UserCreationTab from './userCreationTab';
import { Typography, Stack, Box, Grid } from '@mui/material';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import { UserCreationFilterDropdown } from './userCreation.const';
import DownloadIcon from '../../../assets/icons/download.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import './style.scss';

export const UserCreation = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const TabListData: dataList = [
    {
      id: '1',
      data: 'User Creation',
      component: <UserCreationTab />,
    },
    { id: '2', data: 'History Log', component: <UserCreationTab /> },
  ];

  return (
    <div className="user-creation-main-container">
      <TabBar data={TabListData} />
      <Stack className="container">
        <Stack>
          <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
            User List
          </Typography>
          <Stack className="underline"></Stack>
        </Stack>

        <Grid container spacing={2} className="filters-container">
          {UserCreationFilterDropdown?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography className="dropdown-label">
                  {eachItem?.label}
                </Typography>
                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
        </Grid>
        <Box className="button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>
      {isFiltered ? (
        <Stack className="container">
          <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
            Branch Details
            <Typography className="icons-container">
              <img src={DownloadIcon} alt="" className="icons" />
              <img src={MailIcon} alt="" className="icons" />
            </Typography>
          </Typography>
          <Stack className="underline"> </Stack>
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
    </div>
  );
};
