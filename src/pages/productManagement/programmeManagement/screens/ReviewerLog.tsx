import TableComp from '../../../../components/commonComponent/ListTable/ListTable';

import {
  reviewerListRowHeading,
  reviewerLogDashboardList,
  reviewrStatusRowHeading,
} from './listComponents/ReviewerLog.const';

export const ReviewerLog = () => {
  return (
    <TableComp
      viewPath="/productManagement/programmeManagement/"
      rows={reviewerLogDashboardList}
      statusRowsHeading={reviewrStatusRowHeading}
      listRowHeading={reviewerListRowHeading}
      flag="programmeManagement"
    />
  );
};
