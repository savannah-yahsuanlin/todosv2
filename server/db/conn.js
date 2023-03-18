const Sequelize = require('sequelize')
require('dotenv').config()
const conn = new Sequelize(process.env.DATABASE_URL || 'postgresql://localhost/todos')

module.exports = conn

