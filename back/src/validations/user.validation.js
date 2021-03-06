const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      firstname: Joi.string(),
    })
    .min(1),
};

module.exports = {
  getUsers,
  getUser,
  updateUser
};
