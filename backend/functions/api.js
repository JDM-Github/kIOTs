
// Author: JDM
// Created on: 2025-12-05T07:58:39.681Z

const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const path = require("path");
const { sequelize } = require("../models/Models.js");
const routes = require("../routes/Routers.js");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// -------------------------------------------------------------------------------
// CORS CONFIGURATION
// -------------------------------------------------------------------------------
const DEVELOPMENT = false;
if (DEVELOPMENT) {
	app.use(
		cors({
			origin: "",
			credentials: true,
			optionSuccessStatus: 200,
		})
	);
} else {
	app.use(cors());
}

// -------------------------------------------------------------------------------
// ALL ROUTES
// -------------------------------------------------------------------------------
router.get("/reset", async (req, res) => {
	await sequelize.sync({ force: true });
	res.send("Database reset successful.");
});
router.use("/", routes);

// -------------------------------------------------------------------------------
// APP MIDDLEWARE
// -------------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

// Set base path for serverless functions
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
