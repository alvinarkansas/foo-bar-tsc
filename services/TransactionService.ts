import { ITransaction } from "../interface";
import { Transaction } from "../models";

export default class TransactionService {
  static generate(inputTransactions: ITransaction[]) {
    let transactions: ITransaction[] = [];

    for (let inputTransaction of inputTransactions) {
      transactions.push(new Transaction(inputTransaction));
    }

    return transactions;
  }
}
