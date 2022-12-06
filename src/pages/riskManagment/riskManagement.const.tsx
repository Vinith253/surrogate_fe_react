export const CustomerReportFilterDropdown = [
    {
      label: 'State',
      option: [
        { value: 'all', name: 'All' },
        { value: 'tamilnadu', name: 'Tamilnadu' },
        { value: 'andra', name: 'Andhra' },
        { value: 'telungana', name: 'Telungana' },
        { value: 'karnataka', name: 'Karnataka' },
        { value: 'kerala', name: 'Kerala' },
      ],
    },
    {
      label: 'Zone',
      option: [
        { value: 'all', name: 'All' },
        { value: 'tamilnadu', name: 'Tamilnadu' },
        { value: 'andra', name: 'Andhra' },
        { value: 'telungana', name: 'Telungana' },
        { value: 'karnataka', name: 'Karnataka' },
        { value: 'kerala', name: 'Kerala' },
      ],
    },
    {
      label: 'District',
      option: [
        { value: 'all', name: 'All' },
        { value: 'tamilnadu', name: 'Tamilnadu' },
        { value: 'andra', name: 'Andhra' },
        { value: 'telungana', name: 'Telungana' },
        { value: 'karnataka', name: 'Karnataka' },
        { value: 'kerala', name: 'Kerala' },
      ],
    },
    {
      label: 'Branch',
      option: [
        { value: 'all', name: 'All' },
        { value: 'tamilnadu', name: 'Tamilnadu' },
        { value: 'andra', name: 'Andhra' },
        { value: 'telungana', name: 'Telungana' },
        { value: 'karnataka', name: 'Karnataka' },
        { value: 'kerala', name: 'Kerala' },
      ],
    },
    {
      label: 'Period',
      option: [{ value: 'all', name: 'All' }],
    },
    {
      label: 'Channel',
      option: [
        { value: 'all', name: 'All' },
        { value: 'bank', name: 'Bank' },
        { value: 'dsa', name: 'DSA' },
        { value: 'fintech partners', name: 'Fintech Partners' },
      ],
    },
    {
      label: 'Surrogate',
      option: [{ value: 'all', name: 'All' }],
    },
    {
      label: 'Application Status',
      option: [{ value: 'all', name: 'All' }],
    },
  ];
  


  export const customerDetailsRiskManagment = {
    details: [
      {
        label: 'Application number',
        value: '1234567890',
      },
      {
        label: 'Surrogate',
        value: 'Card For Card',
      },
      {
        label: 'Applied Date & Time',
        value: '12 Jul, 22 09:40 Am',
      },
      {
        label: 'Last Status Updated On',
        value: '12 Jul,22 09:40 Am',
      },
    ],
  };


  export const approvedCustomerDetailData = {
    userCashFlowScore: 300,
    userCreditProfileScore: 300,
    userCashFlowTotal:500,
    userCreditProfileTotal:400,
    customerCreditScore: 750
  }

  export const rejectedCustomerDetailData = {
    userCashFlowScore: 300,
    userCreditProfileScore: 100,
    userCashFlowTotal:500,
    userCreditProfileTotal:400,
    customerCreditScore: 400
  }

  export const referCustomerDetailData = {
    userCashFlowScore: 450,
    userCreditProfileScore: 170,
    userCashFlowTotal:500,
    userCreditProfileTotal:400,
    customerCreditScore: 720
  }


  export const riskChannnelData = {
    title: 'Channel Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Channel',
        value: 'DSA',
      },
      {
        label: 'Channel Name',
        value: 'DSA 1',
      },
      {
        label: 'DSA ID',
        value: '1234567890',
      },
      {
        label: 'DSA State',
        value: 'Tamil Nadu',
      },
      {
        label: 'DSDSA BranchA',
        value: 'Chromepet',
      },
      {
        label: 'DSA Lead',
        value: 'Ganesh',
      },
      {
        label: 'DSA Executive',
        value: 'Rajesh',
      },
      {
        label: 'DSA Zonal',
        value: 'Chennai',
      },
    ],
  };


  export const riskMngmtViewData = [
    {
        id: 1,
        label: 'User Identity',
        infoData:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isExpanded: true,
        passFailText:'Good',
        showHeader:true,
        data:[
          {
            id:1,
            title1:'First  Name (As  in Aadhaar)',
            title2:'Last Name (As  in Aadhaar)',
            title1Value:'Antony',
            title2Value:'Jack',
            passedStatus:true,
            matchedDisplayText:'Matched With Aadhaar'
          },
          {
            id:2,
            title1:'Aadhaar Number',
            title1Value:'1234 5678 91011',
            passedStatus:true,
            matchedDisplayText:'Matched With Aadhaar'
          },
          {
            id:3,
            title1:'PAN  Number',
            title1Value:'EQVAP4590P',
            passedStatus:true,
            matchedDisplayText:'Matched With Aadhaar'
          },
          {
            id:4,
            title1:'DOB',
            title1Value:'10 / 05 /1994',
            passedStatus:true,
            matchedDisplayText:'Matched With CIBIL & Aadhaar'
          },
          {
            id:5,
            title1:'Age',
            title1Value:'25',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy & Aadhaar'
          },
          {
            id:5,
            title1:'Resistance Pincode',
            title1Value:'600023',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy & Aadhaar'
          },
          {
            id:6,
            title1:'Relationship with bank',
            title1Value:'Existing to Bank',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            showAccountDetails:true,
            showMoreText:'Account Details'
          },
          {
            id:7,
            title1:'KYC Status',
            title1Value:'eKYC + vKYC',
            passedStatus:true,
            matchedDisplayText:'Successfull'
          }
        ]
    },
    {
        id: 2,
        label: 'User Tracceability',
        infoData:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isExpanded: true,
        passFailText:'Good',
        showHeader:false,
        data:[
          {
            id:1,
            title1:'Current Address',
            title1Value:'No 45, D-Block Gandhi Nagar Chennai - 600021',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            isSelectedAddress:true,
          },
          {
            id:2,
            title1:'Address Source',
            title1Value:'CIBIL',
            showAccountDetails:true,
            showMoreText:'More Addresses'
          },
        ]
    },
    {
        id: 3,
        label: 'User Cashflow',
        isExpanded: true,
        infoData:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        passFailText:'Pass',
        score:{
          result:300,
          total:500
        },
        showHeader:true,
        data:[
          {
            id:1,
            criteriaValue:'Company Category',
            customerEligibility1Value:'CAT A, CAT C',
            customerEligibility2Value:'CAT A',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:55,
          },
          {
            id:2,
            criteriaValue:'Gross Salary Per Month',
            customerEligibility1Value:'₹ 50,000',
            customerEligibility2Value:'₹ 80,000',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:45,
          },
          {
            id:3,
            criteriaValue:'Three Month Average Salary',
            customerEligibility1Value:'< 1 %, 1 - 2.5 %',
            customerEligibility2Value:'₹2.0 %',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:4,
            criteriaValue:'Salary Linked Loan / Advances If Any',
            customerEligibility1Value:'-',
            customerEligibility2Value:'-',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:40,
          },
          {
            id:5,
            criteriaValue:'3 Month net salary deviation within 2.5%',
            customerEligibility1Value:'< 1 %, 1 - 2.5 %',
            customerEligibility2Value:'2.0 %',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:45,
          },
          {
            id:6,
            criteriaValue:'3 Month net salary deviation more than 2.5%',
            customerEligibility1Value:'< 1 %, 1 - 2.5 %',
            customerEligibility2Value:'2.0 %',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:55,
          },
          {
            id:7,
            criteriaValue:'Designation',
            customerEligibility1Value:'Designation 3 - 800 K',
            customerEligibility2Value:'Designation 3 - 900 K',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:8,
            criteriaValue:'3 Longevity of employment',
            customerEligibility1Value:'2 year(s)',
            customerEligibility2Value:'2 year(s)',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:40,
          },
          {
            id:9,
            criteriaValue:'3 Employment domain risk in current market conditions',
            customerEligibility1Value:'Domain 1, Domain 2, Domain 3, Domain4',
            customerEligibility2Value:'Domain 1',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:50,
          },
        ]
    },
    {
        id: 4,
        label: 'User Credit Profile',
        isExpanded: true,
        infoData:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        passFailText:'Pass',
        score:{
          result:300,
          total:500
        },
        showHeader:true,
        data:[
          {
            id:1,
            criteriaValue:'Credit Score',
            customerEligibility1Value:'CIBIL - 750 Experian - 750',
            customerEligibility2Value:'CIBIL - 800 Experian - 850',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:40,
          },
          {
            id:2,
            criteriaValue:'Credit Score/Longivity',
            customerEligibility1Value:'3 - 6 Months',
            customerEligibility2Value:'8 Months',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:3,
            criteriaValue:'Credit Score/Application Recency',
            customerEligibility1Value:'0 - 3 Months',
            customerEligibility2Value:'4 Months',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:4,
            criteriaValue:'Credit Utilization (FOIR)',
            customerEligibility1Value:'0 - 40%',
            customerEligibility2Value:'40%',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:5,
            criteriaValue:'Credit Sougth Distribution',
            customerEligibility1Value:'0 - 60%',
            customerEligibility2Value:'60%',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:6,
            criteriaValue:'Lender Profile',
            customerEligibility1Value:'Bank, NBFC',
            customerEligibility2Value:'Bank',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:7,
            criteriaValue:'Repayment Behaviour/Repayment',
            customerEligibility1Value:'0 - 60 DPD',
            customerEligibility2Value:'50 DPD',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:8,
            criteriaValue:'Repayment Behaviour/Written Off',
            customerEligibility1Value:'6 - 9 Months',
            customerEligibility2Value:'7 Months',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:9,
            criteriaValue:'Repayment Behaviour/Quantum Written Off',
            customerEligibility1Value:' - 5% of LTV',
            customerEligibility2Value:'3%',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:10,
            criteriaValue:'Repayment Behaviour/Quantum Written Off',
            customerEligibility1Value:'-',
            customerEligibility2Value:'-',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:11,
            criteriaValue:'Repayment Behaviour/Suit Filed',
            customerEligibility1Value:'-',
            customerEligibility2Value:'-',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
          {
            id:10,
            criteriaValue:'Existing Credit Card Limit Exposire',
            customerEligibility1Value:'1X',
            customerEligibility2Value:'5X',
            passedStatus:true,
            matchedDisplayText:'Matched With Policy',
            scoreValue:60,
          },
        ]
    },
]


export const riskDashboardData = [
  {
    id: '1',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    surrogateName: 'Payroll',
    dateAndTime: '03 May 2021, 00:00',
    status: 'Approved',
    more: 'View',
  },
  {
    id: '2',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    surrogateName: 'Payroll',
    dateAndTime: '03 May 2021, 00:00',
    status: 'Rejected',
    more: 'View',
  },
  {
    id: '3',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    surrogateName: 'Payroll',
    dateAndTime: '03 May 2021, 00:00',
    status: 'Refer',
    more: 'View',
  },
];

