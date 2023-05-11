const express = require('express');
const router = express.Router();
const movieconroller=require("../controllers/api_movies_controller")

router.get("/movie/latest",movieconroller.getlatest)
router.get("/movie/popular",movieconroller.getpouplar)
router.get("/movie/:name",movieconroller.getmovieByName)
router.get("/tv/:name",movieconroller.getTvByName)


//קריאות של הnode js
router.get("/tv/:id/credits",movieconroller.getCasttv)
router.get("/movie/:id/credits",movieconroller.getCast)
router.get("/movie/:id/similar",movieconroller.getsimilar)


module.exports = router;