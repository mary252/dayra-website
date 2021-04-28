import logo from '../logo.svg';

export const state = {
  balance: 50000,
  percentage: 80,
  services: [
    {
      name_en: 'Factoring',
      name_ar: 'تخصيم',
      icon: logo,
      link: '/factoring',
    },
    {
      name_en: 'Loan',
      name_ar: 'قرض',
      icon: logo,
    },
    {
      name_en: 'Marketplace',
      name_ar: 'تسوق',
      icon: logo,
      link: '/marketplace',
    },
    {
      name_en: 'Capital',
      name_ar: 'رأس مال',
      icon: logo,
    },
    {
      name_en: 'Pay',
      name_ar: 'دفع فواتير',
      icon: logo,
    },
  ],
  transactions: [
    {
      id: 1,
      date: '30/11/2020',
      invoicesCount: 3,
      total: 50000,
      remainder: 30000,
    },
    {
      id: 2,
      date: '15/10/2020',
      invoicesCount: 1,
      total: 50000,
      remainder: 10000,
    },
  ],
  current_transactions: [
    {
      id: 1,
      date: '30/11/2020',
      transactions: [
        {
          id: 1,
          type: 'incoming',
          total: 1000,
        },
        {
          id: 1,
          type: 'outgoing',
          total: 1000,
        },
        {
          id: 1,
          type: 'incoming',
          total: 1000,
        },
      ],
    },
    {
      id: 2,
      date: '15/10/2020',
      transactions: [
        {
          id: 1,
          type: 'incoming',
          total: 1000,
        },
        {
          id: 1,
          type: 'outgoing',
          total: 1000,
        },
        {
          id: 1,
          type: 'incoming',
          total: 1000,
        },
      ],
    },
  ],
};
