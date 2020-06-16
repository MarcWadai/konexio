const catchAsync = require('../utils/catchAsync');

const uploadImage = catchAsync((req, res) => {
  res.status(200).json(req.files[0]);
})

module.exports = {
  uploadImage
};
