export interface authorisationDataInterface {
  id?: string;
  version?: string;
  initiatedBy?: string;
  approvedBy?: string;
  date?: string;
  currentStatus?: string;
  actions?: string;
}

function createData(
  id: string,
  version: string,
  initiatedBy: string,
  approvedBy: string,
  date: string,
  currentStatus?: string
) {
  return {
    id,
    version,
    initiatedBy,
    approvedBy,
    date,
    currentStatus,
  };
}

export const authorisationRows = [
  createData('1', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('2', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('3', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Closed'),
  createData('4', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('5', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('6', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Waiting for Approval'),
  createData('7', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('8', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Closed'),
  createData('9', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('10', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Closed'),
  createData('11', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('12', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Closed'),
  createData('13', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('14', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('15', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('16', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Closed'),
  createData('17', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('18', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
  createData('19', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Closed'),
  createData('20', 'v 1.0.0', 'Vinith', 'Vinith', '22/02/2022', 'Active'),
];


export const authorisation_user_data = [
  {
    module_id: 1,
    module_name: "Product Management",
    sub_module: [
      {
        sub_module_id: 1,
        sub_module_name: "Programme Management",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [
            { user_id: 3, user_name: "Ganesh" },
            { user_id: 4, user_name: "Abishek" },
          ],
        },
      },
      {
        sub_module_id: 2,
        sub_module_name: "Credit Rule",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [
            { user_id: 3, user_name: "Ganesh" },
            { user_id: 4, user_name: "Abishek" },
          ],
        },
      },
      {
        sub_module_id: 3,
        sub_module_name: "Card Catalog",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [{ user_id: 3, user_name: "Ganesh" }],
        },
      },
    ],
  },
  {
    module_id: 2,
    module_name: "User Management",
    sub_module: [
      {
        sub_module_id: 4,
        sub_module_name: "Org.Structure",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [{ user_id: 3, user_name: "Ganesh" }],
        },
      },
      {
        sub_module_id: 5,
        sub_module_name: "Branch Details",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [{ user_id: 3, user_name: "Ganesh" }],
        },
      },
      {
        sub_module_id: 6,
        sub_module_name: "Role Creation",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [{ user_id: 3, user_name: "Ganesh" }],
        },
      },
      {
        sub_module_id: 7,
        sub_module_name: "User Creation",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [{ user_id: 3, user_name: "Ganesh" }],
        },
      },
    ],
  },
  {
    module_id: 3,
    module_name: "LMS",
    sub_module: [
      {
        sub_module_id: 8,
        sub_module_name: "LMS Rule",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [],
          approver_data: [],
        },
      },
    ],
  },
  {
    module_id: 4,
    module_name: "Risk Management",
    sub_module: [
      {
        sub_module_id: 9,
        sub_module_name: "Customer Support",
        sub_module_data: {
          initiator_data: [{ user_id: 1, user_name: "Parithi" }],
          reviewer_data: [{ user_id: 2, user_name: "Ashwin" }],
          approver_data: [{ user_id: 3, user_name: "Ganesh" }],
        },
      },
    ],
  },
];
