import { IconButton, Menu, MenuItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ScreenHeader } from '../../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { checkTagStatus } from '../../../../../utils/tagBasedIndicator/tagStatus';
import './historyLogStyle.scss';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';
import ListTable from '../../../../../components/commonComponent/commonListTable/commonListTable';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HistoryLogCustomModal from '../../../../../components/commonComponent/customModal/HistoryLogCustomModal';
import { useLocation, useNavigate } from 'react-router-dom';
export const data = [
  {
    id: 1,
    orgName: 'XYZ',
    version: 'V0.03',
    actionRequest: 'Deactivate',
    requestedBy: 'Ganesh M',
    approvedBy: 'Ashwin',
    status: 'Waiting for Approval',
  },
  {
    id: 2,
    orgName: 'EFG',
    version: 'V0.04',
    actionRequest: 'Deactivate',
    requestedBy: 'Parithi',
    approvedBy: 'Venket',
    status: 'Approved',
  },
  {
    id: 3,
    orgName: 'ABC',
    version: 'V0.03',
    actionRequest: 'Activate',
    requestedBy: 'Kanimozhi',
    approvedBy: 'Ashwin',
    status: 'Rejected',
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
  const closeModal = () => {
    setShowHistoryModal(false);
  };
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
      title: 'Org.Name',
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
    { title: 'Version #', dataIndex: 'version', key: 'version' },
    {
      title: 'Actions Request',
      dataIndex: 'actionRequest',
      key: 'actionRequest',
    },
    {
      title: 'Requested By',
      dataIndex: 'requestedBy',
      key: 'requestedBy',
    },
    {
      title: 'Approved By',
      dataIndex: 'approvedBy',
      key: 'approvedBy',
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
      key: 'more',
      render: (i: any) => {
        // console.log('eeeeee', e);
        return (
          <>
            <Stack
              id="more-button"
              onClick={(e: any) => handleClick(e, i)}
              aria-controls={open ? 'more-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{ padding: '5px', borderBottom: 'none' }}
            >
              <MoreVertIcon />
            </Stack>
            <Menu
              id="more-menu"
              anchorEl={anchorElement}
              open={open}
              MenuListProps={{
                'aria-labelledby': 'more-button',
              }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setShowHistoryModal(true);
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                History Log
              </MenuItem>
              <MenuItem
                onClick={() => {
                  console.log('data[status - 1]', data[status - 1]);
                  navigate('/userManagement/orgcreation/orgHistoryLogDetail', {
                    state: data[status - 1].status,
                  });
                  handleClose();
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                View Org.
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];
  const idFilterData = () => {
    const sort = sortingData.sort((a: any, b: any) => {
      if (idSorting) {
        return a.orgName < b.orgName ? -1 : 1;
      }
      return a.orgName > b.orgName ? -1 : 1;
    });
    setSortingData([...sort]);
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
            title="History Log"
            info="Manage all organisations in the system from here."
            showBackButton={false}
          />
        </Stack>
        <Stack className="orgStructureHistoryLogTable">
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
        />
      )}
    </Stack>
  );
};
