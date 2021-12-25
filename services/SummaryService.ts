import { IInput } from "../interface";
import BuyerService from "./BuyerService";
import ItemService from "./ItemService";
import TransactionService from "./TransactionService";

export default class SummaryService {
  static create(input: IInput) {
    const buyers = new BuyerService(input.Buyers);
    const items = new ItemService(input.Items);
    const transactions = new TransactionService(input.Transaction);

    console.log("👤", buyers);
    console.log("👕", items);
    console.log("🛒", transactions);

    if (!items.errors && !buyers.errors) {
      // print invoice
      console.log("📰 print output");
    }
  }
}
