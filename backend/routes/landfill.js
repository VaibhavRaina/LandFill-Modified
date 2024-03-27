const express = require(`express`);
const router = express.Router();
const landfill = require(`../controllers/landfill`);
router.get(`/`, landfill.home);

