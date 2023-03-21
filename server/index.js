const PORT = 8081;
const app = require('./app');
const {conn} = require('./db')


conn.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  })
