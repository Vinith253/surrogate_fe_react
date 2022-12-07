import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import DSAReportList from './dsaReportList';
import BankReportList from './bankReportList';
import './style.scss';

function PerformanceReport() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'DSA',
      component: <DSAReportList />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'Bank',
      component: <BankReportList />,
      isDisabled: false,
    },
  ];

  return (
    <div className="performance-report-main-container">
      <TabBar data={TabListData} />
    </div>
  );
}

export default PerformanceReport;
