const { Pool } = require("pg");

// DB情報をもったプールを生成
const pool = new Pool({
    host: '127.0.0.1',
    database: 'nodedb',
    port: 5432,
    user: 'postgres',
    password: 'root',
});
pool.connect();
pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});

module.exports = pool;