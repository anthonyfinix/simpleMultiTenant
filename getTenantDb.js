const mongoose = require('mongoose');
module.exports = async (tenantId) => {
    if (tenantId) return await mongoose.createConnection(`mongodb://localhost:27017/${tenantId}?readPreference=primary&ssl=false`);
}