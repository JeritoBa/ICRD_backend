const pool = require("../db/sql");

async function find() {
    const response = await pool.query("SELECT id, name FROM department where name != admin_gen ORDER BY name");
    return response.rows;
}

module.exports = { find };
