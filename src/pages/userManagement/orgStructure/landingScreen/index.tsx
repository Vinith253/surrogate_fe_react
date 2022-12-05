import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../../interface/Types';
import { OrgStrHistoryLog } from '../screens/historyLog/historyLog';
// import { OrgStrHistoryLog } from '../screens/historyLog/historyLog';

import { OrganisationDetails } from '../screens/organisationDetails/organisationDetails';

export const OrgStructure = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Organisation Details',
      component: <OrganisationDetails />,
      isDisabled: false,
    },

    {
      id: '2',
      data: 'History Log',
      component: <OrgStrHistoryLog />,
      isDisabled: false,
    },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
};
