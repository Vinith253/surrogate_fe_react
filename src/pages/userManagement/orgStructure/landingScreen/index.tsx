import React from 'react';
import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../../interface/Types';
// import HistoryLog from '../screens/historyLog/historyLog';
import HistoryLog from '../../../productManagement/programmeManagement/screens/HistoryLog';

import { OrganisationDetails } from '../screens/organisationDetails/organisationDetails';

export const OrgStructure = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Organisation Details',
      component: <OrganisationDetails />,
    },

    { id: '2', data: 'History Log', component: <HistoryLog /> },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
};
