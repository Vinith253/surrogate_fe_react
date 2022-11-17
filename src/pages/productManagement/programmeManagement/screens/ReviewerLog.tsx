import { Stack } from '@mui/material';
import TableComp from '../../../../components/commonComponent/ListTable/ListTable';

import {
  reviewerListRowHeading,
  reviewerLogDashboardList,
  reviewrStatusRowHeading,
} from './listComponents/ReviewerLog.const';

export const ReviewerLog = () => {
  return (
    <TableComp
      viewPath="/sales/salesReportDetails"
      rows={reviewerLogDashboardList}
      statusRowsHeading={reviewrStatusRowHeading}
      listRowHeading={reviewerListRowHeading}
      // flag="dashboard"
    />
  );
};

// import { Stack } from '@mui/material';
// import TableComp from '../../../../components/commonComponent/ListTable/ListTable';

// import { reviewerLogDashboardList,reviewrStatusRowHeading,reviewerListRowHeading } from './listComponents/ReviewerLog.const';

// export const HistoryLog = () => {
//   return (
//     <TableComp
//     viewPath="/sales/salesReportDetails"
//     rows={reviewerLogDashboardList}
//     statusRowsHeading={reviewrStatusRowHeading}
//     listRowHeading={reviewerListRowHeading}
//     flag="dashboard"
//   />

//   )
// };
