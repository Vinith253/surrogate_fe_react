import { IconButton, Menu, MenuItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

// import './historyLogStyle.scss';
import UnfoldMoreIcon from '../../../../assets/icons/sortArrow.svg';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';

import ListTable from '../../../../components/commonComponent/commonListTable/commonListTable';
import HistoryLogCustomModal from '../../../../components/commonComponent/customModal/HistoryLogCustomModal';

export const data = [
  {
    id: 1,
    orgName: 'Card For Card',
    request: 'Pause',
    requestInitiated: 'Ganesh M',
    reviewer: ' Ashwin',
    approvedBy: 'Venkatesan',
    currentStatus: 'Active',
    status: 'Approved',
  },
  {
    id: 2,
    orgName: 'Payroll',
    request: 'Resume',
    requestInitiated: 'Parithi',
    reviewer: 'Ashwin',
    approvedBy: '-',
    currentStatus: 'Paused',
    status: 'A1 - Pending',
  },
  {
    id: 3,
    orgName: 'AQB',
    request: 'Resume',
    requestInitiated: 'Kanimozhi',
    reviewer: 'Ashwin',
    approvedBy: '-',
    currentStatus: 'Paused (sheduled)',
    status: 'R2 - Rejected ',
  },
];
export const ProgrammeHistoryLog = () => {
  const navigate = useNavigate();

  const [sortingData, setSortingData] = useState(data);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [status, setStatus] = useState(0);
  const [idSorting, setIdSorting] = useState<boolean>(true);
  const open = Boolean(anchorElement);

  useEffect(() => {
    idFilterData();
  }, [idSorting]);

  const handleClose = () => {
    setAnchorElement(null);
  };
  const handleClick = (
    event: React.MouseEvent<HTMLTableCellElement>,
    index: number
  ) => {
    setAnchorElement(event.currentTarget);
    setStatus(index);
    console.log('index cehcking', index);
  };
  // const closeModal = () => {
  //   setShowHistoryModal(false);
  // };
  const handleSortById = () => {
    setIdSorting(!idSorting);
  };

  const column = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack sx={{ textAlign: 'center' }}>{text}</Stack>;
      },
      headerRender: (text: string) => {
        return <Stack sx={{ textAlign: 'center' }}>{text}</Stack>;
      },
    },
    {
      title: 'Surrogate',
      dataIndex: 'orgName',
      key: 'orgName',
      headerRender: (text: string) => {
        return (
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <>{text}</>
            <IconButton onClick={() => handleSortById()}>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
    },
    { title: 'Request', dataIndex: 'request', key: 'request' },
    {
      title: 'Request Initiated',
      dataIndex: 'reviewer',
      key: 'reviewer',
    },
    {
      title: 'Reviewer',
      dataIndex: 'requestInitiated',
      key: 'requestInitiated',
    },
    {
      title: 'Approver',
      dataIndex: 'approvedBy',
      key: 'approvedBy',
    },
    {
      title: 'Current Status',
      dataIndex: 'currentStatus',
      key: 'currentStatus',
    },

    {
      title: 'Request Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => {
        return (
          <Stack
            sx={{
              color: text ? checkTagStatus(text).color : '',
            }}
          >
            {text}
          </Stack>
        );
      },
    },

    {
      title: 'Action',
      dataIndex: 'status',
      key: 'status',

      render: (text: string) => {
        return (
          <Stack>
            <Link
              to={''}
              onClick={() => {
                setShowHistoryModal(true);
              }}
              style={{ color: ' #0662B7', fontWeight: '500', fontSize: '14px' }}
            >
              {' '}
              View
            </Link>
          </Stack>
        );
      },
    },
  ];
  const closeModal = () => {
    setShowHistoryModal(false);
  };
  const idFilterData = () => {
    const sort = sortingData.sort((a: any, b: any) => {
      if (idSorting) {
        return a.orgName < b.orgName ? -1 : 1;
      }
      return a.orgName > b.orgName ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  const historyViewMoreAction = () => {
    navigate('/productManagement/programmeManagement/ProgrammeHistoryDetails', {
      // state: data[status - 1].status,
    });
  };
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

  return (
    <Stack sx={{ backgroundColor: 'white' }}>
      <Stack className="orgStructureHistoryLogContainer">
        <Stack className="orgStructureHistoryLogHeader">
          <ScreenHeader
            title="Various Programs and history"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dolor."
            showBackButton={false}
          />
        </Stack>
        <Stack
          className="orgStructureHistoryLogTable"
          sx={{ margin: '20px 0' }}
        >
          <ListTable column={column} data={sortingData} />
        </Stack>
      </Stack>

      {showHistoryModal && (
        <HistoryLogCustomModal
          title={'Card for Card Surrogate - History Log'}
          closeBtn={'Close'}
          tableData={tableData}
          handleCloseSuccess={closeModal}
          openSuccess={showHistoryModal}
          viewMoreDetails={'view more details'}
          historyViewMoreFun={historyViewMoreAction}
        />
      )}
    </Stack>
  );
};
