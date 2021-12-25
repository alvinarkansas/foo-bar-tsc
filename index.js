"use strict";
exports.__esModule = true;
var Buyer_1 = require("./Buyer");
var Item_1 = require("./Item");
var Transaction_1 = require("./Transaction");
var Summary_1 = require("./Summary");
var input = require("./input-example.json");
var itemCollection = [];
var buyerCollection = [];
var transactionCollection = [];
input.Items.forEach(function (item) {
    itemCollection.push(new Item_1["default"](item.name, item.type, item.prices));
});
// console.log("item");
// console.log(itemCollection);
// 2. Buat instance Buyer
input.Buyers.forEach(function (buyer) {
    if (buyerCollection.includes(buyer.name)) {
        console.log("duplicate buyer name: ", buyer.name);
    }
    else {
        buyerCollection.push(new Buyer_1["default"](buyer.name, buyer.type));
    }
});
// console.log("buyer 👾");
// console.log(buyerCollection);
// 3. Buat instance Transaction
input.Transaction.forEach(function (transaction) {
    transactionCollection.push(new Transaction_1["default"](transaction.item, transaction.qty, transaction.buyer));
});
// 4. Bikin logic untuk print summary
var summary = new Summary_1["default"](transactionCollection, buyerCollection, itemCollection);
console.log(summary);
