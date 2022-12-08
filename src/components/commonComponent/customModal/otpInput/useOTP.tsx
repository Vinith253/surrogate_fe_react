import { useState } from 'react';

const UPPER_A_KEYCODE = 65;
const LOWER_Z_KEYCODE = 122;
const ZERO_KEYCODE = 48;
const NINE_KEYCODE = 57;

interface UseOtpArguments {
  value: any;
  otpType: any;
  onChange: any;
  autoFocus: any;
  OTPLength: any;
}
const useOTP = ({
  value,
  otpType,
  onChange,
  OTPLength,
  autoFocus,
}: UseOtpArguments) => {
  const [activeInput, setActiveInput] = useState(autoFocus ? 0 : -1);
  const getOtpValue = () => (value ? value.toString().split('') : []);
  const handleOtpChange = (otp: any) => {
    const otpValue = otp.join('');
    onChange(otpValue);
  };

  const focusInput = (input: any) => {
    const nextActiveInput = Math.max(Math.min(OTPLength - 1, input), 0);
    setActiveInput(nextActiveInput);
  };

  /**
   * @typedef {"next" | "prev"} FocusDirections
   * @param {FocusDirections} direction
   */
  const focusInputByDirection = (direction = 'next') => {
    focusInput(direction === 'next' ? activeInput + 1 : activeInput - 1);
  };

  const changeActiveInputValue = ([nextValue]: any) => {
    const otp = getOtpValue();
    otp[activeInput] = nextValue;
    handleOtpChange(otp);
  };

  const isValidateChar = (char: any) => {
    switch (otpType) {
      case 'number':
        return !(
          char.charCodeAt(0) > NINE_KEYCODE || char.charCodeAt(0) < ZERO_KEYCODE
        );
      case 'alpha':
        return !(
          char.charCodeAt(0) > LOWER_Z_KEYCODE ||
          char.charCodeAt(0) < UPPER_A_KEYCODE
        );
      case 'alphanumeric':
        return !(
          char.charCodeAt(0) > LOWER_Z_KEYCODE ||
          char.charCodeAt(0) < ZERO_KEYCODE
        );
      default:
        return true;
    }
  };

  const handleOnPaste = (e: any) => {
    e.preventDefault();
    const otp = getOtpValue();
    const clipboardData =
      process.env.NODE_ENV === 'test'
        ? e.target.value.slice(0, OTPLength - activeInput).split('')
        : e.clipboardData
            .getData('text/plain')
            .slice(0, OTPLength - activeInput)
            .split('');
    // eslint-disable-next-line no-plusplus
    for (let pos = 0; pos < OTPLength; ++pos) {
      if (pos >= activeInput && clipboardData.length > 0) {
        otp[pos] = clipboardData.shift();
      }
    }

    // Pass copied value through onChange rules
    const filteredOtpValue = [otp.length];
    let validCharIndex = 0;
    for (let charIndex = 0; charIndex < otp.length; ++charIndex) {
      if (isValidateChar(otp[charIndex])) {
        filteredOtpValue[validCharIndex] = otp[charIndex];
        validCharIndex++;
      }
    }

    handleOtpChange(filteredOtpValue);
  };

  const handleOnChange = (e: any) => {
    if (isValidateChar(e.target.value)) {
      changeActiveInputValue(e.target.value);
      focusInputByDirection('next');
    }
  };

  const handleOnKeyDown = (e: any) => {
    switch (e.key) {
      case 'Backspace':
        e.preventDefault();
        changeActiveInputValue('');
        focusInputByDirection('prev');
        break;
      case 'Delete':
        e.preventDefault();
        changeActiveInputValue('');
        break;
      case 'ArrowLeft':
        e.preventDefault();
        focusInputByDirection('prev');
        break;
      case 'ArrowRight':
        e.preventDefault();
        focusInputByDirection('next');
        break;
      default:
        break;
    }
  };

  const handelOnInput = (e: any) => {
    if (e.target.value.length > 1) {
      e.preventDefault();
      focusInputByDirection('next');
    }
  };

  const onInputFocus = (index: any, event: any) => {
    setActiveInput(index);
    event.target.select();
  };

  return {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  };
};

export default useOTP;
