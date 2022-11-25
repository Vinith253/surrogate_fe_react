import './dashboard.scss';
import DsaPage from './dsaPage/dsa';
import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';

function Dashboard() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'DSA',
      component: <DsaPage />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'Fintech Partners',
      component: <DsaPage />,
      isDisabled: false,
    },
    {
      id: '3',
      data: 'Bank Divisions',
      component: <DsaPage />,
      isDisabled: false,
    },
  ];

  return (
    <div className="sales-dashboard">
      <div className="sales-main-container">
        <TabBar data={TabListData} />
      </div>
    </div>
  );
}

export default Dashboard;
