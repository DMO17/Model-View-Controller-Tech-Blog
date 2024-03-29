const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");
const { hashedPassword } = require("../hooks");
const bcrypt = require("bcrypt");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underScored: true,
  modelName: "user",
  hooks: { beforeCreate: hashedPassword },
};

class User extends Model {
  async validatePassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

User.init(schema, options);

module.exports = User;
