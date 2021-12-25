"use strict";
exports.__esModule = true;
var SummaryService_1 = require("./services/SummaryService");
var input = require("./input-example.json");
var errorInput = require("./error-input-example");
new SummaryService_1["default"](input);
new SummaryService_1["default"](errorInput);
