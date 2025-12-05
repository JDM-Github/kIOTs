// Author: JDM
// Created on: 2025-12-05T07:59:23.854Z

const express = require("express");
const { Test } = require("../models/Models");

class TestRouter {
    constructor() {
        this.router = express.Router();
        this.getRouter();
        this.postRouter();
    }

    getRouter() {
        this.router.get("/get-all", async (req, res) => {
			try {
				const tests = await Test.findAll();
				return res.json({
					success: true,
					message: "Successfully fetched all tests.",
					tests,
				});
			} catch (err) {
				console.error(err);
				return res.status(500).json({
					success: false,
					message: "Internal server error.",
				});
			}
		});
    }

    postRouter() {

	}
}


module.exports = new TestRouter().router;
