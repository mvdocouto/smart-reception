const { DataStore } = require("notarealdb");
const store = new DataStore("./data");

module.exports = {
  events: store.collection("events")
};