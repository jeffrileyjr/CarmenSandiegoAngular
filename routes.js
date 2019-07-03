"use strict"
const express = require("express");
const clues = express.Router();
const pool = require("./connection");

function selectAll(res){
    pool
    .query("select * from clues")
    .then(result => res.json(result.rows));
}
function getStolenGoods(res){
    pool
    .query("select * from stolenGoods")
    .then(result => res.json(result.rows));
}

clues.get("/clues", (req, res) =>{
    selectAll(res);
});

clues.get("/stolenGoods", (req, res) =>{
    getStolenGoods(res);
});


module.exports = clues;