"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var BuyerService = /** @class */ (function () {
    function BuyerService() {
    }
    BuyerService.generate = function (inputBuyers) {
        var buyers = [];
        var _loop_1 = function (inputBuyer) {
            if (buyers.find(function (el) { return el.name === inputBuyer.name; })) {
                console.log("\u274C ERROR: Duplicate buyer name --> ".concat(inputBuyer.name, "\n"));
            }
            else {
                buyers.push(new models_1.Buyer({
                    name: inputBuyer.name,
                    type: inputBuyer.type
                }));
            }
        };
        for (var _i = 0, inputBuyers_1 = inputBuyers; _i < inputBuyers_1.length; _i++) {
            var inputBuyer = inputBuyers_1[_i];
            _loop_1(inputBuyer);
        }
        return buyers;
    };
    return BuyerService;
}());
exports["default"] = BuyerService;
