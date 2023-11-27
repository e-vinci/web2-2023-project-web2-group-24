const info = require("../config.js");
const db = require('postgresql')(info.dbPath, {verbose:console.log});

module.exports = db;
