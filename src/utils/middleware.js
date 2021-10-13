function showBody(req, res, next) {
  if (req?.body) {
    console.log('The body we got: ', req.body);
  }
  next();
}

module.exports = {
  showBody,
};
