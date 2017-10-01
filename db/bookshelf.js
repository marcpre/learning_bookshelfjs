const config = require('../knexfile')
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

//compute additional properties on the db with "virtuals"
bookshelf.plugin('virtuals')

knex.migrate.latest()

module.exports = bookshelf
