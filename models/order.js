const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const Order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    type: DataTypes.STRING,
    client_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    order_date: DataTypes.DATE
  },
  { timestamps: true }
);

module.exports = Order;
