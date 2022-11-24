import { dataList } from '../../../../interface/Types';
import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import RoleCreationTab from '../roleCreationTab';
import '../style.scss';

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
      component: <RoleCreationTab />,
      isDisabled: false,
    },
    {
      id: '3',
      data: 'History Log',
      component: <RoleCreationTab />,
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
