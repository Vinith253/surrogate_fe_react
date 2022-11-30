// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormGroup,
//   Grid,
//   IconButton,
//   InputBase,
//   Popover,
//   Stack,
//   Typography,
// } from '@mui/material';
// import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
// import './style.scss';
// import Edit_icon from '../../../../assets/icons/edit_scheduled_pause_icon.svg';
// import { review_user_data } from '../../../userManagement/roleCreation/screens/AuthorisationLevel/authorisation.const';
// import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
// import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';
// import { useNavigate } from 'react-router-dom';
// import dropDown_icon from '../../../../assets/icons/dropDown_icon.svg';
// import SearchIcon from '@mui/icons-material/Search';

export const ReviewerApprover = () => {
  // const [edit, setEdit] = useState(false);
  // const navigate = useNavigate();
  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
  //   null
  // );

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  return (
    <div>ReviewerApprover</div>
    // <Stack className="profileReviewerApproverContainer">
    //   <Stack className="profileReviewerContainerHeaderMain">
    //     <Stack className="profileReviewerHeaderContainer">
    //       <Stack className="profileReviewerHeaderSubContainer">
    //         <Stack className="profileReviewerHeaderTitle">
    //           <ScreenHeader
    //             title="Reviewer & Approver"
    //             info="List of all reviewers and approvers pertaining to each module."
    //             showBackButton={false}
    //           />
    //         </Stack>
    //         {edit ? (
    //           <></>
    //         ) : (
    //           <>
    //             <Stack className="profileReviewerHeaderStatus">
    //               <Button
    //                 variant="text"
    //                 className="profileReviewerHeaderButton"
    //                 sx={{ color: '#0662B7', fontSize: '14px' }}
    //                 onClick={() => setEdit(true)}
    //               >
    //                 <IconButton>
    //                   <img
    //                     src={Edit_icon}
    //                     alt=""
    //                     style={{
    //                       filter:
    //                         'invert(26%) sepia(97%) saturate(1278%) hue-rotate(190deg) brightness(92%) contrast(101%)',
    //                     }}
    //                   />
    //                 </IconButton>
    //                 Edit
    //               </Button>
    //             </Stack>
    //           </>
    //         )}
    //       </Stack>
    //     </Stack>
    //   </Stack>
    //   <Stack
    //     className="profileReviewerApproverTableContainer"
    //     sx={{ margin: edit ? '30px 0 80px 0' : '30px 0' }}
    //   >
    //     {review_user_data.map((item: any, index: number) => {
    //       return (
    //         <Stack className="profileReviewerApproverTableSubContainer">
    //           <Stack className="profileReviewerApproverTable">
    //             <Stack className="profileReviewerApproverTableHeader">
    //               {item.module_name}
    //             </Stack>
    //             <Stack className="profileReviewerApproverTableSubHeader">
    //               <Stack className="profileSubModule1" sx={{ width: '40%' }}>
    //                 {item.sub_modules}
    //               </Stack>
    //               <Stack className="profileSubModule2" sx={{ width: '60%' }}>
    //                 <Stack sx={{ width: '50%' }}>{item.reviewer}</Stack>
    //                 <Stack sx={{ width: '50%' }}>{item.approver}</Stack>
    //               </Stack>
    //             </Stack>
    //             {item.sub_module.map((items: any, index: number) => {
    //               return (
    //                 <Stack className="profileReviewerApproverTableData">
    //                   <Stack
    //                     sx={{
    //                       width: '40%',
    //                       borderRight: '1px solid #F0F2F5',
    //                       borderBottom: '1px solid #D7D8D8',
    //                     }}
    //                   >
    //                     <Typography
    //                       className="profileReviewerApproverSubTitle"
    //                       sx={{ padding: '18px 15px' }}
    //                     >
    //                       {items.sub_module_name}
    //                     </Typography>
    //                   </Stack>
    //                   <Stack
    //                     sx={{
    //                       display: 'flex',
    //                       flexDirection: 'row',
    //                       justifyContent: 'space-between',
    //                       width: '60%',
    //                     }}
    //                   >
    //                     <Stack
    //                       className="profileReviewerApproverModelCount"
    //                       sx={{
    //                         width: '50%',
    //                         borderRight: '1px solid #F0F2F5',
    //                         borderBottom: '0.2px solid #D7D8D8',
    //                       }}
    //                     >
    //                       {items?.sub_module_data?.reviewer_data.map(
    //                         (items: any, index: number) => {
    //                           return (
    //                             <Stack
    //                               sx={{ borderBottom: '0.2px solid #D7D8D8' }}
    //                               key={index}
    //                             >
    //                               {edit ? (
    //                                 <Stack>
    //                                   <Button
    //                                     sx={{
    //                                       display: 'flex',
    //                                       flexDirection: 'row',
    //                                       justifyContent: 'space-between',
    //                                       alignItems: 'center',
    //                                       cursor: 'pointer',
    //                                     }}
    //                                   >
    //                                     <Typography
    //                                       sx={{ padding: '18px 15px' }}
    //                                       className="profileReviewerApproverSubTitle"
    //                                     >
    //                                       {items.user_name}
    //                                     </Typography>
    //                                     <Stack sx={{ padding: '0 15px' }}>
    //                                       <img src={dropDown_icon} alt="" />
    //                                     </Stack>
    //                                   </Button>
    //                                 </Stack>
    //                               ) : (
    //                                 <>
    //                                   <Typography
    //                                     sx={{ padding: '18px 15px' }}
    //                                     className="profileReviewerApproverSubTitle"
    //                                   >
    //                                     {items.user_name}
    //                                   </Typography>
    //                                 </>
    //                               )}
    //                             </Stack>
    //                           );
    //                         }
    //                       )}
    //                     </Stack>
    //                     <Stack
    //                       className="profileReviewerApproverModelCount"
    //                       sx={{
    //                         width: '50%',
    //                         borderBottom: '0.2px solid #D7D8D8',
    //                       }}
    //                     >
    //                       {items?.sub_module_data?.approver_data.map(
    //                         (items: any, index: number) => {
    //                           return (
    //                             <Stack
    //                               sx={{ borderBottom: '0.2px solid #D7D8D8' }}
    //                               key={index}
    //                             >
    //                               {edit ? (
    //                                 <Stack>
    //                                   <Button
    //                                     sx={{
    //                                       display: 'flex',
    //                                       flexDirection: 'row',
    //                                       justifyContent: 'space-between',
    //                                       alignItems: 'center',
    //                                       cursor: 'pointer',
    //                                     }}
    //                                     aria-describedby={id}
    //                                     onClick={handleClick}
    //                                   >
    //                                     <Typography
    //                                       sx={{ padding: '18px 15px' }}
    //                                       className="profileReviewerApproverSubTitle"
    //                                     >
    //                                       {items.user_name}
    //                                     </Typography>
    //                                     <Stack sx={{ padding: '0 15px' }}>
    //                                       <img src={dropDown_icon} alt="" />
    //                                     </Stack>
    //                                   </Button>
    //                                   <Popover
    //                                     id={id}
    //                                     open={open}
    //                                     anchorEl={anchorEl}
    //                                     onClose={handleClose}
    //                                     anchorOrigin={{
    //                                       vertical: 'bottom',
    //                                       horizontal: 'left',
    //                                     }}
    //                                   >
    //                                     <Stack
    //                                       sx={{
    //                                         width: '350px',
    //                                         padding: '10px 0',
    //                                       }}
    //                                     >
    //                                       <Stack>
    //                                         <FormGroup>
    //                                           <Stack>
    //                                             <Box className="reviewer-search-container">
    //                                               <Box className="search-box">
    //                                                 <InputBase
    //                                                   placeholder="Placeholder"
    //                                                   fullWidth={true}
    //                                                 />
    //                                                 <SearchIcon className="search-icon" />
    //                                               </Box>
    //                                             </Box>
    //                                             <Button
    //                                               onClick={() => {
    //                                                 handleClose();
    //                                               }}
    //                                               sx={{
    //                                                 fontSize: '0.9vw',
    //                                                 fontWeight: '600',
    //                                                 textTransform: 'none',
    //                                                 width: '100%',
    //                                                 justifyContent:
    //                                                   'flex-start',
    //                                               }}
    //                                             >
    //                                               Ashwini
    //                                             </Button>
    //                                           </Stack>
    //                                         </FormGroup>
    //                                       </Stack>
    //                                     </Stack>
    //                                   </Popover>
    //                                 </Stack>
    //                               ) : (
    //                                 <>
    //                                   <Typography
    //                                     sx={{ padding: '18px 15px' }}
    //                                     className="profileReviewerApproverSubTitle"
    //                                   >
    //                                     {items.user_name}
    //                                   </Typography>
    //                                 </>
    //                               )}
    //                             </Stack>
    //                           );
    //                         }
    //                       )}
    //                     </Stack>
    //                   </Stack>
    //                 </Stack>
    //               );
    //             })}
    //           </Stack>
    //         </Stack>
    //       );
    //     })}
    //   </Stack>

    //   {edit ? (
    //     <>
    //       <Box
    //         sx={{
    //           marginTop: '10px',
    //           backgroundColor: 'white',
    //           position: 'fixed',
    //           bottom: 0,
    //           right: 0,
    //           width: '100%',
    //           borderTop: '2px solid #f3f3f3 ',
    //           borderRadius: '8px',
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             display: 'flex',
    //             gap: 2,
    //             justifyContent: 'flex-end',
    //             padding: '10px 30px',
    //           }}
    //         >
    //           <BtnOutlined title="Cancel" onClick={() => navigate(-1)} />
    //           <BtnContained title="Save" onClick={() => navigate(-1)} />
    //         </Box>
    //       </Box>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </Stack>
  );
};
