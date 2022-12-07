import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { CommonStyle } from '../commonStyle/CommonStyle';

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

interface Props {
  time: number;
  callBackFunction: (data: number) => void;
}

const TimerComponent: React.FC<Props> = ({ time, callBackFunction }) => {
  const [state, setState] = React.useState<State>({
    time,
    seconds: Math.floor((time - 1) / 60),
    minutes: time - Math.floor((time - 1) / 60) * 60 - 1,
  });

  useEffect(() => {
    setTimeout(() => {
      if (state.time === 0) {
        return;
      }

      setState({
        time: state.time - 1,
        minutes: Math.floor((state.time - 1) / 60),
        seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
      });
      callBackFunction(state.time-1);
    }, 1000);
  }, [state.time]);

  return (
    <Typography sx={CommonStyle.otpTimerColor}>
      {`${state.minutes < 10 ? `0${state.minutes}` : state.minutes} : ${
        state.seconds < 10 ? `0${state.seconds}` : state.seconds
      }`}
    </Typography>
  );
};

export default TimerComponent;
