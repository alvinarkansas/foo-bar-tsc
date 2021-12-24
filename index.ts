import Buyer from "./Buyer";
import Item from "./Item";
import Transaction from "./Transaction";
const input = require("./input-example.json");

let itemCollection = [];
let buyerCollection = [];
let transactionCollection = [];

input.Items.forEach((item) => {
  itemCollection.push(new Item(item.name, item.type, item.prices));
});

console.log("item");
console.log(itemCollection);

// 2. Buat instance Buyer

input.Buyers.forEach((buyer) => {
  if (buyerCollection.includes(buyer.name)) {
    console.log("duplicate buyer name: ", buyer.name);
  } else {
    buyerCollection.push(new Buyer(buyer.name, buyer.type));
  }
});

console.log("buyer 👾");
console.log(buyerCollection);

// 3. Buat instance Transaction

input.Transaction.forEach((transaction) => {
  transactionCollection.push(
    new Transaction(transaction.name, transaction.qty, transaction.buyer)
  );
});

// 4. Bikin logic untuk print summary
