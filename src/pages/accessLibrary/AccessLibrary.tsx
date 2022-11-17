import {
  Box,
  Divider,
  InputBase,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CommonTable from '../../components/commonComponent/commonTable/CommonTable';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PageLayout from '../../components/layout/pageLayout/pageLayout';
import SearchIcon from '@mui/icons-material/Search';

const AccessLibrary = () => {
  const column = [
    { title: '#', dataIndex: 'id', key: 'id' },
    { title: 'Application #', dataIndex: 'application', key: 'application' },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    { title: 'Channel Type', dataIndex: 'channelType', key: 'channelType' },
    { title: 'Copy Link', dataIndex: 'copyLink', key: 'copyLink' },
    { title: '', dataIndex: 'copyIcon', key: 'copyIcon' },
  ];
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
  return (
    <Box sx={{ marginTop: '5vh', backgroundColor: 'white' }}>
      <PageLayout>
        <Box sx={{ padding: '1rem 0' }}>
          <Typography sx={head}>Access Library</Typography>
          <Typography sx={subHead}>
            Here is where we can copy particular link of all channels
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '3vh',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #AFAEAF',
              borderRadius: 1,
              padding: '5px 10px',
            }}
          >
            <SearchIcon sx={{ marginRight: '15px', color: '#AFAEAF' }} />
            <InputBase placeholder="Search" />
          </Box>
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              // sx={ToggleBoxStyle}
            >
              <ColorButton value="bank">Bank</ColorButton>
              <ColorButton value="dsa">DSA</ColorButton>
              <ColorButton value="fintech">Fintech</ColorButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        <CommonTable column={columnItems} data={dataItems} />
      </PageLayout>
    </Box>
  );
};

export default AccessLibrary;
