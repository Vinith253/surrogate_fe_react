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
  createData('1', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('2', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('3', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('4', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('5', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('6', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('7', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('8', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('9', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('10', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('11', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('12', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('13', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('14', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('15', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('16', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('17', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('18', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('19', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
  createData('20', 'v 1.0.0', 'Vinith', 'Vinith', '222/02/2022', 'Active'),
];
