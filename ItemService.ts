import { IPrice } from "./Item";

interface IItem {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];
}

class ItemService {
  items: IItem[];
  constructor() {
    this.items = [];
  }
  static create() {
    
  }
}
