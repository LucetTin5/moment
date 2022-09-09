"use strict";
// express
import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => res.render("main.html"));

export default rootRouter;
