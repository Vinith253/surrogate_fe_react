import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import { dataList, tabList } from '../../../interface/Types';
import { colors } from '../../../style/Color';
import '../customTab/customTabStyle.scss';

type props = {
  data?: dataList;
  activeTab?: string;
};

export const TabBar = ({ data, activeTab }: props) => {
  const [value, setValue] = useState(activeTab ?? '1');

  const handleChange = (event: React.SyntheticEvent, val: string) => {
    setValue(val);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList
            aria-label="lab API tabs example"
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            sx={{
              backgroundColor: colors.bgGrey,
              padding: '30px 30px 0  30px',
            }}
          >
            {data?.map((item: tabList, index: number) => {
              return (
                <Tab
                  className="tabBar"
                  key={index}
                  disabled={item?.isDisabled ?? false}
                  label={<span>{item.data}</span>}
                  value={item.id}
                ></Tab>
              );
            })}
          </TabList>
          {data?.map((item: tabList, index: number) => {
            return (
              <TabPanel
                key={index}
                value={item.id}
                sx={{ padding: '0px 0px 0 0px' }}
              >
                {item.component}
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
    </Box>
  );
};
