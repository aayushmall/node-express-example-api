const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");
const Asset = require("./models/asset");
const Client = require("./models/client");
const Order = require("./models/order");

sequelize
  .authenticate()
  .then(async (result) => {
    console.log(result);
    console.log("Connected to DB");
    await Promise.all([
      Asset.sync({ force: true }),
      Client.sync({ force: true }),
      Order.sync({ force: true })
    ]);

    let clients = [],
      assets = [],
      orders = [];

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((index) => {
      clients.push({
        first_name: `John`,
        last_name: `Doe${index}`,
        email: `testemail${index}@test.com`,
        address: `Address`,
        phone: `123456789${index}`
      });
      assets.push({
        name: `Asset ${index}`,
        value: Math.floor(Math.random() * (100000 - 1000 + 1) + 1000)
      });
    });

    await Promise.all([Client.bulkCreate(clients), Asset.bulkCreate(assets)]);

    [1, 2, 3, 4, 5].forEach((index) => {
      orders.push({
        type: "Sell",
        client_id: Math.floor(Math.random() * (10 - 1 + 1) + 1),
        amount: Math.floor(Math.random() * (10000 - 100 + 1) + 100),
        order_date: new Date()
      });
    });

    [6, 7, 8, 9, 10].forEach((index) => {
      orders.push({
        type: "Buy",
        client_id: Math.floor(Math.random() * (10 - 1 + 1) + 1),
        amount: Math.floor(Math.random() * (10000 - 100 + 1) + 100),
        order_date: new Date()
      });
    });

    await Order.bulkCreate(orders);
  })
  .catch((err) => {
    console.error(err);
  });
