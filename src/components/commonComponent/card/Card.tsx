import {
  Avatar,
  Box,
  Chip,
  Divider,
  Icon,
  Paper,
  Typography,
  Stack,
  IconButton,
} from '@mui/material';
import credit_rule from '../../../assets/icons/credit_rule.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../card/Card.scss';
import edit_icon from '../../../assets/icons/edit_icon.svg';
import delete_icon from '../../../assets/icons/delete_icon.svg';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
type dataType = {
  image: string;
  text_one?: string;
  text_two?: string;
  text_three?: string;
  mainContent?: string;
}[];
type cardItems = {
  title: string;
  clipText?: string;
  clipNo?: any;
  data: dataType;
  mainImage?: string;
  key?: string;
  path?: string;
};

function Card({ content }: { content: cardItems }) {
  const navigate = useNavigate();
  const handlePath = (value: any) => {
    navigate(value);
  };
  const StyledChip = styled(Chip)(() => ({
    color: '#0662B7',
    backgroundColor: '#EEF7FF',
  }));

  return (
    <Paper elevation={3} sx={{ width: '100%' }} className="card-container">
      <Stack
        className="header-container"
        // sx={{
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   padding: '1.5rem 1rem',
        // }}
      >
        <Box>
          <Typography fontSize={18} fontWeight={'bold'}>
            {content.title}
          </Typography>
        </Box>
        {content.clipText && (
          <Box>
            <StyledChip
              avatar={
                <Avatar className="avatar">
                  <Box className="flex-box">{content.clipNo}</Box>
                </Avatar>
              }
              label={content.clipText}
            />
          </Box>
        )}
      </Stack>
      <Divider variant="middle" />
      <Box>
        {content.data.map((item: any) => {
          return (
            <Box className="list-box">
              <Box sx={{ width: '3rem' }}>
                <img src={item.image} style={{ width: '100%' }} />
              </Box>
              {!item.mainContent && (
                <Box sx={{ width: '70%' }}>
                  <Typography className="card-head">{item.text_one}</Typography>
                  {item.text_three !== '' && (
                    <Typography className="card-head">
                      {item.text_three}
                    </Typography>
                  )}
                  <Typography className="card-subhead">
                    {item.text_two}
                  </Typography>
                </Box>
              )}
              {item.mainContent && (
                <Box className="main-content">
                  <Typography className="card-head">
                    {item.mainContent}
                  </Typography>
                </Box>
              )}
              {content.key !== 'savedItems' && (
                <Box
                  className="flex-class"
                  onClick={() => handlePath(item.path)}
                >
                 <IconButton>
                 <ArrowForwardIosIcon color="secondary" />
                 </IconButton>
                  
                </Box>
              )}
              {content.key === 'savedItems' && (
                <Box className="saved-items-flex">
                  <IconButton>
                    <img src={delete_icon} />
                  </IconButton>
                  <IconButton>
                    <img src={edit_icon} />
                  </IconButton>
                </Box>
              )}
            </Box>
          );
        })}
        {content.mainImage && (
          <Box className="main-image">
            <img src={content.mainImage} />
          </Box>
        )}
      </Box>
    </Paper>
  );
}
export default Card;
