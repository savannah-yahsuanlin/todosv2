const conn = require('./conn')
const Todo = require('./Todo')

const syncAndSeed = async() => {
	await conn.sync({force: true})

	await Todo.create({
		taskName: 'Buy cat food',
		assignee: 'Cody'
	})

	await Todo.create({
		taskName: 'Take over',
		assignee: 'Cody'
	})

	console.log(`seeding`)
}

module.exports = {
	conn,
	syncAndSeed,
	models: {
		Todo
	}
}