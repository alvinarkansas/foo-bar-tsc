import SummaryService from "./services/SummaryService";
const input = require("./input-example.json");
const errorInput = require("./error-input-example");

new SummaryService(input);
new SummaryService(errorInput);
