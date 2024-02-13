// components
export interface ButtonProps {
  text: string;
}
export interface TextProps {
  text: string;
}

export interface InputRowProps {
  label: string;
  type: string;
  modelValue: string;
}
export interface CategoryProps {
  name: string;
}

export interface NavbarProps {
  isVoucherPage: boolean;
}

export interface CardProps {
  name: string;
  image: string;
  to: string;
}

// state
export interface Variants {
  name: string;
  price: string;
  _id: string;
}

export interface Genre {
  name: string;
  _id: string;
}

export interface IGenresState {
  genres: Genre[];
}

export interface Voucher {
  name: string;
  image: string;
  _id: string;
  variants: Variants[];
  genres: Genre[];
}

export interface IVoucherState {
  vouchers: Voucher[];
}

export interface userData {
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updateAt: string;
  __v: number;
}

export interface token {}
export interface IUserState {
  user: userData[];
  token: string;
}

export interface Order {
  name: string;
  image: string;
  _id: string;
  variants: Variants[];
  genres: Genre[];
}

export interface IOrderState {
  orders: Order[];
}

export interface ContentProps {
  items: Voucher[];
}
