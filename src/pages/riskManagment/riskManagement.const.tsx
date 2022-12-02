export const CustomerReportFilterDropdown: salesReportFilterInterface[] = [
    {
      label: 'State',
      option: [
        { value: 'all', name: 'All' },
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
        { value: 'all', name: 'All' },
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
        { value: 'all', name: 'All' },
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
        { value: 'all', name: 'All' },
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
        { value: 'all', name: 'All' },
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
      label: 'Application Status',
      option: [{ value: 'all', name: 'All' }],
    },
  ];
  
  export interface salesReportFilterInterface {
    label?: string;
    option?: Array<object>;
  }
  


  export const customerDetailsRiskManagment = {
    details: [
      {
        label: 'Application number',
        value: '1234567890',
      },
      {
        label: 'Surrogate',
        value: 'Card For Card',
      },
      {
        label: 'Applied Date & Time',
        value: '12 Jul, 22 09:40 Am',
      },
      {
        label: 'Last Status Updated On',
        value: '12 Jul,22 09:40 Am',
      },
    ],
  };