import React from 'react';
import {
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  withStyles,
} from '@mui/material/styles';
// import Box from "@mui/material/Box";
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import YesBank from '../../assets/images/bank_axis_logo.svg';
import Home from '../../assets/icons/home_icon.svg';
import drop_up_arrow_icon from '../../assets/icons/drop_up_arrow_icon.svg';
import drop_down_arrow_icon from '../../assets/icons/drop_down_arrow_icon.svg';
import access_library from '../../assets/icons/access_library.svg';
import dashboard_icon from '../../assets/icons/dashboard_icon.svg';
import credit_rule_icon from '../../assets/icons/credit_rule_icon.svg';
import card_catalogue_icon from '../../assets/icons/card_catalogue_icon.svg';
import apply_credit_card_icon from '../../assets/icons/apply_credit_card_icon.svg';
import collape_icon from '../../assets/icons/collape_icon.svg';
import sales_icon from '../../assets/icons/sales_icon.svg';
import user_managemen_icon from '../../assets/icons/user_managemen_icon.svg';
import risk_management_icon from '../../assets/icons/risk_management_icon.svg';
import lms_icon from '../../assets/icons/lms_icon.svg';
import product_management_icon from '../../assets/icons/product_management_icon.svg';
import programme_management_icon from '../../assets/icons/programme_management_icon.svg';
import role_creation_icon from '../../assets/icons/roleCreation.svg';
import user_creation_icon from '../../assets/icons/userCreation.svg';
import org_structure_icon from '../../assets/icons/orgStructure.svg';
import branch_details_icon from '../../assets/icons/branchDetails.svg';
import retargeting_icon from '../../assets/icons/retargeting-icon.svg';
import lms_rule_icon from '../../assets/icons/lms-rule-icon.svg';
import risk_customer_report from '../../assets/icons/risk-customer-report.svg';

import profile_icon from '../../assets/icons/profile_icon.svg';
import profile_arrow_icon from '../../assets/icons/profile_arrow_icon.svg';
import Collapse from '@mui/material/Collapse';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import './Layout.scss';

const drawerWidth = 300;

const sideBarOptions = [
  { key: 1, content: 'HOME', path: '/', image: Home, subContent: [] },
  {
    key: 2,
    content: 'DASHBOARD',
    path: '/dashboard',
    image: dashboard_icon,
    subContent: [],
  },
  {
    key: 3,
    content: 'PRODUCT MNGMT.',
    path: '/productManagement',
    image: product_management_icon,
    subContent: [
      {
        data: 'Programme Mngmt.',
        path: '/productManagement/programmeManagement',
        img: programme_management_icon,
      },
      {
        data: 'Credit Rule',
        path: '/productManagement/creditRule',
        img: credit_rule_icon,
      },
      {
        data: 'Card Catalogue',
        path: '/productManagement/cardCatalogue',
        img: card_catalogue_icon,
      },
    ],
  },
  {
    key: 4,
    content: 'SALES',
    path: '/sales',
    image: sales_icon,
    subContent: [
      {
        data: 'Dashboard',
        path: '/sales/salesDashboard',
        img: programme_management_icon,
      },
      {
        data: 'Sales Report',
        path: '/sales/salesReport',
        img: credit_rule_icon,
      },
      {
        data: 'Performance Report',
        path: '/sales/performanceReport',
        img: card_catalogue_icon,
      },
    ],
  },
  {
    key: 5,
    content: 'APPLY CREDIT CARD',
    path: '/applyCreditCard',
    image: apply_credit_card_icon,
    subContent: [],
  },
  {
    key: 6,
    content: 'USER MNGMT.',
    path: '/userManagement',
    image: user_managemen_icon,
    subContent: [
      {
        data: 'Role Creation',
        path: '/userManagement/roleCreation',
        img: role_creation_icon,
      },
      {
        data: 'User Creation',
        path: '/userManagement/userCreation',
        img: user_creation_icon,
      },
      {
        data: 'Org Structure',
        path: '/userManagement/orgStructure',
        img: org_structure_icon,
      },
      // {
      //   data: 'Branch Details',
      //   path: '/userManagement/branchDetails',
      //   img: branch_details_icon,
      // },
    ],
  },
  {
    key: 7,
    content: 'LMS',
    path: '/lms',
    image: lms_icon,
    subContent: [
      {
        data: 'Dashboard',
        path: '/lms/dashboard',
        img: dashboard_icon,
      },
      {
        data: 'LMS Rule',
        path: '/lms/lmsRule',
        img: retargeting_icon,
      },
      {
        data: 'Re-Targeting',
        path: '/lms/retargeting',
        img: lms_rule_icon,
      },
    ],
  },
  {
    key: 8,
    content: 'RISK MNGMT.',
    path: '/risktManagement',
    image: risk_management_icon,
    subContent: [
      {
        data: 'Customer Reports',
        path: '/riskManagement/customerReports',
        img: risk_customer_report,
      },
    ],
  },
  {
    key: 9,
    content: 'ACCESS LIBRARY',
    path: '/accessLibrary',
    image: access_library,
    subContent: [],
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  // overflowX: "hidden",
  overflow: 'unset',
  backgroundColor: 'black',
  color: 'white',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'unset',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: 'black',
  color: 'white',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDivider-root': { borderColor: 'grey' },
  '& .MuiListItemIcon-root': { minWidth: '20px !important' },
  '& .MuiButtonBase-root-MuiListItemButton-root ': { padding: '0 4rem' },
  '& .MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root-MuiListItemButton-root':
    { padding: '0 4rem !important' },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Layout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const [openIndex, setOpenIndex] = React.useState(0);
  const [openList, setOpenList] = React.useState(false);
  const [checkIndex, setCheckIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuItemIndex, setMenuItemIndex] = React.useState(0);

  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickHandleProfile = () => {
    navigate('/profile');
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    // let value = !open;
    setOpen(!open);
    // callback(value);
  };
  const handleClick = (id: number) => {
    setOpenIndex(id);
    console.log('checkIndex', checkIndex);
    console.log('id', id);
    if (checkIndex === id) {
      setOpenList(!openList);
    } else {
      setOpenList(true);
    }
  };
  const listStyle = {
    display: 'block',
  };
  const badgeStyle = {
    '& .MuiBadge-badge': {
      // width: 8,
      // height: 13,
      // borderRadius: '50%',
      fontSize: '10px',
    },
  };

  // const handleClose = () => {};
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          background: '#F0F2F5',
        }}
      >
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ height: '10vh' }}>
            <IconButton sx={{ display: !open ? 'none' : 'block' }}>
              <img src={YesBank} alt="" />
            </IconButton>
            <IconButton onClick={handleDrawerClose}>
              <img
                src={theme.direction === 'rtl' ? collape_icon : collape_icon}
                style={{
                  // marginTop: "10px",
                  position: 'absolute',
                  top: '35px',
                  zIndex: 999999,
                  right: open ? '-145px' : '-50px',
                }}
                alt=""
              />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {sideBarOptions.map((text, index) => (
              <ListItem
                key={text.content}
                disablePadding
                sx={listStyle}
                onClick={() => setCheckIndex(text.key)}
              >
                {text.subContent.length === 0 && (
                  // <Link to={text.path}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                    component={NavLink}
                    to={text.path}
                    classes={({ isActive }: any) =>
                      isActive ? 'active' : 'inactive'
                    }
                    // onClick={() => setMenuItemIndex(text.key)}
                    // style={{
                    //   backgroundColor:
                    //     menuItemIndex === index + 1 ? '#0662B7' : '',
                    // }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <img src={text.image} alt="" />
                    </ListItemIcon>
                    {text.content === 'HOME' && (
                      <Badge
                        badgeContent={2}
                        color="error"
                        sx={badgeStyle}
                        overlap="circular"
                      >
                        <ListItemText
                          primary={text.content}
                          sx={{
                            opacity: open ? 1 : 0,
                            padding: '0 0.5rem',
                            color: 'white',
                          }}
                        />
                      </Badge>
                    )}
                    {text.content !== 'HOME' && (
                      <ListItemText
                        primary={text.content}
                        sx={{
                          opacity: open ? 1 : 0,
                          padding: '0 0.5rem',
                          color: 'white',
                        }}
                      />
                    )}
                  </ListItemButton>
                  // </Link>
                )}
                {text.subContent.length > 0 && (
                  <>
                    <ListItemButton
                      onClick={() => {
                        handleClick(text.key);
                      }}
                      sx={{
                        backgroundColor:
                          openList && openIndex === index + 1 ? '#4D4E50' : '',
                        '&:hover': {
                          backgroundColor:
                            openList && openIndex === index + 1
                              ? '#4D4E50'
                              : '',
                        },
                      }}
                    >
                      <ListItemIcon>
                        <img src={text.image} alt="" />
                      </ListItemIcon>
                      <ListItemText
                        primary={text.content}
                        sx={{
                          opacity: open ? 1 : 0,
                          paddingLeft: '36px',
                          color: 'white',
                        }}
                      />
                      {open && (
                        <img
                          src={
                            openList && openIndex === index + 1
                              ? drop_up_arrow_icon
                              : drop_down_arrow_icon
                          }
                          alt=""
                        />
                      )}
                    </ListItemButton>
                    {openIndex === index + 1 &&
                      open &&
                      text.subContent.length > 0 &&
                      text.subContent.map((subData) => {
                        return (
                          <ListItemButton
                            component={NavLink}
                            to={subData.path}
                            classes={({ isActive }: any) =>
                              isActive ? 'active' : 'inactive'
                            }
                            sx={{
                              padding: '0',
                              backgroundColor: 'rgba(111, 111, 111,.4)',
                            }}
                          >
                            <Collapse
                              in={openList}
                              timeout="auto"
                              unmountOnExit
                              sx={{
                                padding: '0 2.6rem',
                                // backgroundColor: 'grey',
                              }}
                            >
                              <List
                                component="div"
                                disablePadding
                                // sx={{ padding: '0 2.6rem' }}
                              >
                                {/* <Link to={subData.path}> */}
                                <ListItemButton
                                  sx={{ pl: 4 }}
                                  // component={NavLink}
                                  // to={subData.path}
                                  // classes={({ isActive }: any) =>
                                  //   isActive ? 'active' : 'inactive'
                                  // }
                                >
                                  <ListItemIcon sx={{ width: '2.5rem' }}>
                                    <img src={subData.img} alt="" />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={subData.data}
                                    sx={{
                                      paddingLeft: '8px',
                                      opacity: open ? 1 : 0,
                                      color: '#FFFFFF',
                                    }}
                                  />
                                </ListItemButton>
                                {/* </Link> */}
                              </List>
                            </Collapse>
                          </ListItemButton>
                        );
                      })}
                  </>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          sx={{
            width: '100%',
            // height: '100vh',
            // borderBottom: "2px solid"
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '10vh',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              borderBottom: '1px solid',
              boxShadow: '0 0 15px #aaaaaa',
              backgroundColor: 'white',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                letterSpacing: '0.2px',
                fontSize: '20px',
                fontWeight: '500',
                color: '#151515',
              }}
            >
              Surrogate Programme
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 20px',
                // borderBottom
                // borderColor: "success.light"
              }}
            >
              <Box className="search-container-layout">
                <Box className="search-box">
                  <SearchIcon className="search-icon" />
                  <InputBase placeholder="Search" fullWidth={true} />
                </Box>
              </Box>
              <Box style={{ marginRight: '40px' }}>
                <Typography
                  style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#151515',
                  }}
                >
                  Ashwin Kumar
                </Typography>
                <Typography
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: ' #4D4E50',
                  }}
                >
                  Surrogate Manager
                </Typography>
              </Box>

              {/* <IconButton
                sx={{
                  height: 45,
                  width: 45,
                }}
                onClick={() => setOpenMenu(!setOpenMenu)}
              >
                <img src={profile_icon} />
                <img src={profile_arrow_icon} style={{ padding: "0 10px" }} />
              </IconButton> */}
              <IconButton
                id="basic-button"
                sx={{
                  height: 45,

                  width: 45,
                }}
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleMenuClick}
              >
                <img src={profile_icon} alt="" />

                <img
                  src={profile_arrow_icon}
                  style={{ padding: '0 10px' }}
                  alt=""
                />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={onClickHandleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              // height: '90vh',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
