import {
  FormGroup,
  AccordionSummary,
  Grid,
  Box,
  FormControlLabel,
  Typography,
  Checkbox,
  AccordionDetails,
  Accordion,
  styled,
  Switch,
  Divider,
} from '@mui/material';
import './style.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: 'none', // this styles directly apply to accordion
    border: 'none',
    padding: '0',
    margin: '0',
    '.MuiAccordionDetails-root': {},
    '.MuiAccordionSummary-root': {}, // this apply to Summary
    '.MuiAccordionSummary-content': {
      margin: '0',
      height: '48px',
      alignItems: 'center',
      padding: '10px',
    },
    '.css-1my56n0-MuiButtonBase-root-MuiAccordionSummary-root': {
      backgroundColor: '#F3F3F4',
    },
  };
});

type props = {
  data: Array<any>;
  isViewPage: boolean;
};

export const AccordianLayover = ({ data, isViewPage }: props) => {
  const [categories, setCategories] = useState(data);

  const handleCheckboxClick = (index: number, id: number, checked: boolean) => {
    let updatedList = categories?.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item
    });
    setCategories(updatedList);
  };

  const handleSubModuleSwitch = (index: number, id: number, checked: boolean, index2: number, id2: number) => {
    let updatedList = categories.map((item:any) => {
      if (item.id === id) {
        let data = item.data.map((item2:any) => {
          if(item2.id === id2){
            return { ...item2, isSwitched: !item2.isSwitched }; //gets everything that was already in item, and updates "done"
          }
          return item2;
        })
        return {...item, data: data};
      }
      return item; // else return unmodified item
    });
    setCategories(updatedList);
  };

  const handleSubModuleCheckbox =(index: number, id: number, checked: boolean, id2: number ,  id3: number) => {
    let updatedList = categories.map((item:any) => {
      if (item.id === id) {
        let data = item.data.map((item2:any) => {
          if(item2.id === id2){
              let items = item2.items.map((item3:any) => {
                if(item3.id === id3){
                  return { ...item3, isChecked: !item3.isChecked }; //gets everything that was already in item, and updates "done"
                }
                return item3;
              })
            return { ...item2, items: items }; //gets everything that was already in item, and updates "done"
          }
          return item2;
        })
        return {...item, data: data};
      }
      return item; // else return unmodified item
    });
    setCategories(updatedList);
  };

  return (
    <FormGroup>
      {categories?.map((item: any, index) => {
        return (
          <CustomAccordion onClick={(event) => event.stopPropagation()}>
            <AccordionSummary
              sx={{
                '.css-o4b71y-MuiAccordionSummary-content': {
                  margin: '0',
                  backgroundColor: item.isChecked ? '#F3F3F4' : 'white',
                },
                padding: '0',
                '.css-1kua6lf-MuiPaper-root-MuiAccordion-root': {
                  backgroundColor: item.isChecked ? '#F3F3F4' : 'white',
                },
              }}
              expandIcon={
                item.isExpanded ? (
                  <ExpandMoreIcon
                    sx={{ color: '#0662B7', pointerEvents: 'auto' }}
                  />
                ) : null
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container item key={item.id} className="grid-style">
                {' '}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '8px',
                  }}
                >
                  <FormControlLabel
                  disabled={isViewPage}
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    label={
                      <Typography sx={{ fontSize: '14px' }}>
                        {item.label}
                      </Typography>
                    }
                    control={
                      <Checkbox
                        onChange={(e) =>
                          handleCheckboxClick(index, item.id, e.target.checked)
                        }
                        checked={item.isChecked}
                        color="secondary"
                      />
                    }
                  />
                </Box>
              </Grid>
            </AccordionSummary>
            {item.isExpanded && (
              <AccordionDetails>
                <Grid container spacing={4}>
                  {item?.data?.map((item2: any, index2: any) => {
                    return (
                      <Grid xs={4} item key={item2.id}>
                        <Box
                          sx={{
                            boxShadow: '0px 1px 2px 1px rgba(21, 21, 21, 0.1)',
                            borderRadius: '8px',
                            paddingY: '14px',
                            height: '100%',
                          }}
                        >
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={item2.isSwitched}
                                  disabled={isViewPage}
                                  color="secondary"
                                  sx={{ marginLeft: '26px' }}
                                  onChange={(e) =>
                                     handleSubModuleSwitch(index,item.id, e.target.checked, index2, item2.id)
                                  }
                                />
                              }
                              label={item2.innerTitle}
                            />
                            <Divider
                              sx={{
                                marginTop: '17px',
                                borderColor: '#F0F2F5',
                              }}
                            />

                            {item2?.items?.map((item3: any, index: any) => {
                              return (
                                <Grid item key={item3.id}>
                                  {' '}
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      ml: 3.5,
                                    }}
                                  >
                                    <FormControlLabel
                                      sx={{ marginBottom: '5px' }}
                                      label={
                                        <Typography sx={{ fontSize: '14px' }}>
                                          {item3.label}
                                        </Typography>
                                      }
                                      control={
                                        <Checkbox
                                            onChange={(e) =>
                                              handleSubModuleCheckbox(index,item.id, e.target.checked, item2.id , item3.id)
                                            }
                                          disabled={isViewPage}
                                          checked={item3.isChecked}
                                          color="secondary"
                                        />
                                      }
                                    />
                                  </Box>
                                </Grid>
                              );
                            })}
                          </FormGroup>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            )}
          </CustomAccordion>
        );
      })}
    </FormGroup>
  );
};
