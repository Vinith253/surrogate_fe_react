import React, {
  useEffect,
  useRef,
  CSSProperties,
  ChangeEventHandler,
  KeyboardEventHandler,
  FormEventHandler,
  ClipboardEventHandler,
  FocusEventHandler,
} from 'react';

interface Props {
  className?: string;
  inputStyles?: CSSProperties;
  key?: number;
  focus?: boolean;
  value?: string | string[] | number;
  onChange?: ChangeEventHandler;
  onKeyDown?: KeyboardEventHandler;
  onInput?: FormEventHandler;
  onPaste?: ClipboardEventHandler;
  onInputFocus: Function;
  index?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  secure?: boolean;
  dataTestid?: string;
}

const OtpInput: React.FC<Props> = (props) => {
  const inputDefaultStyles: CSSProperties = {
    width: 32,
    height: 32,
    textAlign: 'center',
    marginRight: 20,
  };
  const input = useRef(new Array(1));

  const componentMounted = useRef(false);
  useEffect(() => {
    // When component mounts
    if (props.autoFocus && props.focus) {
      input.current[0].focus();
    }
  }, []);

  useEffect(() => {
    if (componentMounted.current && props.focus) {
      input.current[0].focus();
    }
    componentMounted.current = true;
  }, [props.focus]);

  const handelInputFocus: FocusEventHandler = (event) =>
    props.onInputFocus(props.index, event);

  return (
    <input
      style={{ ...inputDefaultStyles, ...props.inputStyles }}
      type={props.secure ? 'password' : 'tel'}
      maxLength={1}
      ref={(ref) => {
        input.current[0] = ref;
      }}
      disabled={props.disabled}
      onFocus={handelInputFocus}
      value={props.value || ''}
      className={props.className}
      onChange={props.onChange}
      key={props.index}
      autoFocus={props.autoFocus}
      onKeyDown={props.onKeyDown}
      onInput={props.onInput}
      onPaste={props.onPaste}
      data-testid="input"
    />
  );
};

export default OtpInput;
