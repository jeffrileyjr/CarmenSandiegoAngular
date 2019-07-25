"use strict"
const {Pool} = require("pg");
const credentials = {
    user: "jeffril2_burkkvtpixsjql",
    password: "T!gers1981",
    host: "localhost",
    port: 5432,
    database: "jeffril2_CarmenSandiego",
    ssl: false
};
module.exports = new Pool(credentials);