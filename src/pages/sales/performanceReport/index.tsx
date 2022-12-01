import { dataList } from '../../../interface/Types';
// import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import './style.scss';

function PerformanceReport() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'User Creation',
      component: <div>DSA</div>,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'History Log',
      component: <div>Bank</div>,
      isDisabled: true,
    },
  ];

  return (
    <div className="performance-report-main-container">
      Performance Report
      {/* <TabBar data={TabListData} /> */}
    </div>
  );
}

export default PerformanceReport;
