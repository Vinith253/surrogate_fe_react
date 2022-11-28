export interface historyLogRoleCreationInterface {
  id?: string;
  version?: string;
  roleName?: string;
  date?: string;
  request?: string;
  requestInitiated?: string;
  reviewer?: string;
  approver?: string;
  requestStatus?: string;
  more?: string;
}

export interface historyLogAuthenticationInterface {
  id?: string;
  version?: string;
  date?: string;
  initiator?: string;
  approver?: string;
  reviewer?: string;
  currentStatus?: string;
  requestStatus?: string;
  more?: string;
}

function createRoleCreationData(
  id: string,
  version: string,
  roleName: string,
  date: string,
  request: string,
  requestInitiated: string,
  reviewer: string,
  approver: string,
  requestStatus: string
) {
  return {
    id,
    version,
    roleName,
    date,
    request,
    requestInitiated,
    reviewer,
    approver,
    requestStatus,
  };
}

function createAuthData(
  id: string,
  version: string,
  date: string,
  initiator: string,
  approver: string,
  reviewer: string,
  currentStatus: string,
  requestStatus: string
) {
  return {
    id,
    version,
    date,
    initiator,
    approver,
    reviewer,
    currentStatus,
    requestStatus,
  };
}

export const ruleCreationLogData = [
  createRoleCreationData(
    '1',
    'v 1.0.1',
    'Head',
    '22/02/2022',
    'Edit',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A1 - Pending'
  ),
  createRoleCreationData(
    '2',
    'v 1.0.2',
    'Manager',
    '22/02/2022',
    'New',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'Approved'
  ),
  createRoleCreationData(
    '3',
    'v 1.0.3',
    'Executive',
    '22/02/2022',
    'Pause',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'R2 - Rejected'
  ),
  createRoleCreationData(
    '4',
    'v 1.0.4',
    'Head',
    '22/02/2022',
    'New',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'Approved'
  ),
  createRoleCreationData(
    '5',
    'v 1.0.5',
    'Manager',
    '22/02/2022',
    'New',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A2 - Pending'
  ),
  createRoleCreationData(
    '6',
    'v 1.0.6',
    'Head',
    '22/02/2022',
    'Edit',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A1 - Pending'
  ),
  createRoleCreationData(
    '7',
    'v 1.0.7',
    'Head',
    '22/02/2022',
    'Pause',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A1 - Pending'
  ),
  createRoleCreationData(
    '8',
    'v 1.0.8',
    'Head',
    '22/02/2022',
    'Edit',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A1 - Pending'
  ),
  createRoleCreationData(
    '9',
    'v 1.0.9',
    'Head',
    '22/02/2022',
    'Pause',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A1 - Pending'
  ),
  createRoleCreationData(
    '10',
    'v 1.1.0',
    'Head',
    '22/02/2022',
    'Edit',
    'Ganesh M',
    'Ashwin',
    'Venkatesan',
    'A1 - Pending'
  ),
];

export const historyLogDummyData = [
  createAuthData(
    '1',
    'v 1.0.1',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Waiting for Approval',
    'A1 - Pending'
  ),
  createAuthData(
    '2',
    'v 1.0.2',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Active',
    'A1 - Pending'
  ),
  createAuthData(
    '3',
    'v 1.0.3',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'Approved'
  ),
  createAuthData(
    '4',
    'v 1.0.4',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'A1 - Pending'
  ),
  createAuthData(
    '5',
    'v 1.0.5',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'R1 - Pending'
  ),
  createAuthData(
    '6',
    'v 1.0.6',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'R2 - Rejected'
  ),
  createAuthData(
    '7',
    'v 1.0.7',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'A1 - Pending'
  ),
  createAuthData(
    '8',
    'v 1.0.8',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'Approved'
  ),
  createAuthData(
    '9',
    'v 1.0.9',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'A1 - Pending'
  ),
  createAuthData(
    '10',
    'v 1.1.0',
    '22/02/2022',
    'Suresh',
    'Vinith',
    'Ashwin',
    'Closed',
    'Approved'
  ),
];
