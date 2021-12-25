import { IItem, IPrice } from "../interface";

export default class Item {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];

  constructor({ name, type, prices }: IItem) {
    this.name = name;
    this.type = type;
    this.prices = prices;
  }
}
