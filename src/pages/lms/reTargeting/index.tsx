import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../interface/Types';
import { ReTargetingHistory } from './screens/historyScreen/reTargetingHistory';
import ReTargeting from './screens/reTargetingScreen/reTargeting';

function Retargeting() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Re-Targeting',
      component: <ReTargeting />,
      isDisabled: false,
    },

    {
      id: '2',
      data: 'Re-Targeting History',
      component: <ReTargetingHistory />,
      isDisabled: false,
    },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default Retargeting;
