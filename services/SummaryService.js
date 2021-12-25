"use strict";
exports.__esModule = true;
var BuyerService_1 = require("./BuyerService");
var ItemService_1 = require("./ItemService");
var TransactionService_1 = require("./TransactionService");
var SummaryService = /** @class */ (function () {
    function SummaryService() {
    }
    SummaryService.create = function (input) {
        var buyers = BuyerService_1["default"].generate(input.Buyers);
        var items = ItemService_1["default"].generate(input.Items);
        var transactions = TransactionService_1["default"].generate(input.Transaction);
        console.log("👤", buyers);
        console.log("👕", items);
        console.log("🛒", transactions);
    };
    return SummaryService;
}());
exports["default"] = SummaryService;
