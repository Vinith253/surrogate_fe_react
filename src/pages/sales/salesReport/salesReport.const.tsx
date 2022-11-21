export const salesReportFilterDropdown: salesReportFilterInterface[] = [
  {
    label: 'State',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Zone',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'District',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Branch',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Period',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    label: 'Channel',
    option: [{ value: 'all', name: 'All' }],
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
