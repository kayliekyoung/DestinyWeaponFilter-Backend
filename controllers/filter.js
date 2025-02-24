const pool = require("../sql/connections");

const getAllWeapons = (req, res) => {
    pool.query("SELECT * FROM destiny2weaponsdbheresy LIMIT 3000",
     (err, rows) => {
        if (err) return res.json(err);
        return res.json(rows);
     });
}

module.exports = {
    getAllWeapons
};