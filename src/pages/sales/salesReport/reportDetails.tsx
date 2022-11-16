import React from 'react';
import './style.scss';
import DetailsCard from './detailsCard';

function SalesReportDetails() {
  const personalDetails = {
    title: 'Personal Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Application ID',
        value: '1234567890',
      },
      {
        label: 'Name',
        value: 'Ganesh.M',
      },
      {
        label: 'Phone Number',
        value: '987654321',
      },
      {
        label: 'Date Of Birth',
        value: '10 May, 1990',
      },
      {
        label: 'PAN Details',
        value: 'ACDJI2347J',
      },
      {
        label: 'Aadhar Details',
        value: '1234567890',
      },
    ],
  };

  const channelDetails = {
    title: 'Channel Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Channel',
        value: '1234567890',
      },
      {
        label: 'Channel Name',
        value: 'Ganesh.M',
      },
      {
        label: 'DSA ID',
        value: '987654321',
      },
      {
        label: 'DSA Branch',
        value: '10 May, 1990',
      },
      {
        label: 'DSA Lead',
        value: 'ACDJI2347J',
      },
      {
        label: 'DSA Exicutive',
        value: '1234567890',
      },
    ],
  };

  const applicationDetails = {
    title: 'Application Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Applied DAte & Time',
        value: '1234567890',
      },
      {
        label: 'Surrogate',
        value: 'Ganesh.M',
      },
      {
        label: 'Overall status',
        value: '987654321',
      },
      {
        label: 'Status Description',
        value: '10 May, 1990',
      },
      {
        label: 'KYC Status',
        value: 'ACDJI2347J',
      },
      {
        label: 'Visual Card Issuance',
        value: '1234567890',
      },
    ],
  };

  const remarkDetails = {
    title: 'Remarks',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Remarks',
        value:
          'CIBIL 500 unailedcLorem ipusm dolor sit amet, consectetur adipiscing elit',
      },
    ],
  };

  return (
    <div className="sales-report-details-container">
      <div className="header-container">
        <div className="main-header">Customer Details</div>
        <div className="info-label">
          Lorem ipusm dolor sit amet, consectetur adipiscing elit.integer
          senectus mattis
        </div>
      </div>
      <DetailsCard data={personalDetails} />
      <DetailsCard data={channelDetails} />
      <DetailsCard data={applicationDetails} />
      <DetailsCard data={remarkDetails} />
    </div>
  );
}

export default SalesReportDetails;
