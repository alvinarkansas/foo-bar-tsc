import Buyer from "./Buyer";
import Item from "./Item";
const input = require("./input-example.json");

const ani = new Buyer("Ani", "regular");
const magicShirt = new Item("Magic Shirt", "top", [
  { priceFor: "VIP", price: 2000 },
]);

let itemCollection = [];
let buyerCollection = [];

input.Items.forEach((item) => {
  itemCollection.push(new Item(item.name, item.type, item.prices));
});

console.log("item");
console.log(itemCollection);

// 2. Buat instance Buyer

input.Buyers.forEach((buyer) => {
  if (buyerCollection.includes(buyer.name)) {
    console.log(buyer.name);
    console.log("duplicate");
  } else {
    buyerCollection.push(new Buyer(buyer.name, buyer.type))
  }
});

console.log("buyer 👾");
console.log(buyerCollection);

// 3. Buat instance Transaction

// 4. Bikin logic untuk print summary
