export interface ITransaction {
  item: any;
  qty: number;
  buyer: string;
}

export interface IItem {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];
}

export interface IBuyer {
  name: string;
  type: string;
}

export interface IPrice {
  priceFor: "VIP" | "regular" | "wholesale";
  price: number;
}

export interface IInput {
  Transaction: ITransaction[];
  Items: IItem[];
  Buyers: IBuyer[];
}
