const bcrypt = require("bcrypt");
const { user } = require("../models");
const { Op } = require("sequelize");
const { hashSync, compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
let self = {};


self.register = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        success: false,
        message: "“Content can not be empty!”",
      });
    }
    const newUser = {
      email: req.body.email,
      password: hashSync(req.body.password, 10),
    };

    let data = await user.create(newUser);
    return res.status(201).json({
      success: true,
      data: data,
    });
  } catch (err) {
    next(err);

  }
};

self.login = async (req, res, next) => {
  try {
    const userData = await user.findOne({ where: { email: req.body.email } });
    if (!userData) {
      return res.status(401).send({
        success: false,
        message: "Could not find the user",
      });
    }
    if (!compareSync(req.body.password, userData.password)) {
      return res.status(401).send({
        success: false,
        message: "Incorrect Password",
      });
    }
    const payload = {
      email: userData.email,
      id: user._id,
    };

    const token = jwt.sign(payload, "Random String", { expiresIn: "1d" });
    return res.status(200).send({
      success: true,
      message: "Logged in successfully",
      token: "Bearer " + token,
    });
  } catch (err) {
    next(err);

  }
};

self.logout = async (req, res, next) => {
  try {
    res.send("this is logout user route");
  } catch (error) {
    next(err);

  }
};

self.get = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = await user.findByPk(id);
    if (data)
      return res.status(200).json({
        success: true,
        data: data,
      });
    else
      return res.status(400).json({
        success: false,
        error: "“No such user present”",
        data: [],
      });
  } catch (err) {
    next(err);

  }
};

self.protected = async (req, res, next) => {
  try {
    res.send("this is  user Protected route");
  } catch (error) {
    console.error(error);
  }
};

self.getAll = async (req, res, next) => {
  try {
    let data = await user.findAll({});
    return res.status(200).json({
      success: true,
      count: data.length,
      data: data,
    });
  } catch (err) {
    next(err);

  }
};
self.updateUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await user.update(body, {
      where: {
        id: id,
      },
    });
    if (data[0] === 0) {
      return res.status(200).json({
        success: false,
        error: " “No user found with this id”",
      });
    }
    return res.status(200).json({
      success: true,
      " “number of rows changed”": data,
    });
  } catch (err) {
    next(err);

  }
};
self.delete = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = await user.destroy({
      where: {
        id: id,
      },
    });
    if (data === 1) {
      return res.status(200).json({
        success: true,
        message: `User with id=${id} deleted`,
      });
    }
    return res.status(200).json({
      success: false,
      message: `User with id=${id} is not present.`,
    });
  } catch (err) {
    next(err);

  }
};
self.deleteAll = async (req, res, next) => {
  try {
    let data = await user.destroy({
      where: {},
      truncate: true,
    });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    next(err);

  }
};
self.handleAdmin = async (req, res, next) => {
  try {
    res.send("this is Admin protected route");
  } catch (err) {
    next(err);
  }
};

module.exports = self;
