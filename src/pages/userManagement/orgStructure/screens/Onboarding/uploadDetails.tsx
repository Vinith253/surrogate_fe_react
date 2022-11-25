import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Upload } from './upload';
import LinearProgress from '@mui/material/LinearProgress';
import TypoText from '../../../../../components/commonComponent/CustomText/Textfield';
import Upload_Img from '../../../../../assets/images/uploadImg.svg';
import TypographySubTitle from '../../../../../components/commonComponent/CustomText/Typography';

export const UploadDetails = () => {
    const progressObj = {
        tinNumber:false,
        panNumber:false,
      }
  const [progress, setProgress] = useState(0);
  const [progressCheck,setProgressCheck]= useState(progressObj)
  const handleChange = function (value: boolean,type:string) {
    setProgressCheck((prev)=>({...prev,[type]:value}))
    setProgress(1);
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
      <Box sx={{ marginBottom: '20px', width: '280px' }}>
        <TypographySubTitle title="Registration Number (MSMED)" />
        <TypoText placeholder="Enter Registration Number" id="businessId" />
      </Box>

      
      

      <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
        <Box sx={{ width: '280px' }}>
          <TypographySubTitle title="TIN Number" />
          <TypoText placeholder="Enter TIN Number" id="businessId" />
        </Box>
        <Upload title='Attach Copy of TIN Number' />

        {/* <Box  >
        <Box
          sx={{
            width: '423px',
            display: 'flex',
            border: '2px dashed ',
            borderColor: '#D2D2D3',
            backgroundColor: progress === 100 ? '#F1F9F3' : '#D2D2D3',
            borderRadius: '4px',
            height: '45px',
            marginTop: '14px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Button onClick={()=>handleChange(true,'tinNumber')}>
              <img src={Upload_Img} />
            </Button>
          </Box>
          <Box sx={{ paddingY: '3px' }}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: progress === 100 ? '#32A64D' : '#0662B7',
              }}
            >
              Attach Copy Of TIN Number
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.004em',
                color: progress === 100 ? '#8BCD9A' : 'grey',
              }}
            >
              Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
            </Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color={progress === 100 ? 'success' : 'secondary'}
              />
            </Box>
          </Box>
          
        </Box>
        <Box sx={{display: progress=== 100 ? '':'none'}} >
        <Box sx={{display:'flex',justifyContent:'flex-end'}} >
            <Typography sx={{ fontSize: '10px', fontWeight: '400' }}>
              Wrong format!, Please re-upload the correct format file
            </Typography>
          </Box>
        </Box>

        </Box> */}

      </Box>

      <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
        <Box sx={{ width: '280px' }}>
          <TypographySubTitle title="GST Number" />
          <TypoText placeholder="Enter GST Number" id="businessId" />
        </Box>
        <Upload title='Attach Copy of GST Number' danger={true} />

        {/* <Box
          sx={{
            width: '423px',
            display: 'flex',
            border: '2px dashed ',
            borderColor: '#D2D2D3',
            backgroundColor: '#F3F3F3',
            borderRadius: '4px',
            height: '45px',
            marginTop: '14px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Button>
              <img src={Upload_Img} />
            </Button>
          </Box>
          <Box sx={{ paddingY: '3px' }}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#0662B7',
              }}
            >
              Attach Copy Of GST Number
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.004em',
                color: 'grey',
              }}
            >
              Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
            </Typography>
          </Box>
        </Box> */}
      </Box>

      <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
        <Box sx={{ width: '280px' }}>
          <TypographySubTitle title="PAN Number" />
          <TypoText placeholder="Enter PAN Number" id="businessId" />
        </Box>

          <Upload title='Attach Copy of PAN Number' danger={false}/>

        {/* <Box
          sx={{
            width: '423px',
            display: 'flex',
            border: '2px dashed ',
            borderColor: '#D2D2D3',
            backgroundColor: '#F3F3F3',
            borderRadius: '4px',
            height: '45px',
            marginTop: '14px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Button>
              <img src={Upload_Img} />
            </Button>
          </Box>
          <Box sx={{ paddingY: '3px' }}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#0662B7',
              }}
            >
              Attach Copy Of PAN Number
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.004em',
                color: 'grey',
              }}
            >
              Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
            </Typography>
          </Box>
        </Box> */}
      </Box>

      <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
        <Box sx={{ width: '280px' }}>
          <TypographySubTitle title="Shop & Establishment" />
          <TypoText placeholder="Enter Shop & Establishment" id="businessId" />
        </Box>

        <Upload title='Attach Copy of Shop & Establishment' />


        {/* <Box
          sx={{
            width: '423px',
            display: 'flex',
            border: '2px dashed ',
            borderColor: '#D2D2D3',
            backgroundColor: '#F3F3F3',
            borderRadius: '4px',
            height: '45px',
            marginTop: '14px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Button>
              <img src={Upload_Img} />
            </Button>
          </Box>
          <Box sx={{ paddingY: '3px' }}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#0662B7',
              }}
            >
              Attach Copy Of shop & Establishment
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.004em',
                color: 'grey',
              }}
            >
              Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
            </Typography>
          </Box>
        </Box> */}
      </Box>

      <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
        <Box sx={{ width: '280px' }}>
          <TypographySubTitle title="ESIC Registration No" />
          <TypoText placeholder="Enter ESIC Registration No" id="businessId" />
        </Box>

        <Upload title='Attach Copy of ESIC Registration No' />
        {/* <Box
          sx={{
            width: '423px',
            display: 'flex',
            border: '2px dashed ',
            borderColor: '#D2D2D3',
            backgroundColor: '#F3F3F3',
            borderRadius: '4px',
            height: '45px',
            marginTop: '14px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Button>
              <img src={Upload_Img} />
            </Button>
          </Box>
          <Box sx={{ paddingY: '3px' }}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#0662B7',
              }}
            >
              Attach Copy Of ESIC Registration No
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.004em',
                color: 'grey',
              }}
            >
              Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
            </Typography>
          </Box>
        </Box> */}
      </Box>

      <Box sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
        <Box sx={{ width: '280px' }}>
          <TypographySubTitle title="PF Registration No" />
          <TypoText placeholder="Enter PF Registration No" id="businessId" />
        </Box>

        <Upload title='Attach Copy of PF Registration No' />

        {/* <Box
          sx={{
            width: '423px',
            display: 'flex',
            border: '2px dashed ',
            borderColor: '#D2D2D3',
            backgroundColor: '#F3F3F3',
            borderRadius: '4px',
            height: '45px',
            marginTop: '14px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Button>
              <img src={Upload_Img} />
            </Button>
          </Box>
          <Box sx={{ paddingY: '3px' }}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#0662B7',
              }}
            >
              Attach Copy Of PF Registration No
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.004em',
                color: 'grey',
              }}
            >
              Upload file in PDF/JPEG/PNG formats with a maximum file size 2MB
            </Typography>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};
