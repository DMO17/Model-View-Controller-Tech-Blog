const { Model, DataTypes, UUIDV4, UUID } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  blog_uuid: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    // primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blog_img: {
    type: DataTypes.STRING,
    defaultValue:
      "https://c0.wallpaperflare.com/preview/304/131/640/beverage-blog-blogger-browsing.jpg",
    allowNull: false,
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
  modelName: "blog",
};

class Blog extends Model {}

Blog.init(schema, options);

module.exports = Blog;
