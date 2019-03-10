const Joi = require('joi');

exports.validatesignup = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required()
  })
  const result = Joi.validate(req.body, schema)
  if (result.error) {
    res.send({msg: result.error.details[0].message});
  } else {
    next();
  }
};
