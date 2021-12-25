import { IPrice } from "./Item";

interface IRpc {
  category: string;
  revenue: number;
}
interface IBestSpender {
  name: string;
  type: string;
  spent: number;
}
interface ITransaction {
  item: string;
  qty: number;
  buyer: string;
  appliedPrice: number;
}
interface IBuyer {
  name: string;
  type: string;
}
interface IItem {
  name: string;
  type: "hats" | "top" | "bottom";
  prices: IPrice[];
}

export default class Summary {
  transactions: ITransaction[];
  buyers: IBuyer[];
  items: IItem[];

  totalTransaction: number;
  bestSellingItem: string;
  bestSellingCategory: string;
  rpc: IRpc[];
  revenue: number;
  bestSpenders: IBestSpender[];

  constructor(transactions, buyers, items) {
    this.transactions = transactions;
    this.buyers = buyers;
    this.items = items;

    this.totalTransaction = transactions.length;
    this.bestSellingItem = "";
    this.bestSellingCategory = "";
    this.rpc = [];
    this.revenue = 0;
    this.bestSpenders = [];

    this.assignAppliedPrice();
  }

  assignAppliedPrice() {
    this.transactions = this.transactions.map(transaction => {
      let buyerType = this.buyers.find(buyer => buyer.name === transaction.buyer).type;
      let itemPrices = this.items.find(item => item.name === transaction.item).prices;

      console.log("\n🚥🚥🚥🚥🚥🚥🚥\n");
      console.log(transaction.buyer);
      console.log(buyerType);
      
      console.log(transaction.item);
      console.log(itemPrices);

      /* assign item price to default regular if there is no match priceFor */
      let itemPrice = null;
      if (!itemPrices.find(price => price.priceFor === buyerType)) {
        itemPrice = itemPrices.find(price => price.priceFor === 'regular').price
      } else {
        itemPrice = itemPrices.find(price => price.priceFor === buyerType).price
      }

      console.log("applied price", itemPrice);

      return {...transaction, appliedPrice: itemPrice };
    })
  }
}
