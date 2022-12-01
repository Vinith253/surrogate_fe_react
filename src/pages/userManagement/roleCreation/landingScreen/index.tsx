import { dataList } from '../../../../interface/Types';
import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import RoleCreationTab from '../roleCreationTab';
import '../style.scss';
import { AuthorisationLevel } from '../screens/AuthorisationLevel';
import { HistoryLog } from '../screens/HistoryLogScreen';

export const RoleCreation = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Role Creation',
      component: <RoleCreationTab />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'Authorization Level',
      component: <AuthorisationLevel />,
      isDisabled: false,
    },
    {
      id: '3',
      data: 'History Log',
      component: <HistoryLog comingfrom={'roleCreation'} />,
      isDisabled: false,
    },
  ];

  return (
    <div className="role-creation-dashboard">
      <div className="role-creation-main-container">
        <TabBar data={TabListData} />
      </div>
    </div>
  );
};
