import {
  IBestSpender,
  IBuyer,
  IInput,
  IItem,
  IRpc,
  ITransaction,
} from "../interface";
import BuyerService from "./BuyerService";
import ItemService from "./ItemService";
import TransactionService from "./TransactionService";

export default class SummaryService {
  transactions: ITransaction[];
  buyers: IBuyer[];
  items: IItem[];

  totalTransaction: number;
  bestSellingItem: string;
  bestSellingCategory: string;
  rpc: IRpc[];
  revenue: number;
  bestSpenders: IBestSpender[];

  constructor(input: IInput) {
    this.transactions = [];
    this.buyers = [];
    this.items = [];

    this.totalTransaction = 0;
    this.bestSellingItem = "";
    this.bestSellingCategory = "";
    this.rpc = [];
    this.revenue = 0;
    this.bestSpenders = [];

    this.create(input);
  }

  create(input: IInput) {
    const Buyers = new BuyerService(input.Buyers);
    const Items = new ItemService(input.Items);
    const Transactions = new TransactionService(input.Transaction);

    this.buyers = Buyers.buyers;
    this.items = Items.items;
    this.transactions = Transactions.transactions;

    if (!Items.errors && !Buyers.errors) {
      this.countTotalTrx();
      this.setRevenue();
      this.setBestItem();
      console.log("📰 print output\n");
      this.printOutput();
    }
  }

  printOutput() {
    const output = {
      Summary: {
        totalTransaction: this.totalTransaction,
        bestSellingItem: this.bestSellingItem,
        bestSellingCategory: this.bestSellingCategory,
        rpc: this.rpc,
        revenue: this.revenue,
        bestSpenders: this.bestSpenders,
      },
    };
    console.log(output);
  }

  countTotalTrx() {
    this.totalTransaction = this.transactions.length;
  }

  setBestItem() {
    let results: { item: string, occurence: number }[] = [];

    this.transactions.forEach((transaction, index) => {
      let itemExists = false;

      if (index === 0) {
        results.push({ item: transaction.item, occurence: transaction.qty });
      } else {
        /* check if item exists in results */
        for (let result of results) {
          if (result.item === transaction.item) {
            itemExists = true;
          }
        }
        /* */
  
        if (itemExists) {
          let itemIndex = results.findIndex(el => el.item === transaction.item);
          results[itemIndex].occurence += transaction.qty;
        } else {
          results.push({ item: transaction.item, occurence: transaction.qty });
        }
      }
    })

    const sorted = results.sort((a, b) => b.occurence - a.occurence);
    this.bestSellingItem = sorted[0].item;
  }

  assignAppliedPrice() {
    this.transactions = this.transactions.map(transaction => {
      let buyerType = this.buyers.find(buyer => buyer.name === transaction.buyer).type;
      let itemPrices = this.items.find(item => item.name === transaction.item).prices;

      /* assign item price to default regular if there is no match priceFor */
      let itemPrice = null;
      if (!itemPrices.find(price => price.priceFor === buyerType)) {
        itemPrice = itemPrices.find(price => price.priceFor === 'regular').price
      } else {
        itemPrice = itemPrices.find(price => price.priceFor === buyerType).price
      }

      return {...transaction, appliedPrice: itemPrice };
    })
  }

  setRevenue() {
    this.assignAppliedPrice()
    for (let transaction of this.transactions) {
      this.revenue += (transaction.appliedPrice * transaction.qty);
    }
  }
}
