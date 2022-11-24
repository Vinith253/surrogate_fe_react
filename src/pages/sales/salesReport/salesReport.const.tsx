export const SalesReportFilterDropdown: salesReportFilterInterface[] = [
  {
    label: 'State',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Zone',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'District',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Branch',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Period',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Channel',
    option: [
      { value: 'bank', name: 'Bank' },
      { value: 'dsa', name: 'DSA' },
      { value: 'fintech partners', name: 'Fintech Partners' },
    ],
  },
  {
    label: 'Surrogate',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Policies',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'KYC Status',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Application Status',
    option: [{ value: 'all', name: 'All' }],
  },
];

export interface salesReportFilterInterface {
  label?: string;
  option?: Array<object>;
}
