var express = require('express');
var router = express.Router();

const shelterController = require('../controllers/shelter-controller');

router.get('/shelters', shelterController.lsitarShelter)
router.get('/shelters/:id', shelterController.listarPerId)
router.get('/shelters/especie', shelterController.lsitarEspecies)

module.exports = router;