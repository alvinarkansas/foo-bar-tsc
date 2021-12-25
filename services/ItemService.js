"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var ItemService = /** @class */ (function () {
    function ItemService(inputItems) {
        this.items = [];
        this.errors = false;
        this.generate(inputItems);
    }
    ItemService.prototype.generate = function (inputItems) {
        var _loop_1 = function (inputItem) {
            var regularExists = inputItem.prices.filter(function (el) { return el.priceFor === "regular"; }).length > 0;
            var itemExists = this_1.items.find(function (el) { return el.name === inputItem.name; });
            if (regularExists) {
                if (!itemExists) {
                    this_1.items.push(new models_1.Item(inputItem));
                }
                else {
                    console.log("\u274C ERROR: Duplicate item name --> ".concat(inputItem.name, "\n"));
                    this_1.errors = true;
                }
            }
            else {
                console.log("\u274C ERROR: Price doesn't contain regular price --> ".concat(inputItem.name, "\n"));
                this_1.errors = true;
            }
        };
        var this_1 = this;
        for (var _i = 0, inputItems_1 = inputItems; _i < inputItems_1.length; _i++) {
            var inputItem = inputItems_1[_i];
            _loop_1(inputItem);
        }
    };
    return ItemService;
}());
exports["default"] = ItemService;
