if (process.env.NODE_ENV !== `production`) {
    require(`dotenv`).config();
}


const express = require('express');
const router = express.Router();
const catchAsync = require(`../utils/catchAsync.js`);
const { isLoggedIn, isAuthor, validateLand } = require(`../middleware.js`);
const land = require(`../controllers/lands.js`);
const multer = require(`multer`);
const { storage } = require(`../cloudinary/index.js`);
const upload = multer({ storage });


router.route('/')
    .get(catchAsync(land.index))
    .post(isLoggedIn, upload.array(`image`), validateLand, catchAsync(land.createLand));



router.route('/:id')
    .get(catchAsync(land.showLand))
    .put(isLoggedIn, isAuthor, upload.array(`image`), validateLand, catchAsync(land.updateLand))
    .delete(isLoggedIn, isAuthor, catchAsync(land.deleteLand));



router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(land.renderEditForm));

module.exports = router;
