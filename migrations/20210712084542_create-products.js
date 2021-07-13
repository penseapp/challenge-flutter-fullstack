export const up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("description")
    table.float("price");
    table.float("promotional-price");
    table.string("flag-status");
    table.string("category");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("products");
};