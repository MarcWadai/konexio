
const aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3');

const BUCKET_NAME = "konexio-image"
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: 'eu-west-1'
});
const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: BUCKET_NAME,
        acl: 'public-read',
        key: function (req, file, cb) {
          console.log('req', req);
            console.log(file);
            cb(null, `${Date.now().toString()}${file.originalname}`); //use Date.now() for unique file keys
        }
    })
  });


module.exports = upload