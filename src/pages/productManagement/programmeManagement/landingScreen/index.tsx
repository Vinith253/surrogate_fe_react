import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../../interface/Types';
import { ReviewerLog } from '../screens/ReviewerLog';
import { ProgramManagementScreen } from '../screens/programMmgt';
import { ProgrammeHistoryLog } from '../screens/ProgrammeHistoryLog';

function ProgramManagement() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Programme Management',
      component: <ProgramManagementScreen />,
      isDisabled: false,
    },

    {
      id: '2',
      data: 'History Log',
      component: <ProgrammeHistoryLog />,
      isDisabled: false,
    },
    {
      id: '3',
      data: 'Reviewer Log',
      component: <ReviewerLog />,
      isDisabled: false,
    },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default ProgramManagement;
