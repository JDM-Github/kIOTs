
// Author: [object Object]
// Created on: 2025-12-05T07:58:39.706Z

require("dotenv").config();
const pg = require("pg");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: "postgres",
	dialectModule: pg,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

module.exports = sequelize;
