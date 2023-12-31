// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'better-sqlite3',
        connection: {
            filename: './test.db',
        },
        useNullAsDefault: true,
    },

    staging: {},

    production: {},
}
