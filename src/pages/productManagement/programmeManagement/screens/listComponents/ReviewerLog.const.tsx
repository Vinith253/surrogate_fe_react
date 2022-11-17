export const reviewerLogDashboardList: rowsDataInterface[] = [
  {
    id: 1,
    surrogateName: 'Card For Card',
    version: 'V1.1.5',
    currentStatus: 'Active',
    initiatedBy: 'Ganesh M',

    request: 'Resume',
    dateAndTime: '20 June 2020 10:00',
    Policy: ' Pongal_20',
    channelName: 'T.Nagar',
    processedBy: 'Venketsan',
    kycStatus: 'Success(CKYC)',
    status: 'Pending',
  },
  {
    id: 2,
    surrogateName: 'Payroll',
    version: 'V1.1.4',
    currentStatus: 'paused',
    initiatedBy: 'Parithi',

    request: 'Pause',
    dateAndTime: '20 June 2020 10:00',

    Policy: ' Pongal_20',
    channelName: 'T.Nagar',
    processedBy: 'Venketsan',
    kycStatus: 'Success(VKYC)',
    status: 'Sent To Approver',
  },

  {
    id: 3,
    surrogateName: 'AQB',
    version: 'V1.1.3',
    currentStatus: 'Active',
    initiatedBy: 'Kanimozhi',
    request: 'Schedule Pause',
    dateAndTime: '20 June 2020 10:00',

    Policy: ' Pongal_20',
    channelName: 'T.Nagar',
    processedBy: 'Venketsan',
    kycStatus: 'Success(VKYC)',
    status: 'Rejected',
  },
];

export const reviewrStatusRowHeading: statusRowHeadingInterface[] = [
  { header2: 'Reviewer Status', header3: 'View' },
];

export const reviewerListRowHeading: statusRowHeadingInterface[] = [
  {
    header1: '# ',
    header2: 'Surrogate',
    header3: 'Version',
    header4: 'Current Status',
    header5: 'Initiated',
    header6: 'Request',
    header7: 'Date & Time',
    header8: 'Policy',
    header9: 'Channel',
    header10: 'Processed',
  },
];

export interface rowsDataInterface {
  id?: number;
  applicationNum?: any;
  customerName?: string;
  mobileNum?: any;
  lead?: string;
  surrogateName?: string;
  dateTime?: string;
  Policy?: string;
  channelName?: string;
  processedBy?: string;
  kycStatus?: string;
  status?: string;
  version?: string;
  currentStatus?: string;
  initiatedBy?: string;
  request?: string;
  dateAndTime?: string;
}

export interface statusRowHeadingInterface {
  header1?: string;
  header2?: string;
  header3?: string;
  header4?: string;
  header5?: string;
  header6?: string;
  header7?: string;
  header8?: string;
  header9?: string;
  header10?: string;
}
