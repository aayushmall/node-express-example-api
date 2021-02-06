const { Sequelize } = require("sequelize");
const express = require("express");
const router = express.Router();
const Client = require("./../models/client");
const Op = Sequelize.Op;

/* GET clients listing. */
router.get("/", async (req, res, next) => {
  try {
    const searchterm = req.query.search_term;
    let assets = [];
    let options = {};

    if (searchterm) {
      options = {
        where: {
          email: {
            [Op.like]: `%${searchterm}%`
          }
        }
      };
    }

    assets = await Client.findAll(options);
    res.status(200).send(assets);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
