module.exports.isAuthorized = function (req, res, next) {
  console.log(req.session, "isAuth user sess")
  if (!req.session.id) {
    var err = new Error("Not authorized! Go back!");
    err.status = 401;
    return next(err);
  } else {
    return next();
  }
};
