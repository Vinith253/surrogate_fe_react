import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../../interface/Types';
import { ReviewerLog } from '../screens/ReviewerLog';
import { ProgramManagementScreen } from '../screens/programMmgt';

function ProgramManagement() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Programme Management',
      component: <ProgramManagementScreen />,
    },
    { id: '2', data: 'Reviewer Log', component: <ReviewerLog /> },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default ProgramManagement;
