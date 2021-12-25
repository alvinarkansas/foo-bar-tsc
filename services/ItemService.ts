import { IItem } from "../interface";
import { Item } from "../models";

export default class ItemService {
  items: IItem[]
  errors: boolean

  constructor(inputItems: IItem[]) {
    this.items = []
    this.errors = false
    this.generate(inputItems);
  }

  generate(inputItems: IItem[]) {
    for (let inputItem of inputItems) {
      let regularExists = inputItem.prices.filter((el) => el.priceFor === "regular").length > 0;
      let itemExists = this.items.find(el => el.name === inputItem.name);

      if (regularExists) {
        if (!itemExists) {
          this.items.push(new Item(inputItem));
        } else {
          console.log(`❌ ERROR: Duplicate item name --> ${inputItem.name}\n`);
          this.errors = true
        }
      } else {
        console.log(`❌ ERROR: Price doesn't contain regular price --> ${inputItem.name}\n`);
        this.errors = true
      }
    }
  }
}
