const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let dbUrl = process.env.DB_URL_local;
if(process.env.NODE_ENV === 'pro'){
  dbUrl = process.env.DATABASE_URL;
}

const params = url.parse(dbUrl);
const [user, password] = params.auth.split(':');

const option = {
  user,
  password,
  port: params.port,
  host: params.host.split(':')[0],
  database: params.path.split('/')[1],
  ssl: params.hostname !== 'localhost',
};

module.exports = new Pool(option);
