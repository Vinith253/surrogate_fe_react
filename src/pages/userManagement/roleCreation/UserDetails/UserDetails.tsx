import { dataList } from '../../../../interface/Types';
import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import RoleCreationTab from '../roleCreationTab';
import '../style.scss';
import { AuthorisationLevel } from '../screens/AuthorisationLevel';

export const UserDetails = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Product Management',
      component: <RoleCreationTab />,
    },
    { id: '2', data: 'User Management', component: <AuthorisationLevel /> },
    { id: '3', data: 'LMS', component: <RoleCreationTab /> },
    { id: '4', data: 'Risk Management', component: <RoleCreationTab /> },
  ];

  return (
    <div className="role-creation-dashboard">
      <div className="role-creation-main-container">
        <TabBar data={TabListData} />
      </div>
    </div>
  );
};
