export default class Transaction {
  item: any;
  qty: number;
  buyer: string;

  constructor(item, qty, buyer) {
    this.item = item;
    this.qty = qty;
    this.buyer = buyer;
  }
}
