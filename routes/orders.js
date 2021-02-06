const { Sequelize } = require("sequelize");
const express = require("express");
const router = express.Router();
const Order = require("./../models/order");
const Op = Sequelize.Op;

/* GET orders listing. */
router.get("/", async (req, res, next) => {
  try {
    const searchterm = req.query.search_term;
    let assets = [];
    let options = {};

    if (searchterm) {
      options = {
        where: {
          type: {
            [Op.like]: `%${searchterm}%`
          }
        }
      };
    }

    assets = await Order.findAll(options);
    res.status(200).send(assets);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
