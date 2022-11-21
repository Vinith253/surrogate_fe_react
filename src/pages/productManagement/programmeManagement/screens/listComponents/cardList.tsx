import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
  Checkbox,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { colors } from '../../../../../style/Color';
import { programMmgt } from '../../../../../utils/Constants';
import { ListTagStatus } from '../../../../../utils/tagBasedIndicator/listTagStatus';

export interface cardDetailsType {
  surrogateProgramme: string;
  activeSince: string;
  lastModify: string;
  status: string;
  autoResumeForm: string;
  StatusActiveDate?: string;
  resumeStatus?: string;
  resumeItNow?: string;
}
export interface cardData {
  data: cardDetailsType[];
}

const useStyles = {
  root: {
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.12)',
  },
};

function CardList({ data }: cardData) {
  console.log('data----', data);

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {data.map((dataItem: any) => (
          <Box
            width="31.5%"
            height="300px"
            sx={{
              borderRadius: '12px',
              ...useStyles.root,
            }}
          >
            <Card
              sx={{
                height: '300px',
                borderRadius: '12px',
                '&:hover': {
                  outline: `1.5px solid ${colors.blue}`,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: `2px solid ${colors.lightGrey}`,
                    paddingBottom: '5px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox color="secondary" />
                    <Typography
                      sx={{
                        letterSpacing: '0.0025em',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '16px',
                      }}
                    >
                      {dataItem.surrogateProgramme}
                    </Typography>
                  </Box>
                  <Box
                    id="more-button"
                    onClick={handleClick}
                    aria-controls={open ? 'more-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ padding: '0 8px' }}>
                  <Box sx={{ padding: '15px 0' }}>
                    <Typography
                      sx={{
                        color: ListTagStatus(dataItem.status).color,
                        backgroundColor: ListTagStatus(dataItem.status).bgColor,
                        fontSize: '12px',
                        fontWeight: 400,
                        padding: '1px 9px',
                        borderRadius: '4px',
                        // textAlign: "center",
                        width: 'max-content',
                      }}
                    >
                      {dataItem.status}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '0 0px 10px 0' }}>
                    <Typography
                      sx={{
                        color: '#AFAEAF',
                        fontSize: '12px',
                        fontWeight: 500,
                        paddingBottom: '3px',
                      }}
                    >
                      Last Modified
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#151515',
                        paddingBottom: '3px',
                      }}
                    >
                      {dataItem.lastModify}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#AFAEAF',
                        fontSize: '12px',
                        fontWeight: 500,
                        paddingBottom: '2px',
                      }}
                    >
                      Status
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#151515',
                        paddingBottom: '1px',
                      }}
                    >
                      {dataItem.StatusActiveDate}
                    </Typography>
                    {dataItem.resumeStatus && (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#151515',
                          paddingBottom: '1px',
                        }}
                      >
                        {dataItem.resumeStatus}
                      </Typography>
                    )}
                    {dataItem.resumeItNow && (
                      <Typography
                        sx={{
                          padding: '3px 0',
                          fontSize: '14px',
                          fontWeight: 500,
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          color: '#0662B7',
                          letterSpacing: '0.0125em',
                        }}
                        // color="secondary"
                      >
                        {dataItem.resumeItNow}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
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
            onClick={handleClose}
            style={{ padding: '10px 20px', textAlign: 'left' }}
          >
            {programMmgt.RESUME_SURROGATE}
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ padding: '10px 20px', textAlign: 'left' }}
          >
            {programMmgt.PAUSE_SURROGATE}
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ padding: '10px 20px', textAlign: 'left' }}
          >
            {programMmgt.EDIT_SCHEDULE_PAUSE}
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default CardList;
