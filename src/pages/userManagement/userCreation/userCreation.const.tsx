export const UserCreationFilterDropdown: userCreationFilterInterface[] = [
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
    label: 'Reporting Head',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
];

export const PersonalDetails: personalDetailsInterface[] = [
  { label: 'Employee Id', placeHolder: 'Enter Employee Id' },
  { label: 'Employee Name', placeHolder: 'Enter Employee Name' },
  { label: 'Email Id', placeHolder: 'Enter Email Id' },
  { label: 'Mobile Number', placeHolder: 'Mobile Number' },
];

export const EmploymentDetails: employmentDetailsInterface[] = [
  { label: 'Date of Joining', placeHolder: 'DD/MM/YYYY' },
  { label: 'Designation', placeHolder: 'Enter Designation' },
  { label: 'Reporting Head', placeHolder: 'Enter Reporting Head' },
  {
    label: 'Optional Reporting Head',
    placeHolder: 'Enter Reporting Head (optional)',
  },
];

export const DropdownFields: dropdownFieldsInterface[] = [
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
];

export const ChannelDetails: channelDetailsInterface[] = [
  {
    label: 'Bank',
  },
  {
    label: 'DSA',
  },
  {
    label: 'Fintech Partner',
  },
];

export const RoleDetails: roleDetailsInterface[] = [
  {
    label: 'Initiator',
    value: 'initiator',
  },
  {
    label: 'Reviewer',
    value: 'reviewer',
  },
  {
    label: 'Approver',
    value: 'approver',
  },
];

export const RoleAccessFrom: roleAccessFromInterface[] = [
  {
    label: 'Role Presets',
    value: 'rolePresets',
  },
  {
    label: 'other Existing users permission',
    value: 'other',
  },
];

export const ReviewerApproverAllocation: reviewerApproverInterface[] = [
  {
    label: 'Yes, I will assign',
    value: 'I',
  },
  {
    label: 'User will assign in their end',
    value: 'User',
  },
];

export interface userCreationFilterInterface {
  label?: string;
  option?: Array<object>;
}

export interface personalDetailsInterface {
  label?: string;
  placeHolder?: string;
}

export interface employmentDetailsInterface {
  label?: string;
  placeHolder?: string;
}
export interface dropdownFieldsInterface {
  label?: string;
  option?: Array<object>;
}

export interface channelDetailsInterface {
  label?: string;
}

export interface roleDetailsInterface {
  label?: string;
  value?: string;
}

export interface roleAccessFromInterface {
  label?: string;
  value?: string;
}

export interface reviewerApproverInterface {
  label?: string;
  value?: string;
}
