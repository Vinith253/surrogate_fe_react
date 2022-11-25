import { dataList } from '../../../../interface/Types';
import { TabBar } from '../../../../components/commonComponent/customTab/CustomTab';
import RoleCreationTab from '../roleCreationTab';
import '../style.scss';
import { AuthorisationLevel } from '../screens/AuthorisationLevel';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import LMS from './LMS';
import RiskManagement from './RiskManagement';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { Box, Stack } from '@mui/material';

export const UserDetails = () => {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'Product Management',
      component: <ProductManagement />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'User Management',
      component: <UserManagement />,
      isDisabled: false,
    },
    { id: '3', data: 'LMS', component: <LMS />, isDisabled: false },
    {
      id: '4',
      data: 'Risk Management',
      component: <RiskManagement />,
      isDisabled: false,
    },
  ];

  return (
    <Stack>
      <Stack>
        <Box className="role-header-container">
          <ScreenHeader
            title="Authorization Level"
            info="From here, you can assign authorization to users."
            showBackButton={true}
          />
        </Box>
        <TabBar data={TabListData} />
      </Stack>
    </Stack>
  );
};
