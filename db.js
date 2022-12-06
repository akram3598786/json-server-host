
const redbus = require("./data/redbus.json");
const Tickets = require("./data/Tickets.json");
const UpperSeats = require("./data/UpperSeats.json");
const LowerSeats = require("./data/LowerSeats.json");
const users = require("./data/users-mock-c3.json");
const db_m = require("./data/db.mock-3-mh.json");
const todos = require("./data/todos.json");

module.exports = {
  redbus,
  Tickets,
  UpperSeats,
  LowerSeats,
  users,
  db_m,
  todos
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
