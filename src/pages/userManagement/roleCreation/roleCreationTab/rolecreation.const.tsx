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
    createData(
      1,
      'Head',
      'XYZ',
      'ABC',
      '22/2/1022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
    createData(
      2,
      'Executive',
      'XYZ',
      'ABC',
      '21/05/2022',
      ''
    ),
  ];