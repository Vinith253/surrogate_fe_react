import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import UsersList from './usersList';
import './style.scss';
import { HistoryLog } from '../roleCreation/screens/HistoryLogScreen';

function UserCreation() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'User Creation',
      component: <UsersList />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'History Log',
      component: <HistoryLog comingFrom={'userCreation'} />,
      isDisabled: false,
    },
  ];

  return (
    <div className="user-creation-main-container">
      <TabBar data={TabListData} />
    </div>
  );
}

export default UserCreation;
