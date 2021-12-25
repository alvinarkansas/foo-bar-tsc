"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(name, type, prices) {
        for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
            var price = prices_1[_i];
            if (price.priceFor !== "regular") {
                console.log("".concat(name, " does not have regular price"));
            }
        }
        this.name = name;
        this.type = type;
        this.prices = prices;
    }
    return Item;
}());
exports["default"] = Item;
