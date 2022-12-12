import {
  Box,
  Divider,
  InputBase,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import './AccessLibrary.scss';
import CommonTable from '../../components/commonComponent/commonTable/CommonTable';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PageLayout from '../../components/layout/pageLayout/pageLayout';
import SearchIcon from '@mui/icons-material/Search';
import CustomModal from '../../components/commonComponent/customModal/CustomModal';
import ListTable from '../../components/commonComponent/commonListTable/commonListTable';
const AccessLibrary = () => {
  const [accessModal, setAccessModal] = useState(false);
  const [accessLink, setAccessLink] = useState('');
  const column = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      sortColumn: false,
      headerRender: (text: string) => {
        return (
          <Stack sx={{ width: '2.34375vw', textAlign: 'center' }}>{text}</Stack>
        );
      },
      render: (text: string) => {
        return (
          <Stack sx={{ width: '2.34375vw', textAlign: 'center' }}>{text}</Stack>
        );
      },
    },
    {
      title: 'Application #',
      dataIndex: 'application',
      key: 'application',
      sortColumn: true,
      headerRender: (text: string) => {
        return <Stack sx={{ width: '7.8125vw' }}>{text}</Stack>;
      },
      render: (text: string) => {
        return <Stack sx={{ width: '7.8125vw' }}>{text}</Stack>;
      },
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
      sortColumn: false,
      headerRender: (text: string) => {
        return <Stack sx={{ width: '9.375vw' }}>{text}</Stack>;
      },
      render: (text: string) => {
        return <Stack sx={{ width: '9.375vw' }}>{text}</Stack>;
      },
    },
    {
      title: 'Channel Type',
      dataIndex: 'channelType',
      key: 'channelType',
      sortColumn: false,
      headerRender: (text: string) => {
        return <Stack sx={{ width: '9.375vw' }}>{text}</Stack>;
      },
      render: (text: string) => {
        return <Stack sx={{ width: '9.375vw' }}>{text}</Stack>;
      },
    },
    {
      title: 'Copy Link',
      dataIndex: 'copyLink',
      key: 'copyLink',
      sortColumn: false,
    },
    {
      title: '',
      dataIndex: 'copyIcon',
      key: 'copyIcon',
      sortColumn: false,
      onClick: (link: string) => onClickCopyIcon(link),
      render: (text: string) => {
        return (
          <Stack sx={{ width: '30px', textAlign: 'center' }}>{text}</Stack>
        );
      },
    },
  ];
  const onClickCopyIcon = (link: string) => {
    setAccessModal(!accessModal);
    setAccessLink(link);
  };
  const data = [
    {
      id: 1,
      application: '#12345',
      customerName: 'Ganesh M',
      channelType: 'DSA',
      copyLink:
        'https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html',
      copyIcon: <ContentCopyIcon color="secondary" />,
    },
    {
      id: 2,
      application: '#12345',
      customerName: 'Venket ',
      channelType: 'Fintech',
      copyLink:
        'https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html',
      copyIcon: <ContentCopyIcon color="secondary" />,
    },
    {
      id: 3,
      application: '#12345',
      customerName: 'Karthik Kumar',
      channelType: 'Fintech',
      copyLink:
        'https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html',
      copyIcon: <ContentCopyIcon color="secondary" />,
    },
    {
      id: 4,
      application: '#12345',
      customerName: 'Jack',
      channelType: 'Bank Branch',
      copyLink:
        'https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html',
      copyIcon: <ContentCopyIcon color="secondary" />,
    },
    {
      id: 5,
      application: '#12345',
      customerName: 'Maha',
      channelType: 'DSA',
      copyLink:
        'https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html',
      copyIcon: <ContentCopyIcon color="secondary" />,
    },
  ];
  const [alignment, setAlignment] = useState('bank');
  const [columnItems, setColumnItems] = useState(column);
  const [dataItems, setDataItems] = useState(data);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };

  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: ' rgb(240, 240, 240)',
    border: ' rgb(240, 240, 240) 1px ',
    color: 'black',

    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1976d2',
    },
  }));

  const head = {
    fontSize: '16px',
    fontWeight: 600,
  };
  const subHead = {
    fontSize: '14px',
    fontWeight: 400,
    color: '#AFAEAF',
  };
  const handleClick = () => {
    setAccessModal(!accessModal);
  };
  return (
    <Box className="access-library-container">
      <PageLayout>
        <Box className="header-box">
          <Typography className="header">Access Library</Typography>
          <Typography className="sub-header">
            Copy a text link of any channel from here.
          </Typography>
        </Box>
        <Divider />
        <Box className="search-container">
          <Box className="search-box">
            <SearchIcon className="search-icon" />
            <InputBase placeholder="Search by ..." />
          </Box>
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{
                padding: '5px !important',
                height: '45px',
                textTransform: 'capitalize',
              }}
            >
              <ColorButton value="bank" sx={{ textTransform: 'capitalize' }}>
                Bank
              </ColorButton>
              <ColorButton value="dsa" sx={{ textTransform: 'capitalize' }}>
                DSA
              </ColorButton>
              <ColorButton value="fintech" sx={{ textTransform: 'capitalize' }}>
                Fintech
              </ColorButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        <Stack sx={{ margin: '30px 0' }}>
          <ListTable
            column={columnItems}
            data={dataItems}
            // handle={handleClick}
          />
        </Stack>

        {accessModal && (
          <CustomModal
            openSuccess={accessModal}
            handleCloseSuccess={() => setAccessModal(false)}
            successModalTitle={'Share the link'}
            // successModalMsg={
            //   'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
            // }
            accessLibraryLink={accessLink}
            accessLibraryMsg={'Here you can copy the link and share it'}
            org_ID={'#12345'}
            org_Name={'Ganesh Agency'}
            channel_type={'DSA'}
            accessLibraryModaBtn={'Link to share'}
            duplicateRoleCloseBtn={' Close'}
            accessLibraryCopyLinkBtn={'Copy Link'}
          />
        )}
      </PageLayout>
    </Box>
  );
};

export default AccessLibrary;
