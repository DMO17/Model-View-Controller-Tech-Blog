const connection = require("../config/connection");
const seedBlogs = require("./blogs");
const seedComments = require("./comments");
const seedUsers = require("./users");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBlogs();
  console.log("\n----- BLOG SEEDED -----\n");

  // await seedComments();
  // console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
