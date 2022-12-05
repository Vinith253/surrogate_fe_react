import { IconButton, Menu, MenuItem, Stack, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './LMSHistoryLog.scss';
import UnfoldMoreIcon from '../../../../assets/icons/sortArrow.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ListTable from '../../../../components/commonComponent/commonListTable/commonListTable';
import HistoryLogCustomModal from '../../../../components/commonComponent/customModal/HistoryLogCustomModal';
import GroupButton from '../../../../components/commonComponent/GroupButton/GroupButton';
export const data = [
  {
    id: 1,
    ruleName: 'Main config_D_FBI',
    initiatedBy: 'Ganesh M',
    dateAndTime: '20 June 2022, 11:00',
    Reviewer: ' Venkatesan',

    status: 'Approved',
  },
  {
    id: 2,
    ruleName: 'Main Config_D_KYC',
    initiatedBy: 'Parithi',
    dateAndTime: '20 June 2022, 11:00',
    Reviewer: 'Venkatesan',
    status: 'Waiting for Approval',
  },
  {
    id: 3,
    ruleName: 'Main Config_R_C4C_Incomplete',
    initiatedBy: 'Kanimozhi',
    dateAndTime: '20 June 2022, 11:00',
    Reviewer: 'Abhishek',
    status: 'Rejected ',
  },
];
export const LMSHistoryLog = () => {
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
  const handleClickMenu = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClick = (
    event: React.MouseEvent<HTMLTableCellElement>,
    index: number
  ) => {
    setAnchorElement(event.currentTarget);
    setStatus(index);
  };

  const handleSortById = () => {
    setIdSorting(!idSorting);
  };

  const openHistoryLogModal = () => {
    setShowHistoryModal(true);
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
      title: 'Rule Name',
      dataIndex: 'ruleName',
      key: 'ruleName',
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
      dataIndex: 'dateAndTime',
      key: 'dateAndTime',
    },
    {
      title: 'Reviewer',
      dataIndex: 'Reviewer',
      key: 'Reviewer',
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
      render: () => {
        return (
          <>
            <Stack
              id="more-button"
              onClick={handleClickMenu}
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
                // onClick={() => handleClose()}
                onClick={() => {
                  handleClose();
                  openHistoryLogModal();
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                History Log
              </MenuItem>
              <MenuItem
                // onClick={handleClose}
                onClick={() => {
                  handleClose();
                  navigate('/lms/lmsRule/viewRule', {
                    state: {
                      isEditable: true,
                    },
                  });
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                View Rule
              </MenuItem>
            </Menu>
          </>
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
    navigate('/lms/lmsRule/historyLogDetails', {
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

  const GroupButtonData = [
    {
      title: 'All',
    },
    {
      title: 'Approved',
    },
    {
      title: 'Waiting for Approval',
    },
    {
      title: 'Rejected',
    },
  ];

  return (
    <Stack sx={{ backgroundColor: 'white' }}>
      <Stack className="LMSHistoryLogContainer">
        <Stack className="LMSHistoryLogHeader">
          <Box className="groupButtonContainer">
            <GroupButton data={GroupButtonData} />
          </Box>
        </Stack>
        <Stack className="LMSHistoryLogTable">
          <ListTable column={column} data={sortingData} />
        </Stack>
      </Stack>

      {showHistoryModal && (
        <HistoryLogCustomModal
          title={'Card  History Log'}
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
