import { IBuyer } from "../interface";
import { Buyer } from "../models";

export default class BuyerService {
  static generate(inputBuyers: IBuyer[]) {
    let buyers: IBuyer[] = [];

    for (let inputBuyer of inputBuyers) {
      if (buyers.find(el => el.name === inputBuyer.name)) {
        console.log(`❌ ERROR: Duplicate buyer name --> ${inputBuyer.name}\n`);
      } else {
        buyers.push(new Buyer({
          name: inputBuyer.name,
          type: inputBuyer.type
        }));
      }
    }

    return buyers;
  }
}
