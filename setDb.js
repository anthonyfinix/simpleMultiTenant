const getTenantDb = require('./getTenantDb');
const User = require('./userModel');
const dbPool = require('./dbPool');
const setSchema = require('./setSchema');
module.exports = async (req, res, next) => {
    let { user } = req.headers;
    if (user) {
        let dbUser = await User.find({ username: user });
        let cachedDb = dbPool.find(db => db.dbName === dbUser.tenantId);
        if (cachedDb) {
            cachedDb = setSchema(cachedDB);
            req.db = cachedDb
        }else{
            let db = await getTenantDb(dbUser[0].tenantId);
            dbPool.push(db);
            db = setSchema(db);
            req.db = db;
        };
        next()
    } else {
        res.send("No User")
    }
}