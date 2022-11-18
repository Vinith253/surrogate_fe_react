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
  console.log(content, 'content');
  const cardHead = {
    fontSize: '16px',
    color: '#656769;',
    fontWeight: '400',
  };
  const cardSubHead = {
    fontSize: '14px',
    color: ' #AFAEAF;',
  };
  const flexClass = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
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
            <Box sx={{ display: 'flex', gap: '5%', padding: '1rem' }}>
              <Box sx={{ width: '3rem' }}>
                <img src={item.image} style={{ width: '100%' }} />
              </Box>
              {!item.mainContent && (
                <Box sx={{ width: '70%' }}>
                  <Typography sx={cardHead} className="card-head">
                    {item.text_one}
                  </Typography>
                  {item.text_three !== '' && (
                    <Typography sx={cardHead}>{item.text_three}</Typography>
                  )}
                  <Typography sx={cardSubHead}>{item.text_two}</Typography>
                </Box>
              )}
              {item.mainContent && (
                <Box
                  sx={{ display: 'flex', alignItems: 'center', width: '70%' }}
                >
                  <Typography sx={cardHead}>{item.mainContent}</Typography>
                </Box>
              )}
              <Box sx={flexClass}>
                <ArrowForwardIosIcon color="secondary" />
              </Box>
            </Box>
          );
        })}
        {content.mainImage && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <img src={content.mainImage} />
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default Card;
