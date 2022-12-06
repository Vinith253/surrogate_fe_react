import { lmsTableHeader } from '../../../utils/constants/Constants';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Configuration = [
  {
    label: 'Rejected',
    value: 'rejected',
  },
  {
    label: 'Dropped',
    value: 'dropped',
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

export const RejectionTypeCheckboxList = [
  {
    label: 'Score',
  },
  {
    label: 'CIBIL',
  },
  {
    label: 'DPD',
  },
  {
    label: 'Income',
  },
  {
    label: 'C4C',
  },
  {
    label: 'Pincode',
  },
  {
    label: 'KYC',
  },
  {
    label: 'Others',
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
    label: 'SMS',
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

export const LMSListData = [
  {
    id: '1',
    rulename: '#12345',
    startsAt: '20 Oct,2022',
    endedAt: '28 Oct,2022',
    initiatedBy: '123',
    reTargeted: '1500000',
    status: 'Approved',
    more: <MoreVertIcon />,
  },
  {
    id: '2',
    rulename: '#12345',
    startsAt: '20 Oct,2022',
    endedAt: '28 Oct,2022',
    initiatedBy: '123',
    reTargeted: '1500000',
    status: 'Rejected',
    more: <MoreVertIcon />,
  },
  {
    id: '3',
    rulename: '#12345',
    startsAt: 'Ashwin',
    endedAt: '1234567891',
    initiatedBy: '123',
    reTargeted: '1500000',
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

export const ShowMoreModalData = [
  {
    sNo: '1',
    typeAndDSA: 'Score',
  },
  {
    sNo: '2',
    typeAndDSA: 'CIBIL',
  },
  {
    sNo: '3',
    typeAndDSA: 'DPD',
  },
  {
    sNo: '4',
    typeAndDSA: 'Income',
  },
  {
    sNo: '5',
    typeAndDSA: 'C4C',
  },
  {
    sNo: '6',
    typeAndDSA: 'Pincode',
  },
  {
    sNo: '7',
    typeAndDSA: 'KYC',
  },
  {
    sNo: '8',
    typeAndDSA: 'Others',
  },
];

export const ApplicableOrNOT = [
  {
    label: 'Applicable',
    value: 'applicable',
  },
  {
    label: 'Not Applicable',
    value: 'notapplicable',
  },
];

export const DSAList = [
  { value: 'All', name: 'All' },
  { value: 'name1', name: 'Name 1' },
  { value: 'name2', name: 'Name 2' },
  { value: 'name3', name: 'Name 3' },
  { value: 'name4', name: 'Name 4' },
];

export const DivisionList = [
  { value: 'All', name: 'All' },
  { value: 'name1', name: 'Name 1' },
  { value: 'name2', name: 'Name 2' },
  { value: 'name3', name: 'Name 3' },
  { value: 'name4', name: 'Name 4' },
];

export const FintechPartnerList = [
  { value: 'All', name: 'All' },
  { value: 'name1', name: 'Name 1' },
  { value: 'name2', name: 'Name 2' },
  { value: 'name3', name: 'Name 3' },
  { value: 'name4', name: 'Name 4' },
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
