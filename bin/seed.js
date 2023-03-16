const {conn, Todo} = require('../server/db')

const seed = async() => {
	await conn.sync({force: true})

	await Todo.create({
		taskName: 'Buy cat food',
		assignee: 'Cody'
	})

	await Todo.create({
		taskName: 'Take over',
		assignee: 'Cody'
	})

	conn.close()
  console.log(`
    Seeding successful!
    Time to work!
  `)
}

seed().catch(err => {
  conn.close()
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})