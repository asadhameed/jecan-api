const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParse = require("body-parser");

const registerController = require("../controllers/registerController");

const error = require("../middleware/error");
const login = require("../controllers/login");

const { paramsId, headerUserId } = require("../middleware/objectIdvalidation");
const { userAuth, isLogin } = require("../../src/middleware/auth");

module.exports = (app) => {
  app.use(
    cors({
      exposedHeaders: ["x-auth-token"],
    })
  );

  app.use(bodyParse.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.use(express.json());
  app.use(bodyParse.urlencoded({ extended: true }));

  app.post("/user/login", login.userLogin);
  app.post("/user/registration", registerController.createUser);
  app.get("/user/:id", paramsId, registerController.getUser);

  app.use("/static", express.static(path.resolve(__dirname, "..", "images")));
  app.use(error);
};
