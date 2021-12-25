"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var ItemService = /** @class */ (function () {
    function ItemService() {
    }
    ItemService.generate = function (inputItems) {
        var items = [];
        for (var _i = 0, inputItems_1 = inputItems; _i < inputItems_1.length; _i++) {
            var inputItem = inputItems_1[_i];
            var regularExists = inputItem.prices.filter(function (el) { return el.priceFor === "regular"; }).length > 0;
            if (regularExists) {
                items.push(new models_1.Item(inputItem));
            }
            else {
                console.log("\u274C ERROR: Price doesn't contain regular price --> ".concat(inputItem.name, "\n"));
            }
        }
        return items;
    };
    return ItemService;
}());
exports["default"] = ItemService;
