import { lmsTableHeader } from '../../../utils/constants/Constants';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Configuration = [
  {
    label: 'Rejected',
    value: 'Rejected',
  },
  {
    label: 'Dropped',
    value: 'Dropped',
  },
];

export const FrequencyPeriod = [
  {
    label: 'Enter Days',
    value: 'EnterDays',
  },
  {
    label: 'Selected Date(s)',
    value: 'SelectedDates',
  },
];

export const EveryDays = [
  {
    label: '1',
    value: '2',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '2',
  },
  {
    label: '4',
    value: '2',
  },
  {
    label: '5',
    value: '2',
  },
];

export const EveryOrder = [
  {
    label: 'First',
    value: 'First',
  },
  {
    label: 'Second',
    value: 'Second',
  },
  {
    label: 'Third',
    value: 'Third',
  },
  {
    label: 'Fourth',
    value: 'Fourth',
  },
  {
    label: 'Last',
    value: 'Last',
  },
];

export const WeekDays = [
  {
    label: 'Monday',
    value: 'Monday',
  },
  {
    label: 'Tuesday',
    value: 'Tuesday',
  },
  {
    label: 'Wednesday',
    value: 'Wednesday',
  },
  {
    label: 'Thursday',
    value: 'Thursday',
  },
  {
    label: 'Friday',
    value: 'Friday',
  },
  {
    label: 'Saturday',
    value: 'Saturday',
  },
  {
    label: 'Sunday',
    value: 'Sunday',
  },
];

export const SurrogateCheckboxList = [
  {
    label: 'Payroll',
  },
  {
    label: 'Card For Card',
  },
  {
    label: 'CIBIL',
  },
  {
    label: 'AQB',
  },
  {
    label: 'Pre-Approved',
  },
  {
    label: 'Secured',
  },
];

export const DroppedTypeCheckboxList = [
  {
    label: 'Initial Verification',
  },
  {
    label: 'Surrogate Selection',
  },
  {
    label: 'Employment Details',
  },
  {
    label: 'HRMS-Fetching Data',
  },
  {
    label: 'C4C-Eligible',
  },
  {
    label: 'C4C-Verification',
  },
  {
    label: 'Card Selection',
  },
  {
    label: 'KYC',
  },
  {
    label: 'HRMS-Input',
  },
  {
    label: 'All',
  },
];

export const CommunicationMode = [
  {
    label: 'Sms',
  },
  {
    label: 'Whatsapp',
  },
  {
    label: 'Mail',
  },
  {
    label: 'Call',
  },
];

export const product_label = [
  {
    id: 1,
    label: lmsTableHeader.HEADING1,
    defaultChecked: true,
  },
  {
    id: 2,
    label: lmsTableHeader.HEADING2,
    defaultChecked: true,
  },
  {
    id: 3,
    label: lmsTableHeader.HEADING3,
    defaultChecked: true,
  },
  {
    id: 4,
    label: lmsTableHeader.HEADING4,
    defaultChecked: true,
  },
  {
    id: 5,
    label: lmsTableHeader.HEADING5,
    defaultChecked: true,
  },
  {
    id: 6,
    label: lmsTableHeader.HEADING6,
    defaultChecked: true,
  },
];

export const LMSListData = [
  {
    id: '1',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Approved',
    more: <MoreVertIcon />,
  },
  {
    id: '2',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
    more: <MoreVertIcon />,
  },
  {
    id: '3',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Dropped',
    more: <MoreVertIcon />,
  },
];

export const GroupButtonData = [
  {
    title: 'All',
  },
  {
    title: 'Active',
  },
  {
    title: 'Saved',
  },
  {
    title: 'Closed',
  },
];
