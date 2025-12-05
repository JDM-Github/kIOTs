
// Author: [object Object]
// Created on: 2025-12-05T07:58:39.706Z

require("dotenv").config();
const pg = require("pg");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://jdm:123@172.16.112.193:5432/kiots", {
	dialect: "postgres",
	dialectModule: pg,
});

module.exports = sequelize;
