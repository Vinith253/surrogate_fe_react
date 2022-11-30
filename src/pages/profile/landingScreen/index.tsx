import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import { dataList } from '../../../interface/Types';
import { Profile } from '../screens/profileScreen/Profile';
import { ReviewerApprover } from '../screens/reviewerApprover/reviewerApprover';

function UserProfile() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Profile',
      component: <Profile />,
      isDisabled: false,
    },

    {
      id: '2',
      data: 'Reviewer & Approver',
      component: <ReviewerApprover />,
      isDisabled: false,
    },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default UserProfile;
