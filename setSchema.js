const itemSchema = require('./itemModel');
module.exports = (db) => {
    db.model("Item", itemSchema)
    return db;
}