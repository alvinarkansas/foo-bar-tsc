"use strict";
exports.__esModule = true;
var SummaryService_1 = require("./services/SummaryService");
var input = require("./input-example.json");
var errorInput = require("./error-input-example");
SummaryService_1["default"].create(input);
SummaryService_1["default"].create(errorInput);
