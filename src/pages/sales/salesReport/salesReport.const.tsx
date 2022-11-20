export const salesReportFilterDropdown: salesReportFilterInterface[] = [
  {
    id: 1,
    label: 'State',
    option: [{ value: 'all', name: 'All' }],
  },
  {
    id: 2,
    label: 'Zone',
    option: [{ value: 'all', name: 'All' }],
  },
];

export interface salesReportFilterInterface {
  id?: number;
  label?: string;
  option?: Array<object>;
}
