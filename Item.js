"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(name, type, prices) {
        prices.forEach(function (el) {
            if (el.priceFor !== "regular") {
                console.log("👾 NO REGULAR PRICE ERROR");
            }
        });
        this.name = name;
        this.type = type;
        this.prices = prices;
    }
    return Item;
}());
exports["default"] = Item;
