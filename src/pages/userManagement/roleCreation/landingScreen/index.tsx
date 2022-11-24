import { dataList } from "../../../../interface/Types";
import { TabBar } from "../../../../components/commonComponent/customTab/CustomTab";
import RoleCreationTab from "../roleCreationTab";
import '../style.scss';
import { AuthorisationLevel } from "../screens/AuthorisationLevel";

export const RoleCreation = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Role Creation',
      component:  <RoleCreationTab />,
    },
    { id: '2', data: 'Authorization Level', component: <AuthorisationLevel /> },
    // { id: '3', data: 'History Log', component: <RoleCreationTab /> },
  ];

  return (
    <div className="role-creation-dashboard">
      <div className="role-creation-main-container">
            <TabBar data={TabListData} />
      </div>
    </div>
  );
};