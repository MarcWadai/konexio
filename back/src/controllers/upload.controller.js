const catchAsync = require('../utils/catchAsync');

const uploadImage = catchAsync((req, res) => {
  if (req.files.length) {
    res.status(200).json(req.files[0].location);
  }
  res.status(200).json("req.files[0].location");
})

module.exports = {
  uploadImage
};
