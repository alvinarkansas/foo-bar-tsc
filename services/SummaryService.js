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
var BuyerService_1 = require("./BuyerService");
var ItemService_1 = require("./ItemService");
var TransactionService_1 = require("./TransactionService");
var SummaryService = /** @class */ (function () {
    function SummaryService(input) {
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
    SummaryService.prototype.create = function (input) {
        var Buyers = new BuyerService_1["default"](input.Buyers);
        var Items = new ItemService_1["default"](input.Items);
        var Transactions = new TransactionService_1["default"](input.Transaction);
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
    };
    SummaryService.prototype.printOutput = function () {
        var output = {
            Summary: {
                totalTransaction: this.totalTransaction,
                bestSellingItem: this.bestSellingItem,
                bestSellingCategory: this.bestSellingCategory,
                rpc: this.rpc,
                revenue: this.revenue,
                bestSpenders: this.bestSpenders
            }
        };
        console.log(output);
    };
    SummaryService.prototype.countTotalTrx = function () {
        this.totalTransaction = this.transactions.length;
    };
    SummaryService.prototype.setBestItem = function () {
        var results = [];
        this.transactions.forEach(function (transaction, index) {
            var itemExists = false;
            if (index === 0) {
                results.push({ item: transaction.item, occurence: transaction.qty });
            }
            else {
                /* check if item exists in results */
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    if (result.item === transaction.item) {
                        itemExists = true;
                    }
                }
                /* */
                if (itemExists) {
                    var itemIndex = results.findIndex(function (el) { return el.item === transaction.item; });
                    results[itemIndex].occurence += transaction.qty;
                }
                else {
                    results.push({ item: transaction.item, occurence: transaction.qty });
                }
            }
        });
        var sorted = results.sort(function (a, b) { return b.occurence - a.occurence; });
        this.bestSellingItem = sorted[0].item;
    };
    SummaryService.prototype.assignAppliedPrice = function () {
        var _this = this;
        this.transactions = this.transactions.map(function (transaction) {
            var buyerType = _this.buyers.find(function (buyer) { return buyer.name === transaction.buyer; }).type;
            var itemPrices = _this.items.find(function (item) { return item.name === transaction.item; }).prices;
            /* assign item price to default regular if there is no match priceFor */
            var itemPrice = null;
            if (!itemPrices.find(function (price) { return price.priceFor === buyerType; })) {
                itemPrice = itemPrices.find(function (price) { return price.priceFor === 'regular'; }).price;
            }
            else {
                itemPrice = itemPrices.find(function (price) { return price.priceFor === buyerType; }).price;
            }
            return __assign(__assign({}, transaction), { appliedPrice: itemPrice });
        });
    };
    SummaryService.prototype.setRevenue = function () {
        this.assignAppliedPrice();
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var transaction = _a[_i];
            this.revenue += (transaction.appliedPrice * transaction.qty);
        }
    };
    return SummaryService;
}());
exports["default"] = SummaryService;
