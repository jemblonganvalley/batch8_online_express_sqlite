const express = require("express");
const cus = express.Router();
const { createCustomer, readCustomers } = require("../models/customerModels");

//routing create customer / POST
cus.post("/", (req, res) => {
  //ambil data dari body
  const customerData = req.body;

  //masukan data dari body ke database
  createCustomer(customerData)
    .then((result) => {
      if (result.length > 0) {
        res.status(201).json({
          status: "success",
          result: result,
        });
        res.end();
      } else {
        res.status(500).json({
          status: "failed",
          result: result,
        });
        res.end();
      }
    })
    .catch((err) => console.log(err));
});

cus.get("/", (req, res) => {
  readCustomers()
    .then((result) => {
      res.status(200).json({
        total_data: result.length,
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = cus;
