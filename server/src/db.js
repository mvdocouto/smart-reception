const { DataStore } = require("notarealdb");
const store = new DataStore("./data");

module.exports = {
  events: store.collection("events"),
  users: store.collection("users"),
  collaborators: store.collection("collaborators")
};