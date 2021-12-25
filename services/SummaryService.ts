import { IInput } from "../interface";
import BuyerService from "./BuyerService";
import ItemService from "./ItemService";
import TransactionService from "./TransactionService";

export default class SummaryService {
  static create(input: IInput) {
    const buyers = BuyerService.generate(input.Buyers);
    const items = ItemService.generate(input.Items);
    const transactions = TransactionService.generate(input.Transaction);

    console.log("👤", buyers);
    console.log("👕", items);
    console.log("🛒", transactions);
  }
}
