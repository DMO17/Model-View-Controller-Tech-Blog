const Comment = require("../models/Comment");

const commentData = [
  {
    comment: "Nice info!",
    blog_id: 1,
    user_id: 2,
  },
  {
    comment: "Great share!",
    blog_id: 1,
    user_id: 3,
  },
  {
    comment: "Useful post",
    blog_id: 2,
    user_id: 2,
  },
  {
    comment: "Amazing write-up!",
    blog_id: 2,
    user_id: 3,
  },
  {
    comment: " I like how you've tackled this assignment.",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: " Prestigious work",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: "Keep up the good work",
    blog_id: 4,
    user_id: 2,
  },
  {
    comment: "It looks like you've put a lot of work into this",
    blog_id: 4,
    user_id: 1,
  },
  {
    comment: "This shows you've really been thinking",
    blog_id: 5,
    user_id: 2,
  },
  {
    comment: "My goodness, how impressive!",
    blog_id: 6,
    user_id: 1,
  },
  {
    comment: " I like how you've tackled this assignment.",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: " Prestigious work",
    blog_id: 3,
    user_id: 1,
  },
  {
    comment: "Keep up the good work",
    blog_id: 4,
    user_id: 2,
  },
  {
    comment: "It looks like you've put a lot of work into this",
    blog_id: 4,
    user_id: 1,
  },
  {
    comment: "This shows you've really been thinking",
    blog_id: 5,
    user_id: 2,
  },
  {
    comment: "My goodness, how impressive!",
    blog_id: 6,
    user_id: 1,
  },
  {
    comment: " I like how you've tackled this assignment.",
    blog_id: 7,
    user_id: 1,
  },
  {
    comment: " Prestigious work",
    blog_id: 7,
    user_id: 2,
  },
  {
    comment: "Keep up the good work",
    blog_id: 8,
    user_id: 3,
  },
  {
    comment: "It looks like you've put a lot of work into this",
    blog_id: 8,
    user_id: 4,
  },
  {
    comment: "This shows you've really been thinking",
    blog_id: 9,
    user_id: 1,
  },
  {
    comment: "My goodness, how impressive!",
    blog_id: 9,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
