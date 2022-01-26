const Comment = require("../models/Comment");

const commentData = [
  {
    comment: "otnhot nhtrh iat hatrhrt",
    blog_id: 1,
    user_id: 2,
  },
  {
    comment: "oirnhpotahpot hpoatrh",
    blog_id: 1,
    user_id: 3,
  },
  {
    comment: "r0tjh0rt9hn0atrh",
    blog_id: 2,
    user_id: 2,
  },
  {
    comment: "aotmhtanhmartnharth",
    blog_id: 2,
    user_id: 3,
  },
  {
    comment: "artharthatrhatrhtah",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: "rthathatrharth",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: "arthatrhatrhtraahatr",
    blog_id: 4,
    user_id: 2,
  },
  {
    comment: "rathatrhtahathtarh",
    blog_id: 4,
    user_id: 1,
  },
  {
    comment: "ratharthrtaharth",
    blog_id: 5,
    user_id: 2,
  },
  {
    comment: "rtaharthatrhta",
    blog_id: 6,
    user_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
