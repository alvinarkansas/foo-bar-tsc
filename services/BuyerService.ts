import { IBuyer } from "../interface";
import { Buyer } from "../models";

export default class BuyerService {
  buyers: IBuyer[];
  errors: boolean;

  constructor(inputBuyers: IBuyer[]) {
    this.buyers = [];
    this.errors = false;
    this.generate(inputBuyers);
  }
  generate(inputBuyers: IBuyer[]) {
    for (let inputBuyer of inputBuyers) {
      let buyerExists = this.buyers.find(el => el.name === inputBuyer.name);

      if (buyerExists) {
        console.log(`❌ ERROR: Duplicate buyer name --> ${inputBuyer.name}\n`);
        this.errors = true;
      } else {
        this.buyers.push(new Buyer({
          name: inputBuyer.name,
          type: inputBuyer.type
        }));
      }
    }
  }
}
