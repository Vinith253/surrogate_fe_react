import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../interface/Types';
import { ReviewerApprover } from '../screens/interviewerLog';
import { Profile } from '../screens/profile';

function Login() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Profile',
      component: <Profile />,
    },
    { id: '2', data: 'Reviewer & Approver', component: <ReviewerApprover /> },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default Login;
