import { IItem } from "../interface";
import { Item } from "../models";

export default class ItemService {
  static generate(inputItems: IItem[]) {
    let items: IItem[] = [];

    for (let inputItem of inputItems) {
      let regularExists = inputItem.prices.filter((el) => el.priceFor === "regular").length > 0;
      if (regularExists) {
        items.push(new Item(inputItem));
      } else {
        console.log(`❌ ERROR: Price doesn't contain regular price --> ${inputItem.name}\n`);
      }
    }

    return items;
  }
}
