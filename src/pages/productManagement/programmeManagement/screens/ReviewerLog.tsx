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
