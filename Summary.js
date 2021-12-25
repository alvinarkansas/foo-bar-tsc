"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Summary = /** @class */ (function () {
    function Summary(transactions, buyers, items) {
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
    Summary.prototype.assignAppliedPrice = function () {
        var _this = this;
        this.transactions = this.transactions.map(function (transaction) {
            var buyerType = _this.buyers.find(function (buyer) { return buyer.name === transaction.buyer; }).type;
            var itemPrices = _this.items.find(function (item) { return item.name === transaction.item; }).prices;
            console.log("\n🚥🚥🚥🚥🚥🚥🚥\n");
            console.log(transaction.buyer);
            console.log(buyerType);
            console.log(transaction.item);
            console.log(itemPrices);
            /* assign item price to default regular if there is no match priceFor */
            var itemPrice = null;
            if (!itemPrices.find(function (price) { return price.priceFor === buyerType; })) {
                itemPrice = itemPrices.find(function (price) { return price.priceFor === 'regular'; }).price;
            }
            else {
                itemPrice = itemPrices.find(function (price) { return price.priceFor === buyerType; }).price;
            }
            console.log("applied price", itemPrice);
            return __assign(__assign({}, transaction), { appliedPrice: itemPrice });
        });
    };
    return Summary;
}());
exports["default"] = Summary;
