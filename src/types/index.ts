export interface ButtonProps {
  text: string;
}
export interface TextProps {
  text: string;
}

export interface InputRowProps {
  label: string;
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
}

export interface Variants {
  name: string;
  price: string;
  _id: string;
}

export interface genre {
  name: string;
  _id: string;
}

export interface IGenresState {
  genres: genre[]; // State untuk menyimpan array dari voucher
}

export interface voucher {
  name: string;
  image: string;
  _id: string;
  variants: Variants[];
  genres: genre[];
}

export interface IVoucherState {
  vouchers: voucher[]; // State untuk menyimpan array dari voucher
}
