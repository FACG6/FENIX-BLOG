const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');

const sqlPath = path.join(__dirname, 'dbBuild.sql');
const sqlCommands = fs.readFileSync(sqlPath).toString();

const buildDatabase = connection.query(sqlCommands);
buildDatabase
  .then(() => console.log('Database build sucsessfuly'))
  .catch((err) => console.log('error', err))

module.exports = buildDatabase;
