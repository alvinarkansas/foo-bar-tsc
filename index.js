"use strict";
exports.__esModule = true;
var Buyer_1 = require("./Buyer");
var Item_1 = require("./Item");
var input = require("./input-example.json");
var ani = new Buyer_1["default"]("Ani", "regular");
var magicShirt = new Item_1["default"]("Magic Shirt", "top", [
    { priceFor: "VIP", price: 2000 },
]);
// const magicHat = new Item("Magic Hat", "hats", [{
//   {}
// }]);
// console.log(ani);
// console.log("------------");
// console.log(magicShirt);
// console.log("------------");
// console.log(magicHat);
// 1. Buat instance Item
var itemCollection = [];
var buyerCollection = [];
input.Items.forEach(function (item) {
    itemCollection.push(new Item_1["default"](item.name, item.type, item.prices));
});
console.log("item");
console.log(itemCollection);
// 2. Buat instance Buyer
input.Buyers.forEach(function (buyer) {
    if (buyerCollection.includes(buyer.name)) {
        console.log(buyer.name);
        console.log("duplicate");
    }
    else {
        buyerCollection.push(buyer.name);
    }
    // buyerCollection.push(new Buyer(buyer.name, buyer.type));
});
console.log("buyer 👾");
console.log(buyerCollection);
// 3. Buat instance Transaction
// 4. Bikin logic untuk print summary
