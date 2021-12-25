export interface IPrice {
  priceFor: "VIP" | "regular" | "wholesale";
  price: number;
}

export default class Item {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];

  constructor(name: string, type: "hats" | "top" | "bottom", prices: IPrice[]) {
    for (let price of prices) {
      if (price.priceFor !== "regular") {
        console.log(`${name} does not have regular price`);
      }
    }

    this.name = name;
    this.type = type;
    this.prices = prices;
  }
}
