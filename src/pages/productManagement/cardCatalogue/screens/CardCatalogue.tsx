import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import './cardCateloge.scss';
import { useNavigate, json, useLoaderData } from 'react-router-dom';

// MUI components
import {
  MenuItem,
  Checkbox,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  Divider,
  SelectChangeEvent,
  Menu,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Common components
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import SelectDropdown from '../../../../components/commonComponent/CheckboxSelectDropdown';
import TypoText from '../../../../components/commonComponent/CustomText/Textfield';
import GroupButton from '../../../../components/commonComponent/GroupButton/GroupButton';
import ListTable from '../../../../components/commonComponent/commonListTable/commonListTable';

// services
import {
  getCardDropdownData,
  getCardList,
} from '../../../../services/cardCatalogueServices';

// Assets
import Surrogate_icon from '../../../../assets/images/surrogateIcon.svg';
import Pause_icon from '../../../../assets/images/pauseIcon.svg';
import Edit_icon from '../../../../assets/images/editIcon.svg';
import Resume_icon from '../../../../assets/images/resumeIcon.svg';
import Email_Icon from '../../../../assets/images/emailIcon.svg';
import Download_Icon from '../../../../assets/images/downloadIcon.svg';
import Info_Icon from '../../../../assets/images/info_icon.svg';

// Utils and constants
import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';
import UnfoldMoreIcon from '../../../../assets/icons/sortArrow.svg';
import { getCamelCaseFeatureName } from '../../../../utils/getCamelcaseFeatureName';
import { dropdownTypes } from '../card.const';

// Component Loader

export async function cardCatalogueLoader() {
  // get card list
  const cardList = await getListOfCards({ page: 0, size: 10 });

  // get table filter dropdown
  const temp = dropdownTypes.map(async (type: any) => {
    const payload = {
      dropDown: type.name,
    };
    const result = (await getDropdownOptions(payload)) as any;
    const dropdownObj = {
      name: type.name,
      options: result.options ? result.options : result.error,
      payloadKey: getCamelCaseFeatureName(type.name.toLowerCase()),
      selectedValues: ['ALL'],
      label: type.label,
    };
    return dropdownObj;
  });
  const cardListFilters = await Promise.all(temp);

  // get table tabs
  // const tabPayload = {
  //   dropDown: 'CARD_TYPE',
  // };
  // const tabs = (await getDropdownOptions(tabPayload)) as any;

  return json(
    {
      cardList,
      cardListFilters,
      //  tabs: tabs.options
    },
    { status: 200 }
  );
}

// API methods

const getDropdownOptions = async (payload: any) => {
  let res = {};
  await getCardDropdownData(payload)
    .then((response) => {
      const result = response.data?.result;
      if (result?.cardAddDropdown && Array.isArray(result.cardAddDropdown)) {
        res = {
          options: [{ code: 'ALL', name: 'ALL' }, ...result.cardAddDropdown],
        };
      }
    })
    .catch((err) => {
      res = { error: err.response.data };
    });
  return res;
};

const getListOfCards = async (payload: any) => {
  let res = {};
  await getCardList(payload)
    .then((response) => {
      res = response.data ? response.data : {};
    })
    .catch((err) => {
      console.log(err);
      res = { error: err.response.data };
    });
  return res;
};

export interface cardCatalogueFilterInterface {
  label?: string;
  option?: Array<object>;
}

export interface dataHeaderList {
  id: string;
  cardName: string;
  productID: string;
  businessID: string;
  cardMode: string;
  cardCategory: string;
  cardStatus: string;
  more?: string;
}

export interface dataList {
  id: number;
  cardName: string;
  productID: number;
  businessID: number;
  cardMode: string;
  cardCategory: string;
  cardStatus: string;
  more?: string;
}

function createData(
  id: number,
  cardName: string,
  productID: number,
  businessID: number,
  cardMode: string,
  cardCategory: string,
  cardStatus: string,
  more: string
) {
  return {
    id,
    cardName,
    productID,
    businessID,
    cardMode,
    cardCategory,
    cardStatus,
    more,
  };
}

const tableHeaderData = [
  {
    id: 'ID',
    cardName: 'Card Name',
    productID: 'Product ID',
    businessID: 'Business ID',
    cardMode: 'Card Mode',
    cardCategory: 'Card Category',
    cardStatus: 'Card Status',
    // more: 'More',
  },
];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 0, 2),
  },
}));

export const CardCatalogue = () => {
  const navigate = useNavigate();
  const [surrogateSelection, setSurrogateSelection] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);
  const [resumeSuccessModal, setResumeSuccessModal] = useState(false);
  const [resumeRemoveModal, setResumeRemoveModal] = useState(false);
  const [surrogateSuccessSelection, setSurrogateSuccessSelection] =
    useState(false);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  const [pauseMethods, setPauseMethods] = useState('Pause Now');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);
  const [surrogateMethod, setSurrogateMethod] = useState('Assign Surrogate');
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);

  const [editModal, setEditModal] = useState(false);

  //Table
  const [cardList, setCardList] = useState([]);
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageNumber: 0,
  });
  const [totalCount, setTotalCount] = useState({
    totaLNoOfRecords: 0,
    totalNoOfPages: 0,
  });
  const [ascending, setAscending] = useState<boolean>(true);
  const [selected, setSelected] = useState<number[]>([]);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const NORMAL_PAUSE = 'Pause Now';
  const SCHEDULED_PAUSE = 'Schedule Pause';

  const prepareCardList = (responseData: any) => {
    const result = responseData.result;
    if (result && result.content && Array.isArray(result.content)) {
      setCardList(result.content);
      setTotalCount({
        totaLNoOfRecords: result.totalElements,
        totalNoOfPages: result.totalPages,
      });
    } else if (responseData.error && responseData.error.error)
      console.log('API error! ', responseData.error.error);
  };

  const loaderData = useLoaderData() as any;
  console.log('loaderData', loaderData);

  const [filters, setFilters] = useState(loaderData.cardListFilters);

  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    } else fetchCardList();
  }, [pagination, filters]);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  const singleCardOpen = () => {
    navigate('/productManagement/cardCatalogue/singleupload');
  };

  const bulkCardOpen = () => {
    navigate('/productManagement/cardCatalogue/bulkupload');
  };

  const [cardMode, setCardMode] = React.useState<string[]>(['All']);

  const handleChange = (event: SelectChangeEvent<typeof cardMode>) => {
    const {
      target: { value },
    } = event;
    setCardMode(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const pauseMethodChange = (value: any) => {
    setPauseMethods(value);
  };
  const surrogateMethodChange = (value: any) => {
    setSurrogateMethod(value);
  };

  const [editSuccessModal, setEditSuccessModal] = useState(false);

  const closeModal = () => {
    setSurrogateSelection(false);
    setSurrogateSuccessSelection(false);
    setResumeModal(false);
    setResumeSuccessModal(false);
    setResumeRemoveModal(false);
    setShowPauseSuccessModal(false);
    setShowScheduledPauseSuccessModal(false);
    setShowPauseModal(false);
    setEditModal(false);
    setEditSuccessModal(false);
  };

  const successModal = () => {
    if (pauseMethods === NORMAL_PAUSE) {
      setShowPauseModal(false);
      setShowPauseSuccessModal(true);
      console.log('success');
    }
    if (pauseMethods === SCHEDULED_PAUSE) {
      setShowPauseModal(false);
      setShowScheduledPauseSuccessModal(true);
      console.log('fail');
    }
  };

  const handleSurrogateSubmit = () => {
    if (surrogateMethod === 'Assign Surrogate') {
      setSurrogateSuccessSelection(true);
      setSurrogateSelection(false);
    }
    if (surrogateMethod === 'Remove Surrogate') {
      setResumeRemoveModal(true);
      setSurrogateSelection(false);
    }
  };

  const handleResumeSuccess = () => {
    setResumeSuccessModal(true);
    setResumeModal(false);
  };

  const handleEditSuccess = () => {
    setEditModal(false);
    setEditSuccessModal(true);
  };

  const editModalFun = () => {
    setEditModal(true);
  };

  const product_label = [
    {
      id: 1,
      label: 'Payroll',
      defaultChecked: true,
    },
    {
      id: 2,
      label: 'Card For Card',
      defaultChecked: true,
    },
    {
      id: 3,
      label: 'CIBIL',
      defaultChecked: true,
    },
    {
      id: 4,
      label: 'AQB',
      defaultChecked: false,
    },
    {
      id: 5,
      label: 'Secured',
      defaultChecked: false,
    },
    {
      id: 6,
      label: 'RC Surrogate',
      defaultChecked: false,
    },
  ];

  const GroupButtonData = [
    {
      title: 'All',
      stausCode: 'ALL',
    },
    {
      title: 'Activated',
      statusCode: 'ACTIVE',
    },
    {
      title: 'Deactivated',
      statusCode: 'IN_ACTIVE',
    },
    {
      title: 'Saved',
      statusCode: 'DRAFT',
    },
  ];

  //Table
  const handleSortByName = () => {
    setAscending(!ascending);
  };

  // const handleSortById = () => {
  //   setIdSorting(!idSorting);
  // };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = cardList?.map((n: any) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (id: number) => {
    const res = selected.indexOf(id);
    if ((res && res !== -1) || res === 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleClickCheckbox = (id: number) => {
    const result = isSelected(id);
    let selectedData = selected;
    if (result) {
      const index = selected.indexOf(id);
      selectedData.splice(index, 1);
      setSelected([...selectedData]);
    } else {
      setSelected([...selectedData, id]);
    }
  };

  const onTabStatusChange = (item: any) => {
    let dropdownFilters = [...filters];

    dropdownFilters = dropdownFilters.map((filter: any) => {
      if (filter.payloadKey === 'cardStatus') {
        filter.selectedValues = [item.statusCode];
      }
      return filter;
    });
    setFilters(dropdownFilters);
  };

  const column = [
    {
      title: '',
      dataIndex: 'id',
      key: 'checkBox',
      width: '70px',
      headerRender: () => {
        return (
          <Checkbox
            color={'secondary'}
            indeterminate={
              selected.length > 0 && selected.length < cardList.length
            }
            checked={cardList.length > 0 && selected.length === cardList.length}
            onChange={handleSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        );
      },
      render: (_: string, row: any, index: number) => {
        const isItemSelected = isSelected(row.id);
        // setIsItem(isItemSelected);
        console.log('isItemSelected', isItemSelected);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <Checkbox
            color={'secondary'}
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId,
            }}
            onChange={() => handleClickCheckbox(row.id)}
          />
        );
      },
    },
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (_: string, row: any, index: number) => {
        return <Stack>{index + 1}</Stack>;
      },
    },
    {
      title: 'Card Name',
      dataIndex: 'cardName',
      key: 'cardName',
      headerRender: (text: string) => {
        return (
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <>{text}</>
            <IconButton onClick={() => handleSortByName()}>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
    },
    {
      title: 'Product ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Business ID',
      dataIndex: 'business',
      key: 'business',
    },

    {
      title: 'Card Category',
      dataIndex: 'cardCategory',
      key: 'cardCategory',
      render: (_: string, row: any, index: number) => {
        const cardCategoryFilter = filters.find(
          (filter: any) => filter.payloadKey === 'cardCategory'
        );
        let selectedOption = row.cardCategory;
        if (cardCategoryFilter) {
          selectedOption = cardCategoryFilter.options?.find(
            (option: any) => option.code === row.cardCategory
          )?.name;
        }
        return <Stack>{selectedOption}</Stack>;
      },
    },

    {
      title: 'Card Status',
      dataIndex: 'cardStatus',
      key: 'cardStatus',
      render: (_: string, row: any, index: number) => {
        const cardStatusFilter = filters.find(
          (filter: any) => filter.payloadKey === 'cardStatus'
        );
        let selectedOption = row.cardStatus;
        if (cardStatusFilter) {
          selectedOption = cardStatusFilter.options?.find(
            (option: any) => option.code === row.cardStatus
          )?.name;
        }
        return (
          <Stack
            sx={{
              color: selectedOption ? checkTagStatus(selectedOption).color : '',
            }}
          >
            {selectedOption}
          </Stack>
        );
      },
    },
    {
      title: 'More',
      dataIndex: 'id',
      key: 'more',
      render: () => {
        return (
          <>
            <Stack
              id="more-button"
              onClick={handleClick}
              aria-controls={open ? 'more-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{ padding: '5px', borderBottom: 'none', cursor: 'pointer' }}
            >
              <MoreVertIcon />
            </Stack>
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
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem
                // onClick={() => handleClose()}
                onClick={() => {
                  handleClose();
                  navigate('/productManagement/cardCatalogue/singleupload', {
                    state: {
                      isEditable: false,
                    },
                  });
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                View
              </MenuItem>
              <MenuItem
                // onClick={handleClose}
                onClick={() => {
                  handleClose();
                  navigate('/productManagement/cardCatalogue/singleupload', {
                    state: {
                      isEditable: true,
                    },
                  });
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                Edit
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  const setSelectedDropdownValue = (
    selectedValues: Array<String>,
    selectedDropdown: any
  ) => {
    let dropdownFilters = [...filters];
    dropdownFilters = dropdownFilters.map((filter: any) => {
      if (filter.name === selectedDropdown.name) {
        filter.selectedValues = selectedValues;
      }
      return filter;
    });
    setFilters(dropdownFilters);
  };

  const fetchCardList = async () => {
    const payload = {
      page: pagination.pageNumber,
      size: pagination.pageSize,
    } as any;
    filters.forEach((filter: any) => {
      if (!filter.selectedValues.includes('ALL'))
        payload[filter.payloadKey] = filter.selectedValues;
    });
    const result = await getListOfCards(payload);
    prepareCardList(result);
  };

  // Pagination methods

  const onPageChange = (pageNo: number) => {
    setPagination({
      ...pagination,
      pageNumber: pageNo,
    });
  };

  const onPageSizeChange = (size: number) => {
    if (size === -1) {
      setPagination({
        ...pagination,
        pageSize: totalCount.totaLNoOfRecords,
      });
    } else
      setPagination({
        ...pagination,
        pageSize: size,
      });
  };

  return (
    <Stack>
      <Stack>
        <Box className="cardHeader">
          <Box>
            <Typography
            // sx={{ display: 'flex', justifyContent: 'flex-start' }}
            // variant="body1"
            // color="textPrimary"
            >
              Card Catalogue
            </Typography>
            <TypographyInfo title="Manage card information from here" />
          </Box>
          <Box>
            <Button
              sx={{ textTransform: 'capitalize', backgroundColor: '#0662B7' }}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              // endIcon={<ExpandMoreIcon />}
              aria-controls={openCardMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openCardMenu ? 'true' : undefined}
              onClick={handleCardMenuClick}
              id="basic-button"
            >
              Add New Card{' '}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openCardMenu}
              onClose={handleCardMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={singleCardOpen}>Single Card Upload</MenuItem>
              <MenuItem onClick={bulkCardOpen}>Bulk Card Upload</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box className="body1">
          <Box className="container1">
            <TypoText title="Card List" />
            <img className="img1" src={Info_Icon} alt="" />
            <TypographyInfo title="Filter cards by mode/status/category/surrogate here." />
          </Box>
          <Divider />

          <Box className="bodyBox">
            <Grid container spacing={2}>
              {filters?.map((eachItem: any, index: number) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Typography className="dropdown-label">
                      {eachItem?.label}
                    </Typography>
                    <SelectDropdown
                      options={eachItem?.options}
                      sendSelectedValues={(selectedValues: Array<String>) =>
                        setSelectedDropdownValue(selectedValues, eachItem)
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box className="boxBtn">
            <Button
              sx={{
                textTransform: 'capitalize',
                fontSize: '14px',
                fontWeight: 500,
              }}
              color="secondary"
              variant="outlined"
            >
              Reset
            </Button>
            <Button
              sx={{ textTransform: 'capitalize' }}
              color="secondary"
              variant="contained"
              onClick={fetchCardList}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: 4,
              backgroundColor: 'white',
              paddingY: 2,
            }}
          >
            <Box>
              <Typography>Card Details</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: 2,
              }}
            >
              <Button>
                <img src={Download_Icon} alt="d" />
              </Button>
              <Button>
                <img src={Email_Icon} alt="email" />
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginX: 3 }} />

          <Box className="body2">
            <Stack direction="row" spacing={2} sx={{ margin: '30px 0px' }}>
              <Button
                className="btn"
                variant="contained"
                color="secondary"
                disabled
                onClick={() => setResumeModal(true)}
              >
                <IconButton className="icon">
                  <img
                    src={Resume_icon}
                    alt="resumeIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                Resume card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btn"
                onClick={() => setShowPauseModal(true)}
                disabled
              >
                <IconButton className="icon">
                  <img
                    src={Pause_icon}
                    alt="pauseIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                pause card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btn"
                disabled
                onClick={() => setEditModal(true)}
              >
                <IconButton className="icon">
                  <img src={Edit_icon} alt="edit icon" />
                </IconButton>
                edit card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btn"
                disabled
                onClick={() => setSurrogateSelection(true)}
              >
                <IconButton className="icon">
                  <img
                    src={Surrogate_icon}
                    alt="surrogateIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                surrogate card selection
              </Button>
            </Stack>
            <Stack>
              <Box>
                <GroupButton
                  data={GroupButtonData}
                  onChange={onTabStatusChange}
                />
              </Box>
            </Stack>
          </Box>

          <Box className="tableBox">
            <ListTable
              column={column}
              data={cardList}
              isItemSelected={selected}
              selectedKey="id"
              pagination={{
                ...pagination,
                ...totalCount,
                onPageChange: onPageChange,
                onPageSizeChange: onPageSizeChange,
              }}
            />
          </Box>
        </Box>
      </Stack>

      {surrogateSelection && (
        <CustomModal
          openSuccess={surrogateSelection}
          handleCloseSuccess={closeModal}
          title={'Surrogate Selection'}
          handleSuccess={handleSurrogateSubmit}
          pause_content={'You can assign or remove surrogate.'}
          radioValuOne={'Assign Surrogate'}
          radioValuTwo={'Remove Surrogate'}
          close={'Close'}
          submit={'Assign'}
          pauseMethodChecking={surrogateMethodChange}
          product_label={product_label}
        />
      )}
      {surrogateSuccessSelection && (
        <CustomModal
          openSuccess={surrogateSuccessSelection}
          handleCloseSuccess={closeModal}
          successModalTitle={'Assign - Surrogate'}
          successModalMsg={
            'Your action of Assign Surrogate request of Payroll , Card For Card, and CIBIL were successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {resumeModal && (
        <CustomModal
          openSuccess={resumeModal}
          handleCloseSuccess={closeModal}
          handleSuccess={handleResumeSuccess}
          title={'Card - Resume Now'}
          pause_content={'You can resume your card from here.'}
          textarea_title={'Add Remarks'}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          close={'Close'}
          submit={'Submit'}
        />
      )}
      {resumeSuccessModal && (
        <CustomModal
          openSuccess={resumeSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card - Resume'}
          successModalMsg={
            'Your action for resuming the card request Surrogate was successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {resumeRemoveModal && (
        <CustomModal
          openSuccess={resumeRemoveModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Remove - Surrogate'}
          successModalMsg={
            'Your action of Assign Surrogate request of Payroll , Card For Card, and CIBIL were successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={closeModal}
          handleSuccess={successModal}
          title={' Card - Pause'}
          pause_content={'You can pause it or perform a scheduled pause.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled pause.'
          }
          textarea_title={'Add Remarks'}
          radioValuOne={NORMAL_PAUSE}
          radioValuTwo={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={pauseMethodChange}
          close={'Close'}
          submit={'Pause'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
          pauseStatusKey={'Pause Now'}
        />
      )}
      {showPauseSuccessModal && (
        <CustomModal
          openSuccess={showPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Pause'}
          successModalMsg={
            ' Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer'
          }
          btn={' Close'}
        />
      )}
      {showScheduledPauseSuccessModal && (
        <CustomModal
          openSuccess={showScheduledPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Scheduled Pause'}
          successModalMsg={
            'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
          }
          btn={' Close'}
        />
      )}

      {editModal && (
        <CustomModal
          openSuccess={editModal}
          handleCloseSuccess={closeModal}
          handleSuccess={handleEditSuccess}
          title={'Card - Edit Pause'}
          pause_content={'You can Pause or Schedule Pause card here.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled Pause'
          }
          textarea_title={'Add Remarks'}
          radioValuOne={NORMAL_PAUSE}
          radioValuTwo={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={pauseMethodChange}
          close={'Close'}
          submit={'Pause'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
          pauseStatusKey={'Pause Now'}
        />
      )}

      {editSuccessModal && (
        <CustomModal
          openSuccess={editSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card - Edit Pause'}
          successModalMsg={
            'Your Edit pause request from DD/MM/YYYY to DD/MM/YYYY action has been successfully sent to Reviewer.'
          }
          btn={' Close'}
        />
      )}
    </Stack>
  );
};
