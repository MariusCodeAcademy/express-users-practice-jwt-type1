function showBody(req, res, next) {
  if (req.method === 'POST') {
    console.log('The body we got: ', req.body);
  }
  next();
}

module.exports = {
  showBody,
};
