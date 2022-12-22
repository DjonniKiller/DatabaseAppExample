const { mainConnection } = require('./knexfile')
const knex = require('knex')

exports.mainConnection = knex(mainConnection)