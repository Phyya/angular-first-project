export interface IPlan {
  // name: string;
  // amount: number;
  // interestPaid: number;
  // interestEarned: number;
  id: number;
  targetName: string;
  balance?: number;
  target_amount?: number;
  description: string;
  frequency: string;
  endDate: string;
  percentage?: number;
  category: string;
}
export interface IPlanType {
  name: string;
  active: IPlan[];
  past: IPlan[];
}
export interface userDetails {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  accountNumber: Number;
  balance: number;
  plans: IPlanType[];
}
export const users = [
  {
    email: 'Nafisat@gmail.com',
    password: 'password1',
    firstName: 'Nafisat',
    lastName: 'Sanusi',
    accountNumber: 2000076874,
    balance: 5000500,
    bankAccountID: '93a8c70f-165b-4363-c5d5-08db650dbebc',
    savingsAccountId: 'd6388edf-4ba0-4876-b988-08db650dbeca',
    plans: [],
  },
  {
    email: 'Aye@gmail.com',
    password: 'password2',
    firstName: 'Aye',
    lastName: 'Erumi',
    accountNumber: 2000071111,
    balance: 6753800,
    plans: [],
  },
  {
    email: 'Dami@gmail.com',
    password: 'password3',
    firstName: 'Damilare',
    lastName: 'Bankole',
    accountNumber: 2000072323,
    balance: 1067200,
    plans: [],
  },
  {
    email: 'Victor@gmail.com',
    password: 'password4',
    firstName: 'Victor',
    lastName: 'Emmanuel',
    accountNumber: 2000074523,
    balance: 4325500,
    plans: [],
  },
  {
    email: 'Mercy@gmail.com',
    password: 'password5',
    firstName: 'Mercy',
    lastName: 'Ogbenjuwa',
    accountNumber: 2000079800,
    balance: 4500000,
    plans: [],
  },
];
