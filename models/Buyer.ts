import { IBuyer } from "../interface";

export default class Buyer {
  name: string;
  type: string;

  constructor({ name, type }: IBuyer) {
    this.name = name;
    this.type = type;
  }
}
