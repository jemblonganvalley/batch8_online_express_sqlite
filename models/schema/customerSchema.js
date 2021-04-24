const db = require("../connection");

async function createCustomerTable() {
  return await db.schema
    .createTable("customers", (table) => {
      table.increments("customer_id").notNullable();
      table.string("customer_first_name").notNullable();
      table.string("customer_last_name").notNullable();
      table.string("customer_address").notNullable();
      table.string("customer_phone").notNullable();
      table.string("customer_email").notNullable();
      table.date("customer_birthday").notNullable();
      table.string("customer_gender").notNullable();
      table.timestamp("created_at").defaultTo(db.fn.now());
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

createCustomerTable().then((result) => {
  console.log(`
    ===============================
    TABLE CUSTOMERs BERHASIL DI BUAT
    ===============================
    `);
  process.exit();
});
