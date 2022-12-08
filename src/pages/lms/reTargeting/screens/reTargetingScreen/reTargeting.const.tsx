import { Stack } from '@mui/material';

export const reTargetingText: reTargetingInterface[] = [
  {
    label: 'Select Channel',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Select Surrogate',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Select Type',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Rejection Type',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
];

export interface reTargetingInterface {
  label?: string;
  option?: Array<object>;
}

export const reTargeting: any = [
  {
    id: 1,
    applicationNum: 1234,
    customerName: 'Jon',
    mobileNum: 999999999,
    lead: 'Rajesh',
    surrogateName: 'Payroll',
    dateTime: '03May2021,00:00',
    Policy: ' Pongal_20',
    channelName: 'T.Nagar',
    processedBy: 'Venketsan',
    kycStatus: 'Success(CKYC)',
    status: 'Approved',
  },
  {
    id: 2,
    applicationNum: 1234,
    customerName: 'Cersei',
    mobileNum: 999999999,
    lead: 'Rajesh',
    surrogateName: 'Payroll',
    dateTime: '03May2021,00:00',
    Policy: ' Pongal_20',
    channelName: 'T.Nagar',
    processedBy: 'Venketsan',
    kycStatus: 'Success(VKYC)',
    status: 'Approved',
  },
];

export const reTargetingDropdownFields = [
  {
    label: 'Select Channel',
    option: [
      { code: 'All', name: 'All' },
      { code: 'tamilnadu', name: 'Tamilnadu' },
      { code: 'andra', name: 'Andhra' },
      { code: 'telungana', name: 'Telungana' },
      { code: 'karnataka', name: 'Karnataka' },
      { code: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Select Surrogate',
    option: [
      { code: 'All', name: 'All' },
      { code: 'tamilnadu', name: 'Tamilnadu' },
      { code: 'andra', name: 'Andhra' },
      { code: 'telungana', name: 'Telungana' },
      { code: 'karnataka', name: 'Karnataka' },
      { code: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Select Type',
    option: [
      { code: 'All', name: 'All' },
      { code: 'tamilnadu', name: 'Tamilnadu' },
      { code: 'andra', name: 'Andhra' },
      { code: 'telungana', name: 'Telungana' },
      { code: 'karnataka', name: 'Karnataka' },
      { code: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Rejection Type',
    option: [
      { code: 'All', name: 'All' },
      { code: 'tamilnadu', name: 'Tamilnadu' },
      { code: 'andra', name: 'Andhra' },
      { code: 'telungana', name: 'Telungana' },
      { code: 'karnataka', name: 'Karnataka' },
      { code: 'kerala', name: 'Kerala' },
    ],
  },
];
