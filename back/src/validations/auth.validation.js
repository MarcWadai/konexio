const Joi = require('@hapi/joi');
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    firstname: Joi.string().required(),
    lastname: Joi.string().allow(''),
    status: Joi.string().valid('TEACHER', 'TEACHER_ASSISTANT', 'STUDENT'),
    picture: Joi.string().required(),
    newsletter: Joi.boolean()
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  refreshTokens
};
