"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var BuyerService = /** @class */ (function () {
    function BuyerService(inputBuyers) {
        this.buyers = [];
        this.errors = false;
        this.generate(inputBuyers);
    }
    BuyerService.prototype.generate = function (inputBuyers) {
        var _loop_1 = function (inputBuyer) {
            var buyerExists = this_1.buyers.find(function (el) { return el.name === inputBuyer.name; });
            if (buyerExists) {
                console.log("\u274C ERROR: Duplicate buyer name --> ".concat(inputBuyer.name, "\n"));
                this_1.errors = true;
            }
            else {
                this_1.buyers.push(new models_1.Buyer({
                    name: inputBuyer.name,
                    type: inputBuyer.type
                }));
            }
        };
        var this_1 = this;
        for (var _i = 0, inputBuyers_1 = inputBuyers; _i < inputBuyers_1.length; _i++) {
            var inputBuyer = inputBuyers_1[_i];
            _loop_1(inputBuyer);
        }
    };
    return BuyerService;
}());
exports["default"] = BuyerService;
