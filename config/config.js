
// Author: [object Object]
// Created on: 2025-12-05T07:58:39.724Z

require("dotenv").config();
const pg = require("pg");

module.exports = {
	development: {
		use_env_variable: "DATABASE_URL",
		dialect: "postgres",
		dialectModule: pg,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
};
