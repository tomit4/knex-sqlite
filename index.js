const knex = require('knex')
const knexFile = require('./knexfile.js').development

const db = knex(knexFile)

const insertData = (tableName, data) => {
    return db(tableName)
        .insert(data)
        .then(resp => resp)
        .finally(() => db.destroy())
}

const selectData = (
    tableName,
    options = { fields: [], filteringConditions: [] },
) => {
    const { fields, filteringConditions } = options
    // const States = db('states')
    // const Cities = db('cities')
    return db(tableName)
        .select(fields)
        .where(builder => {
            filteringConditions.forEach(condition => {
                builder.where(...condition)
            })
        })
        .then(data => data)
        .finally(() => db.destroy())
}

insertData('todos', [
    {
        title: 'Write an article about Knex :)',
        description: 'This will be description',
        start_date: '2020-01-01 12:00',
        due_date: '2020-02-15 16:56',
    },
])
// Select all todos
selectData('todos').then(todos => console.log(todos))
