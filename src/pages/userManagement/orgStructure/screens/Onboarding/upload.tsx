import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import TypoText from '../../../../../components/commonComponent/CustomText/Textfield';
import Upload_Img from '../../../../../assets/images/uploadImg.svg';
import TypographySubTitle from '../../../../../components/commonComponent/CustomText/Typography';

export const Upload = (props: any) => {
  const progressObj = {
    tinNumber: false,
    panNumber: false,
  };
  const [danger, setDanger] = useState(props.danger);
  const [progress, setProgress] = useState(0);
  const [progressCheck, setProgressCheck] = useState(progressObj);
  // const handleChange = function (value: boolean,type:string) {
  //   // setProgressCheck((prev)=>({...prev,[type]:value}))
  //   setProgress(1);
  // };

  const handleInput = (e: any) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      console.log('success', e.target.files);
      setProgress(1);
    }
  };
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress !== 0) {
        setProgress((oldProgress) => {
          // if (oldProgress === 100) {
          //   return 0;
          // }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Box
            sx={{
              width: '423px',
              display: 'flex',
              border:
                progress !== 100
                  ? '2px dashed #f3f3f3'
                  : danger
                  ? '2px dashed #FDF1F2'
                  : '2px dashed #F1F9F3',
              borderColor: '#D2D2D3',
              backgroundColor:
                progress !== 100 ? '#f3f3f3' : danger ? '#FDF1F2' : '#F1F9F3',
              borderRadius: '4px',
              height: '52px',
              marginTop: '8px',
              paddingY: '5px',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Button
                // onClick={()=>handleChange(true,'tinNumber')}
                component="label"
              >
                <img src={Upload_Img} />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleInput}
                />
              </Button>
            </Box>
            <Box sx={{ paddingY: '3px' }}>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color:
                    progress !== 100
                      ? '#0662B7'
                      : danger
                      ? '#E63946'
                      : '#32A64D',
                }}
              >
                {props.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  letterSpacing: '0.004em',
                  color:
                    progress !== 100 ? 'grey' : danger ? '#F18F96' : '#8BCD9A',
                }}
              >
                Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
              </Typography>
              {progress == 0 ? (
                ''
              ) : (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    color={'secondary'}
                    sx={{
                      backgroundColor: '#E6E7E7',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor:  progress !== 100
                              ? 'secondary'
                              : danger
                              ? '#E63946'
                              : '#8BCD9A', 
                      }
                    }}  
                  />
                </Box>
              )}
            </Box>
          </Box>
          {progress !== 100 ? (
            ''
          ) : danger ? (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                sx={{ fontSize: '10px', fontWeight: '400', color: '#E63946' }}
              >
                Wrong format!, Please re-upload the correct format file
              </Typography>
            </Box>
          ) : (
            ''
          )}
          {/* {danger ?
        
        (<Box sx={{display:'flex',justifyContent:'flex-end'}} >
            <Typography sx={{ fontSize: '10px', fontWeight: '400',color:'#E63946' }}>
              Wrong format!, Please re-upload the correct format file
            </Typography>
          </Box>  ):""
         } */}
        </Box>
      </Box>
    </Box>
  );
};
