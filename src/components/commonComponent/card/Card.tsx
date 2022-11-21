import {
  Avatar,
  Box,
  Chip,
  Divider,
  Icon,
  Paper,
  Typography,
  Stack,
} from '@mui/material';
import credit_rule from '../../../assets/icons/credit_rule.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../card/Card.scss';

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
};

type dummy = {
  name: string;
};

function Card({ content }: { content: cardItems }) {
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
            <Chip
              avatar={
                <Avatar className="avatar">
                  <Box className="flex-box">{content.clipNo}</Box>
                </Avatar>
              }
              label={content.clipText}
              sx={{ backgroundColor: '#EEF7FF' }}
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
              <Box className="flex-class">
                <ArrowForwardIosIcon color="secondary" />
              </Box>
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
