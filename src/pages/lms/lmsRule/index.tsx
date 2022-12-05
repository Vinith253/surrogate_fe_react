import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import LMSList from './lmsList';
import { Stack } from '@mui/material';
import './style.scss';
import { LMSHistoryLog } from './LMS-HistoryLog/LMSHistoryLog';

function LMSRule() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'LMS Rule',
      component: <LMSList />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'History Log',
      component: <LMSHistoryLog />,
      isDisabled: false,
    },
  ];

  return (
    <Stack className="lms-rule-main-container">
      <TabBar data={TabListData} />
    </Stack>
  );
}

export default LMSRule;
