import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../../interface/Types';
import { ReviewerLog } from '../screens/ReviewerLog';
import { ProgramManagementScreen } from '../screens/programMmgt';
import HistoryLog from '../screens/HistoryLog';

function ProgramManagement() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Programme Management',
      component: <ProgramManagementScreen />,
    },
    // { id: '2', data: 'Reviewer Log', component: <ReviewerLog /> },
    { id: '2', data: 'History Log', component: <HistoryLog /> },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default ProgramManagement;
