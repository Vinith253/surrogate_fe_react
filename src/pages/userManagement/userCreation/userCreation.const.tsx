export const UserCreationFilterDropdown: userCreationFilterInterface[] = [
  {
    label: 'State',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu', isChecked: true },
      { value: 'andra', name: 'Andhra', isChecked: true },
      { value: 'telungana', name: 'Telungana', isChecked: true },
      { value: 'karnataka', name: 'Karnataka', isChecked: true },
      { value: 'kerala', name: 'Kerala', isChecked: true },
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
    label: 'Other Existing users permission',
    value: 'other',
  },
];

export const PermissionsList = [
  {
    id: 1,
    label: 'Dashboard',
    isExpanded: false,
    isChecked: false,
  },
  {
    id: 2,
    label: 'Apply Credit Card',
    isExpanded: false,
    isChecked: false,
  },
  {
    id: 3,
    label: 'Product Management',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Product Management',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Programme Management',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Pass & Resume Surrogate',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'Credit Rule',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Credit Rule',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Create Credit Rule',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'View Operational Pincode',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Edit Operational Pincode',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 5,
            label: 'BRE Back Test',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Card Catalog',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Card',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Bulk Card Upload',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Activate/Deactivate',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Assign Surrogate',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Sales',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Dashboard',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Sales Dashboard',
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'Performance Reports',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Performance Report',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/email report',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Customer Reports',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Customer Reports',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/email report',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'User Management',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Role Creation',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Roles',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Edit Roles',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'View Authorization Levels',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Edit Authorization Levels',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'User Creation',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Users',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Create User',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Bulk Uoload',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Org. Structure',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Organisations',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Create Org. Structure',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Activate/Deactivate Org.',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Bulkupload Org.',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 4,
        innerTitle: 'Branch Details',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Branch Details',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Edit Branch Details',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Bulk Upload - Branch Details',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: 'LMS',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Dashboard',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Dashboard',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/Email Customer Data',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Re-Target Application',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'LMS Rule & Re-Targeting',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'Create LMS Rule',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Re-Target',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Risk Management',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Customer Report',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Customer Report',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Refer approval',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Forced Action',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: 'Dev Support',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Access Library',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Access Library',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Copy Links',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
];

export const viewPermissionsList = [
  {
    id: 1,
    label: 'Dashboard',
    isExpanded: false,
    isChecked: true,
  },
  {
    id: 2,
    label: 'Apply Credit Card',
    isExpanded: false,
    isChecked: true,
  },
  {
    id: 3,
    label: 'Product Management',
    isExpanded: true,
    isChecked: true,
    data: [
      {
        id: 1,
        innerTitle: 'Product Management',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Programme Management',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Pass & Resume Surrogate',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'Credit Rule',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Credit Rule',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Create Credit Rule',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'View Operational Pincode',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Edit Operational Pincode',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 5,
            label: 'BRE Back Test',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Card Catalog',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Card',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Bulk Card Upload',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Activate/Deactivate',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Assign Surrogate',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Sales',
    isExpanded: true,
    isChecked: true,
    data: [
      {
        id: 1,
        innerTitle: 'Dashboard',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Sales Dashboard',
            isChecked: true,
            isDisabled: true,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'Performance Reports',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Performance Report',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/email report',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Customer Reports',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Customer Reports',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/email report',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'User Management',
    isExpanded: true,
    isChecked: true,
  },
  {
    id: 6,
    label: 'LMS',
    isExpanded: true,
    isChecked: true,
    data: [
      {
        id: 1,
        innerTitle: 'Dashboard',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Dashboard',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/Email Customer Data',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Re-Target Application',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'LMS Rule & Re-Targeting',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'Create LMS Rule',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Re-Target',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Risk Management',
    isExpanded: true,
    isChecked: true,
    data: [
      {
        id: 1,
        innerTitle: 'Customer Report',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Customer Report',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Refer approval',
            isChecked: true,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Forced Action',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: 'Dev Support',
    isExpanded: true,
    isChecked: true,
    data: [
      {
        id: 1,
        innerTitle: 'Access Library',
        isSwitched: true,
        items: [
          {
            id: 1,
            label: 'View Access Library',
            isChecked: true,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Copy Links',
            isChecked: true,
            isDisabled: false,
          },
        ],
      },
    ],
  },
];

export const ReviewerApproverList = [
  {
    moduleName: 'Product Management',
    subModules: [
      {
        name: 'Programme Management',
        reviewerList: [{ reviewerName: '' }],
        approverList: [{ approverName: '' }, { approverName: '' }],
      },
      {
        name: 'Credit Rule',
        reviewerList: [{ reviewerName: '' }],
        approverList: [{ approverName: '' }],
      },
    ],
  },
  {
    moduleName: 'Sales',
    subModules: [
      {
        name: 'Customer reports',
        reviewerList: [{ reviewerName: '' }],
        approverList: [{ approverName: '' }],
      },
      {
        name: 'Performance Report',
        reviewerList: [{ reviewerName: '' }],
        approverList: [{ approverName: '' }],
      },
    ],
  },
  {
    moduleName: 'User Management',
    subModules: [
      {
        name: 'Role Creation',
        reviewerList: [{ reviewerName: '' }],
        approverList: [{ approverName: '' }],
      },
      {
        name: 'User Creation',
        reviewerList: [{ reviewerName: '' }],
        approverList: [{ approverName: '' }],
      },
    ],
  },
];

export const ReviewerApproverAllocation: reviewerApproverInterface[] = [
  {
    label: 'Yes, I will assign',
    value: 'yes,I',
  },
  {
    label: 'User will assign in their end',
    value: 'user',
  },
];

export const UserCreationPermissions = [
  {
    id: 1,
    label: 'Dashboard',
    isExpanded: false,
    isChecked: false,
  },
  {
    id: 2,
    label: 'Apply Credit Card',
    isExpanded: false,
    isChecked: false,
  },
  {
    id: 3,
    label: 'Product Management',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Product Management',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Programme Management',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Pass & Resume Surrogate',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'Credit Rule',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Credit Rule',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Create Credit Rule',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'View Operational Pincode',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Edit Operational Pincode',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 5,
            label: 'BRE Back Test',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Card Catalog',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Card',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Bulk Card Upload',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Activate/Deactivate',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 4,
            label: 'Assign Surrogate',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Sales',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Dashboard',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Sales Dashboard',
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'Performance Reports',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Performance Report',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/email report',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 3,
        innerTitle: 'Customer Reports',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Customer Reports',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/email report',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'User Management',
    isExpanded: true,
    isChecked: false,
  },
  {
    id: 6,
    label: 'LMS',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Dashboard',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Dashboard',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Download/Email Customer Data',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Re-Target Application',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        id: 2,
        innerTitle: 'LMS Rule & Re-Targeting',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'Create LMS Rule',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Re-Target',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Risk Management',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Customer Report',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Customer Report',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Refer approval',
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 3,
            label: 'Forced Action',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: 'Dev Support',
    isExpanded: true,
    isChecked: false,
    data: [
      {
        id: 1,
        innerTitle: 'Access Library',
        isSwitched: false,
        items: [
          {
            id: 1,
            label: 'View Access Library',
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 2,
            label: 'Copy Links',
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],
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
