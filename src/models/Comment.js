const { Model, DataTypes, UUID } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blog_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "blog",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underScored: true,
  modelName: "comment",
};

class Comment extends Model {}

Comment.init(schema, options);

module.exports = Comment;
