"use strict";
exports.__esModule = true;
var BuyerService_1 = require("./BuyerService");
var ItemService_1 = require("./ItemService");
var TransactionService_1 = require("./TransactionService");
var SummaryService = /** @class */ (function () {
    function SummaryService() {
    }
    SummaryService.create = function (input) {
        var buyers = new BuyerService_1["default"](input.Buyers);
        var items = new ItemService_1["default"](input.Items);
        var transactions = new TransactionService_1["default"](input.Transaction);
        console.log("👤", buyers);
        console.log("👕", items);
        console.log("🛒", transactions);
        if (!items.errors && !buyers.errors) {
            // print invoice
            console.log("📰 print output");
        }
    };
    return SummaryService;
}());
exports["default"] = SummaryService;
