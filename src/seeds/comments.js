const Comment = require("../models/Comment");

const commentData = [
  {
    comment: "user 2 comment on user 1 blog on Python for Creating Mobile Apps",
    blog_id: 1,
    user_id: 2,
  },
  {
    comment: "user 3 comment on user 1 blog on Python for Creating Mobile Apps",
    blog_id: 1,
    user_id: 3,
  },
  {
    comment: "user 1 comment on user 1 blog on Python for Creating Mobile Apps",
    blog_id: 1,
    user_id: 1,
  },
  {
    comment: "",
    blog_id: 1,
    user_id: 2,
  },
  {
    comment: "user 2 comment on user 1 blog on Backend Chaos",
    blog_id: 2,
    user_id: 2,
  },
  {
    comment: "user 3 comment on user 1 blog on Backend Chaos",
    blog_id: 2,
    user_id: 3,
  },
  {
    comment: "user 1 comment on user 2 blog on Technological Marvels of 2021",
    blog_id: 2,
    user_id: 2,
  },
  {
    comment: "user 3 comment on user 1 blog on Python for Creating Mobile Apps",
    blog_id: 3,
    user_id: 2,
  },
  {
    comment: "user 1 comment on user 1 blog on Python for Creating Mobile Apps",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: "user 2 comment on user 2 blog on Python for Creating Mobile Apps",
    blog_id: 3,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
