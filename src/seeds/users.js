const User = require("../models/User");

const userData = [
  {
    first_name: "Aaron",
    last_name: "Rodgers",
    username: "qb-packers12",
    email: "aaron12@gmail.com",
    password: "password123",
    // phone_num: 12345678910,
  },
  {
    first_name: "Patrick",
    last_name: "Mahamoes",
    username: "mahomeboy15",
    email: "15kcpat@gmail.com",
    password: "password123",
  },
  {
    first_name: "Sam",
    last_name: "Donalds",
    username: "donald1233",
    email: "sm123@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
