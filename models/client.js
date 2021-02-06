const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const Client = sequelize.define(
  "clients",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    address: DataTypes.STRING,
    phone: { type: DataTypes.STRING, unique: true }
  },
  { timestamps: true }
);

module.exports = Client;
