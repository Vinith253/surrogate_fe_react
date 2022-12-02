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

export interface lmsDataInterface {
  id?: string;
  application?: string;
  customerName?: string;
  mobileNumber?: number;
  cibil?: string;
  income?: string;
  status?: string;
  lead?: string;
  surrogateName?: string;
  dateTime?: string;
  Policy?: string;
  channelName?: string;
  processedBy?: string;
  kycStatus?: string;
  version? :string;
  currentStatus?:string;
  initiatedBy?:string;
  request?:string;
  dateAndTime?:string;
}