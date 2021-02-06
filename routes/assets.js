const { Sequelize } = require("sequelize");
const express = require("express");
const router = express.Router();
const Asset = require("./../models/asset");
const Op = Sequelize.Op;

/* GET assets listing. */
router.get("/", async (req, res, next) => {
  try {
    const searchterm = req.query.search_term;
    let assets = [];
    let options = {};

    if (searchterm) {
      options = {
        where: {
          name: {
            [Op.like]: `%${searchterm}%`
          }
        }
      };
    }

    assets = await Asset.findAll(options);
    res.status(200).send(assets);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
