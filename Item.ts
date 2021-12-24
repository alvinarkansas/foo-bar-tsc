interface IPrice {
  priceFor: "VIP" | "regular" | "wholesale";
  price: number;
}

export default class Item {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];

  constructor(name: string, type: "hats" | "top" | "bottom", prices: IPrice[]) {
    prices.forEach((el) => {
      if (el.priceFor !== "regular") {
        console.log("👾 NO REGULAR PRICE ERROR");
      }
    });
    this.name = name;
    this.type = type;
    this.prices = prices;
  }
}
