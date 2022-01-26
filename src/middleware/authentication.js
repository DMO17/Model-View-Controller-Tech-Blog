const authentication = (req, res, next) => {
  if (req.session.loggedIn) {
    console.log("User is in session!!!!!!");

    next();
  } else {
    return res.redirect("/login");
  }
};

module.exports = authentication;
