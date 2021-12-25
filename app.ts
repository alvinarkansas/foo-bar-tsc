import SummaryService from "./services/SummaryService";
const input = require("./input-example.json");
const errorInput = require("./error-input-example");

SummaryService.create(input);
SummaryService.create(errorInput);
