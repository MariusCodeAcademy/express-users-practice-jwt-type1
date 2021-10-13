const mysql = require('mysql2/promise');

const { dbConfig } = require('../config');

async function dbAction(sql, dbData = []) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [dbResult] = await conn.execute(sql, dbData);
    await conn.end();
    return dbResult;
  } catch (error) {
    console.error('dbAction error ', error.message);
    return false;
  }
}

module.exports = {
  dbAction,
};
