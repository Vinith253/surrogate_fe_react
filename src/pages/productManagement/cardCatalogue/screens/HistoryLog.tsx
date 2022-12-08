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
    cardName: 'ETERNA',
    initiatedBy: 'Ashwin',
    dateTime: '20 June 2022, 11:00',
    reviewer: 'Venkatesan',
    status: 'Approved',
  },
  {
    id: 2,
    cardName: 'EXCLUSIVE ICAI ',
    initiatedBy: 'Ashwin',
    dateTime: '20 June 2022, 11:00',
    reviewer: 'Venkatesan',
    status: 'Rejected',
  },
  {
    id: 3,
    cardName: 'EXCLUSIVE ICAI',
    initiatedBy: 'Ashwin',
    dateTime: '20 June 2022, 11:00',
    reviewer: 'Venkatesan',
    status: 'Approved',
  },
];
export const HistoryLog = () => {
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
      title: 'Card Name',
      dataIndex: 'cardName',
      key: 'cardName',
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
    { title: 'Initiated By', dataIndex: 'initiatedBy', key: 'initiatedBy' },
    {
      title: 'Date & Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Reviewer',
      dataIndex: 'reviewer',
      key: 'reviewer',
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
      title: 'More',
      dataIndex: 'id',
      key: 'id',

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
        return a.cardName < b.cardName ? -1 : 1;
      }
      return a.cardName > b.cardName ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  const historyViewMoreAction = () => {
    navigate('/productManagement/cardCatalogue/cardCataloguehistoryLog', {
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
