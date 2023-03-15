const { blueBright } = require('chalk');
const PORT = process.env.PORT || 8081;
const app = require('./app');
const db = require('./db');

const init = async () => {
  await db.syncAndSeed();
  app.listen(PORT, () =>
    console.log(blueBright(`Listening at http://localhost:${PORT}`))
  );
};

init();
