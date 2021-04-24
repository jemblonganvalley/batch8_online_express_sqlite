//import db
const db = require("./connection");

//input data customer
async function createCustomer(data) {
  return await db("customers")
    .insert(data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//read data customers
async function readCustomers() {
  return await db("customers")
    .select("*")
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

module.exports = { createCustomer, readCustomers };
