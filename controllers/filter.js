const pool = require("../sql/connections");

const getAllWeapons = (req, res) => {
    pool.query("SELECT * FROM testingAdvancedParser LIMIT 2000",
     (err, rows) => {
        if (err) return res.json(err);
        return res.json(rows);
     });
}

module.exports = {
    getAllWeapons
};