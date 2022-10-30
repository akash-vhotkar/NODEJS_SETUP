const multer = require('multer');
const multerS3 = require('multer-s3');


const storage = multer.memoryStorage({
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: function(req, file, callback) {
      callback(null, true);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});


const uploadFile = multer({ storage: storage });

module.exports = { uploadFile };