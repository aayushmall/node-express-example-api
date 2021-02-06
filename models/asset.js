const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const Asset = sequelize.define(
  "assets",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    total_value: DataTypes.STRING
  },
  { timestamps: true }
);

module.exports = Asset;
