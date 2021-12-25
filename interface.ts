export interface IBestSpender {
  name: string;
  type: string;
  spent: number;
}

export interface IBuyer {
  name: string;
  type: string;
}

export interface IInput {
  Transaction: ITransaction[];
  Items: IItem[];
  Buyers: IBuyer[];
}

export interface IItem {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];
}

export interface IPrice {
  priceFor: "VIP" | "regular" | "wholesale";
  price: number;
}

export interface IRpc {
  category: string;
  revenue: number;
}

export interface ITransaction {
  item: any;
  qty: number;
  buyer: string;
  appliedPrice?: number;
}
