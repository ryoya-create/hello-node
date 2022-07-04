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
const query = {
    text: "SELECT * FROM member",
  };
pool
    .query(query)
    .then((res) => {
    console.log(res.rows[0],res.rows[1]);
    client.end();
    })
    .catch((e) => console.error(e.stack));

module.exports = pool;