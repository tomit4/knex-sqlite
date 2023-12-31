/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Migrations immediately create the tables
exports.up = knex => {
    return knex.schema.createTableIfNotExists('todos', table => {
        table.increments()
        table.string('title')
        table.text('description')
        table.dateTime('start_date')
        table.dateTime('due_date')
        table.timestamps()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => {
    return knex.schema.dropTableIfExists('todos')
}
