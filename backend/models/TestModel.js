// Author: JDM
// Created on: 2025-12-05T07:59:14.562Z

const sequelize = require("./Sequelize.js");
const { DataTypes } = require("sequelize");

const Test = sequelize.define(
    "Test",
    {
        // Define model attributes here
    },
    {
        timestamps: true,
    }
);

module.exports = Test;
