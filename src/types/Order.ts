export type UserDataType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  delivery: '0' | '300' | '350';
  comment: string;
  payment: string;
  policy?: boolean;
};