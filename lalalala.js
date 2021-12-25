const Buyers = [
  {
    name: "Ani",
    type: "regular",
  },
  {
    name: "Ani",
    type: "VIP",
  },
  {
    name: "Charlie",
    type: "regular",
  },
  {
    name: "Dipta",
    type: "wholesale",
  },
];

let results = [];

const checkUnique = () => {
  for (let buyer of Buyers) {
    let isDuplicate = false;
    if (results.find((result) => result.name === buyer.name)) {
      console.log("dup");
    } else {
      results.push(buyer);
      console.log("aman");
    }
  }

  return isDuplicate;
};

console.log(checkUnique());
