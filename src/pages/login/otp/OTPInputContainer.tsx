import React from 'react';
import OTPInput from './otpInput';
import './otpInput/OTPReader.scss';

interface Props {
  otpValue: number;
  onOTPChange: Function;
  otpError: boolean;
  inputLength?: any;
  disabled?: boolean;
}
export default function App(props: Props) {
  const inputClassName = props.disabled
    ? 'otpInput-box disabled'
    : 'otpInput-box';

  return (
    <div>
      <OTPInput
        disabled={props.disabled}
        inputClassName={inputClassName}
        
        inputStyles={{
          color: '#1b2a71',
          margin: '0px 5px',
          height: '41px',
          width: '35px',
          fontWeight: '700',
          fontSize: '14px',
          textAlign: 'center',
          flexGrow: 1,
          borderRadius: '4px',
          border: props.otpError
            ? '1px solid red'
            : '1px solid rgba(187, 188, 188, 0.5)',
        }}
        value={props.otpValue}
        onChange={(e: boolean) => props.onOTPChange(e)}
        autoFocus
        OTPLength={props.inputLength ? props.inputLength : 6}
        otpType="number"
      />
    </div>
  );
}
