const router = require('express').Router()
const { Todo } = require('../db')


router.get('/', async(req, res, next) => {
	try {
		res.send(await Todo.findAll())
	} catch (error) {
		next(error)
	}
})

router.get('/:id', async(req, res, next) => {
	try {
		res.send(await Todo.findByPk(req.params.id))
	} catch (error) {
		next(error)
	}
})

router.post('/', async(req, res, next) => {
	try {
		res.status(201).send(await Todo.create(req.body))
	} catch (error) {
		next(error)
	}
})

router.put('/:id', async(req, res, next) => {
	try {
		const todo = await Todo.findByPk(req.params.id)
		res.send(await todo.update(req.body))
	} catch (error) {
		next(error)
	}
})

router.delete('/:id', async(req, res, next) => {
	try {
		const todo = await Todo.findByPk(req.params.id)
		await todo.destroy()
		res.send(todo)
	} catch (error) {
		next(error)
	}
})

router.use((err, req, res, next) => {
	res.status(500).send({error: err})
})

module.exports = router