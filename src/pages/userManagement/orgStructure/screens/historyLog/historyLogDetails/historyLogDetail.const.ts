export interface historyLogDetailInterface {
  title?: string;
  description?: string;
  version?: string;
  request?: string;
  requestStatus?: string;
  initiator?: string;
  reviewer?: string;
  approver?: string;

  currentStatus?: string;
  initiatedDateTime?: string;
  reviewedDateTime?: string;
  approvedDateTime?: string;
  approvedBy?: string;
  rejectedBy?: string;
  rejectionReason?: string[];
}

export const historyLogDetailData: historyLogDetailInterface = {
  title: 'Authorization Level - History Log',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dolor.',
  version: 'V 0.09',
  request: 'Deactivate',
  requestStatus: 'Approved',
  initiator: 'Rajesh Kumar',
  reviewer: 'Ganesh',
  approver: 'Karthik Kumar',
  currentStatus: 'Active',
  initiatedDateTime: '10 Aug, 2022 10:00',
  reviewedDateTime: '10 Aug, 2022 10:00',
  approvedDateTime: '10 Aug, 2022 10:00',
  approvedBy: '',
  rejectedBy: 'Rejected by Approver',
  rejectionReason: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque. Vitae quis praesent tempus ut. ',
    'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui ultricies in curabitur quis et. Justo velit massa sed morbi nunc, sit magna.',
    'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper facilisi volutpat quis et. Nibh amet eget a amet, phasellus et velit auctor.',
    'Orci ultricies orci mattis pellentesque pharetra quam lectus. Odio viverra iaculis nullam sodales malesuada vitae leo mauris et.',
    'A feugiat pellentesque porttitor venenatis, vehicula risus felis tellus. Ut lacus duis tellus, mi nullam. Ullamcorper massa ipsum mi, ullamcorper fames ut aliquam nec. ',
  ],
};
