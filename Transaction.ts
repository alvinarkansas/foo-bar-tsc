export default class Transaction {
  name: string;
  qty: number;
  buyer: string;

  constructor(name, qty, buyer) {
    this.name = name;
    this.qty = qty;
    this.buyer = buyer;
  }
}
