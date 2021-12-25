"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var TransactionService = /** @class */ (function () {
    function TransactionService() {
    }
    TransactionService.generate = function (inputTransactions) {
        var transactions = [];
        for (var _i = 0, inputTransactions_1 = inputTransactions; _i < inputTransactions_1.length; _i++) {
            var inputTransaction = inputTransactions_1[_i];
            transactions.push(new models_1.Transaction(inputTransaction));
        }
        return transactions;
    };
    return TransactionService;
}());
exports["default"] = TransactionService;
