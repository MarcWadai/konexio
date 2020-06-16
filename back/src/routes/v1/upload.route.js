const express = require('express');
const upload = require('../../middlewares/upload');
const uploadController = require('../../controllers/upload.controller');

const router = express.Router();

router
    .route('/')
    .post(upload.array('image', 1), uploadController.uploadImage)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: Upload of image
 */

/**
 * @swagger
 * path:
 *  /upload:
 *    post:
 *      summary: Upload an image
 *      description: Upload an image to an s3 bucket
 *      tags: [Upload]
 *      consumes:
 *        - multipart/form-data
 *      parameters:
 *        - in: formData
 *          name: upfile
 *          type: file
 *          description: The file to upload.
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/User'
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */