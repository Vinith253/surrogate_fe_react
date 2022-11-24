import * as React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { stackButtonInterface } from '../../../interface/Types';
import '../StackButton/stackButtonStyle.scss';
type props = {
  data?: Array<stackButtonInterface>;
  //   onChange?: void | undefined;
};

const StackButton = ({ data }: props) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  //   const [selectedStatus, setSeletedStatus] = React.useState(
  //     props?.selectedOption || null
  //   );

  const onClickAction = (item: any, index: number) => {
    setActiveIndex(index);
    // onChange(item);
  };

  return (
    <Box>
      <ButtonGroup
        variant="text"
        aria-label="outlined button group"
        className="buttonContainer"
        sx={{ backgroundColor: '#F3F3F3', padding: '3px' }}
        // onClick={onClickAction}
      >
        {data &&
          data.map((item: any, index: number) => {
            const activeClass = activeIndex === index ? 'activeButton' : '';
            return (
              <Button
                key={index}
                className={`buttonContainerTitle ${activeClass}`}
                sx={{}}
                value={item.title}
                onClick={() => onClickAction(item, index)}
              >
                {item.title}
              </Button>
            );
          })}
      </ButtonGroup>
    </Box>
  );
};
export default StackButton;
