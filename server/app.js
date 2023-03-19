const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'));
app.use(express.json())
app.use('/api', require('./api'))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.use((req, res, next) => {
  const error = Error('page not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app