import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Card from '../../components/commonComponent/card/Card';
import credit_rule from '../../assets/icons/credit_rule.svg';
import card_for_approval from '../../assets/icons/card_for_approval.svg';
import dsa_onboarding from '../../assets/icons/dsa_onboarding.svg';
import user_onboarding from '../../assets/icons/user_onboarding.svg';
import sales_report from '../../assets/icons/sales_report.svg';
import customer_report from '../../assets/icons/customer_report.svg';
import performance_report from '../../assets/icons/performance_report.svg';
import lms from '../../assets/icons/lms.svg';
import frequentActivity from '../../assets/images/frequentActivity.svg';
import '../home/Home.scss';
import { useEffect, useState } from 'react';
import Loading from '../../components/commonComponent/customModal/Re-Targeting/Loading';

export default function Home() {
  const pendingActionsData = {
    title: 'Pending Actions',
    key: 'pendingItems',
    clipText: 'Pending',
    clipNo: 2,
    data: [
      {
        image: credit_rule,
        text_one: 'New Credit Rule Review',
        text_two: 'Received: 10/June/2022 19:30:12',
        text_three: '',
      },
      {
        image: card_for_approval,
        text_one: 'New Card For Approval',
        text_two: 'Received: 10/June/2022 19:30:12',
        text_three: '',
      },
    ],
  };
  const savedItemsData = {
    title: 'Saved Items',
    key: 'savedItems',
    clipText: 'Saved',
    clipNo: 2,
    data: [
      {
        image: dsa_onboarding,
        text_one: 'DSA Onboarding',
        text_two: 'Saved On: 10/June/2022 19:30:12',
        text_three: 'ID No. 12345678',
      },
      {
        image: user_onboarding,
        text_one: 'User Onboarding',
        text_two: 'Saved On: 10/June/2022 19:30:12',
        text_three: 'ID No. 12345678',
      },
    ],
  };
  const frequentActivitiesData = {
    title: 'Frequent Activities',
    key: 'frequentActivities',
    clipText: '',
    clipNo: '',
    mainImage: frequentActivity,
    data: [
      {
        image: sales_report,
        mainContent: 'Sales Report',
        // path: '/sales/salesReport',
      },
      {
        image: customer_report,
        mainContent: 'Customer Report',
        // path: '/sales/salesReport',
      },
      {
        image: performance_report,
        mainContent: 'Performance Report',
        // path: '/sales/salesReport',
      },
      {
        image: lms,
        mainContent: 'LMS',
        // path: '/sales/salesReport',
      },
    ],
  };
  const [pendingAction, setPendingAction] = useState(pendingActionsData);
  const [savedItems, setSavedItems] = useState(savedItemsData);
  const [frequentActivities, setFrequentActivities] = useState(
    frequentActivitiesData
  );
  return (
    <Box className="main-container">
      <Typography color="secondary" variant="h5">
        Welcome Parithi!
      </Typography>

      <Box className="home-container">
        <Card content={pendingActionsData} />
        <Card content={savedItemsData} />
        <Card content={frequentActivitiesData} />
      </Box>
    </Box>
  );
}
