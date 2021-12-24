export default class Buyer {
  name: string;
  type: string;

  constructor(name: string, type: "VIP" | "regular" | "wholesale") {
    this.name = name;
    this.type = type;
  }
}
