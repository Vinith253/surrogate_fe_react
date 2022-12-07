export const RegexValidation = {
  NamePattern: /^([^\d\W_]|[]){3,50}$/,
  EmailPattern:
    /^([a-zA-Z0-9_\-\.!#$%&'*+/=?^]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/,
  MobilePattern: /^[1-9]{1}[0-9]{9}$/,
  PanPattern: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
};
 