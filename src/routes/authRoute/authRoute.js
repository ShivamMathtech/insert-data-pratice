const express = require("express");
const registerctrls = require("../../controllers/authctrls/registerctrls");
const authRoute = express.Router();
authRoute.post("/auth/register", registerctrls);

module.exports = authRoute;
