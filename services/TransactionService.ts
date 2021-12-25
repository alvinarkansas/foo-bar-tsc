import { ITransaction } from "../interface";
import { Transaction } from "../models";

export default class TransactionService {
  transactions: ITransaction[];

  constructor(inputTransactions: ITransaction[]) {
    this.transactions = [];
    this.generate(inputTransactions)
  }

  generate(inputTransactions: ITransaction[]) {
    for (let inputTransaction of inputTransactions) {
      this.transactions.push(new Transaction(inputTransaction));
    }
  }
}
