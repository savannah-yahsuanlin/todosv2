const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgresql://localhost/todos')

module.exports = conn

