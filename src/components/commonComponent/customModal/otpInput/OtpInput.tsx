import React, { useMemo } from 'react';
import useOTP from '../../../../pages/login/otp/otpInput/useOTP';
import Input from './Input';

interface Props {
  OTPLength: number;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: number;
  onChange?: Function;
  otpType?: string;
  secure?: boolean;
  className?: string;
  inputClassName?: string;
  inputStyles?: object;
  style?: object;
}

const OtpInput: React.FC<Props> = (props) => {
  const {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  } = useOTP({
    autoFocus: props.autoFocus,
    value: props.value,
    otpType: props.otpType,
    onChange: props.onChange,
    OTPLength: props.OTPLength,
  });

  const renderInputs = useMemo(() => {
    const otp = getOtpValue();
    const inputs = [];
    for (let index = 0; index < props.OTPLength; index++) {
      inputs.push(
        <Input
          className={props.inputClassName}
          inputStyles={{ ...props.inputStyles }}
          key={index}
          focus={activeInput === index}
          value={otp[index]}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onInput={handelOnInput}
          onPaste={(e) => handleOnPaste(e)}
          onInputFocus={onInputFocus}
          index={index}
          disabled={props.disabled ? props.disabled : false}
          autoFocus={props.autoFocus}
          secure={props.secure}
        />
      );
    }

    return inputs;
  }, [
    getOtpValue,
    props.OTPLength,
    props.inputClassName,
    props.inputStyles,
    activeInput,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
    props.disabled,
    props.autoFocus,
    props.secure,
  ]);

  return (
    <div
      style={{ display: 'flex', ...props.style }}
      className={`${props.className}`}
    >
      {renderInputs}
    </div>
  );
};

OtpInput.defaultProps = {
  className: '',
  inputClassName: '',
  OTPLength: 4,
  disabled: false,
  secure: false,
  autoFocus: false,
  value: 0,
  otpType: 'any',
  inputStyles: {},
  style: {},
};

export default OtpInput;
