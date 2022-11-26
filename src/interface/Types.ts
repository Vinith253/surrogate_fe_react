export interface tabList {
  id: string;
  data: string;
  component: JSX.Element;
  isDisabled?: boolean;
}
export interface stackButtonInterface {
  title: string;
  onClick?: string;
}


export interface buttonGroupInterface extends Array<stackButtonInterface> {}
export interface dataList extends Array<tabList> {}

export interface toggleFunctionType {
  toggle: (a: boolean) => void;
}
