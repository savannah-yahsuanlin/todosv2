const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://todos_j578_user:5lOjIrb8QIGxW2SlbmDwPcmbaUwbQOPy@dpg-cg8riq64dad531tj6ar0-a.singapore-postgres.render.com/todos_j578')

module.exports = conn