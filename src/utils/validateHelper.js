const joi = require('joi');

// eslint-disable-next-line consistent-return
async function validateRegister(req, res, next) {
  console.log('body got to validate:', req.body);
  // validate body using joi
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.warn(error);
    res.status(400).send({
      error: error.details.map((e) => ({
        errorMsg: e.message,
        field: e.context.key,
      })),
    });
    return false;
  }
}

module.exports = {
  validateRegister,
};