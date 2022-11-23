import { dataList } from '../../../../interface/Types';
import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import UserCreationTab from '../userCreationTab';
import './../style.scss';

export const UserCreation = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'User Creation',
      component: <UserCreationTab />,
    },
    { id: '2', data: 'History Log', component: <UserCreationTab /> },
  ];

  return (
    <div className="user-creation-main-container">
      <TabBar data={TabListData} />
    </div>
  );
};
