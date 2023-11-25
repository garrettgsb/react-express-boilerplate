const multer  = require('multer');

// Set up multer storage and upload
// Uploaded image is saved in 'public/uploads folder'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = {
  upload
};
