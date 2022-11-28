import React, { useState } from 'react';
import HistoryLogCustomModal from './HistoryLogCustomModal';
import { Button } from '@mui/material';
function HistoryModal() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleClickOpen = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  return (
    <div>
      <HistoryLogCustomModal
        title={'Card for Card Surrogate - History Log'}
        closeBtn={'Close'}
        tableData={tableData}
        handleClickOpen={handleClickOpen}
        handleCloseSuccess={handleCloseSuccess}
        openSuccess={openSuccess}
        viewMoreDetails={'view more details'}
      />
    </div>
  );
}
export default HistoryModal;
const tableData = [
  {
    versionNumber: 'V1.1.5',
    surrogateName: 'Card For Card',
    requestStatus: 'Approved',
    currentStatus: 'Active',
    initiater: 'Rajesh Kumar',
    dateAndTime: '10 Aug,2022 10:00',
    reviewer: 'Ganesh',
    dateAndTimeReview: '12 Aug,2022 10:00',
    approver: 'Ganesh',
    dateAndTimeapprover: '12 Aug,2022 10:00',
    reasonRejection: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
      'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
      'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
    ],
  },
  {
    versionNumber: 'V1.2.5',
    surrogateName: 'Card For Card',
    requestStatus: 'Rejected',
    currentStatus: 'Active',
    initiater: 'Ganesh',
    dateAndTime: '10 Aug,2022 10:00',
    reviewer: 'Ganesh',
    dateAndTimeReview: '12 Aug,2022 10:00',
    approver: 'Ganesh',
    dateAndTimeapprover: '12 Aug,2022 10:00',
    reasonRejection: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
      'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
      'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
    ],
  },
  {
    versionNumber: 'V1.3.5',
    surrogateName: 'Card For Card',
    requestStatus: 'Rejected',
    currentStatus: 'Active',
    initiater: 'Ganesh',
    dateAndTime: '10 Aug,2022 10:00',
    reviewer: 'Ganesh',
    dateAndTimeReview: '12 Aug,2022 10:00',
    approver: 'Ganesh',
    dateAndTimeapprover: '12 Aug,2022 10:00',
    reasonRejection: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
      'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
      'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
    ],
  },
];
