/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('categories', function (table) {
    table.increments('id');
    table.string('name');
  })
 };
 
 exports.down = function(knex) {
  return knex.schema.dropTable('categories');
 };