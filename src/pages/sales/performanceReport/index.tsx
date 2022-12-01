import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import ReportList from '../performanceReport/reportsList';
import './style.scss';

function PerformanceReport() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'DSA',
      component: <ReportList />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'Bank',
      component: <div>Bank</div>,
      isDisabled: true,
    },
  ];

  return (
    <div className="performance-report-main-container">
      <TabBar data={TabListData} />
    </div>
  );
}

export default PerformanceReport;
