export interface roleCreationHeaderList {
  id: string;
  roleName: string;
  initiatedBy: string;
  approvedBy: string;
  initiatedDate: string;
  more?: string;
}

function createData(
  id: number,
  roleName: string,
  initiatedBy: string,
  approvedBy: string,
  initiatedDate: string,
  more: string
) {
  return {
    id,
    roleName,
    initiatedBy,
    approvedBy,
    initiatedDate,
    more,
  };
}

export const rows = [
  createData(1, 'Head', 'XYZ', 'ABC', '22/2/1022', ''),
  createData(2, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
  createData(3, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
  createData(4, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
  createData(5, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
  createData(6, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
  createData(7, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
  createData(8, 'Executive', 'XYZ', 'ABC', '21/05/2022', ''),
];
